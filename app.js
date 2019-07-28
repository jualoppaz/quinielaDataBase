var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var compression = require("compression");

var favicon = require("serve-favicon");

var app = express();
var path = require("path");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

var port = process.env.PORT || 8888;
const forceDomain = require("forcedomain");

const { HTTP_CODES } = require("./server/constants");

app.use(
    compression({
        threshold: 0
    })
);

app.use(favicon(__dirname + "/app_old/public/img/favicon.png"));

app.use(express.static(__dirname + "/public"));

app.use("/bower_components", express.static(__dirname + "/bower_components"));
app.use("/build", express.static(__dirname + "/build"));

app.set("port", port);

app.set("views", path.join(__dirname + "/server/views"));

app.set("view engine", "pug");

app.use(
    session({
        secret: "super-duper-secret-secret",
        resave: true,
        saveUninitialized: true
    })
);

app.use(bodyParser.json());

var ev = require("express-validation");

ev.options({
    status: HTTP_CODES.UNPROCESSABLE_ENTITY,
    statusText: "Unprocessable Entity"
});

var forceDomainOpts = {
    hostname: "www.pronostigol.es",
    excludeRule: /[a-zA-Z0-9][a-zA-Z0-9-]+\.herokuapp\.com/i
};

if (process.env.ACTIVATE_SSL) {
    forceDomainOpts.protocol = "https";
}

app.use(forceDomain(forceDomainOpts));

require("./server/router")(app);

function clientErrorHandler(err, req, res, next) {
    console.log("Entramos en clientErrorHandler");

    if (err instanceof ev.ValidationError) {
        return res.status(HTTP_CODES.UNPROCESSABLE_ENTITY).json(err);
    }

    if (req.url.indexOf("/api") > -1) {
        return res
            .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
            .send(JSON.stringify(err, null, 4));
    }

    next(err);
}

function errorHandler(err, req, res, next) {
    console.log("Entramos en errorHandler");
    res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).render("error", {
        message: err
    });
}

app.use(clientErrorHandler);
app.use(errorHandler);

var http = require("http");

var httpServer = http.createServer(app);

httpServer.listen(port, function(err, res) {
    console.log("Servidor HTTP corriendo en puerto: " + port);
});
