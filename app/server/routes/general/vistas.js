var middlewares = require("../../middlewares");
var fs = require("fs");
var path = require("path");
var { ROLES } = require("../../constants");
var pjson = require("../../../../package.json");

module.exports = function(app) {
    var actualizarUltimaPagina = function(req) {
        // El if se podria omitir, pero lo dejamos para tener un mayor control

        //console.log("Ruta previa: " + req.path);
        if (
            req.path.indexOf("/api/") == -1 &&
            req.path.indexOf("login") == -1
        ) {
            console.log("Ultima pagina actualizada: " + req.path);
            //req.session.ultimaPagina = req.path;
            req.session.ultimaPagina = req.path;
        }
    };

    var express = require("express");
    var admin = express.Router();

    var funcionesComunes = function(req, res, next) {
        actualizarUltimaPagina(req);
    };

    var general_vistas_inicio = function(req, res, next) {
        funcionesComunes(req, res, next);

        const structured_data_path = "./app/server/views/structuredData/";

        const appVersion = pjson.version;

        res.render("index", {
            structuredData_webApplication: JSON.parse(
                fs.readFileSync(
                    structured_data_path + "webApplication.json",
                    "utf8"
                )
            ),
            structuredData_organization: JSON.parse(
                fs.readFileSync(
                    structured_data_path + "organization.json",
                    "utf8"
                )
            ),
            version: appVersion
        });
    };

    var general_vistas_privacidad = function(req, res) {
        res.render("privacy");
    };

    var general_vistas_acercaDe = function(req, res) {
        res.render("about");
    };

    var general_vistas_preguntasFrecuentes = function(req, res) {
        res.render("preguntasFrecuentes");
    };

    var general_vistas_login = function(req, res) {
        res.render("login");
    };

    var general_vistas_registro = function(req, res) {
        res.render("signup");
    };

    var general_vistas_contacto = function(req, res) {
        res.render("contacto");
    };

    var general_vistas_verificacion_google = function(req, res) {
        res.render("google1e2e247e7cbf40b6");
    };

    var general_vistas_sitemap = function(req, res) {
        res.sendFile("./sitemap.xml", {
            root: path.join(__dirname, "../../../../")
        });
    };

    var general_vistas_robots_txt = function(req, res) {
        res.sendFile("./robots.txt", {
            root: path.join(__dirname, "../../../../")
        });
    };

    var general_vistas_ads_txt = function(req, res) {
        res.sendFile("./ads.txt", {
            root: path.join(__dirname, "../../../../")
        });
    };

    var general_vistas_logos = function(req, res) {
        res.render("logos");
    };

    var general_vistas_admin = function(req, res, next) {
        res.render("admin/dashboard");
    };

    var general_vistas_admin_emails = function(req, res) {
        res.render("admin/emails");
    };

    var general_vistas_admin_emails_email = function(req, res) {
        res.render("admin/email");
    };

    var general_vistas_admin_balanceEconomico = function(req, res) {
        res.render("admin/balanceEconomico");
    };

    var general_vistas_admin_usuarios = function(req, res) {
        res.render("admin/usuarios");
    };

    var general_vistas_admin_usuarios_usuario = function(req, res) {
        res.render("admin/usuario");
    };

    app.get(
        "/",
        middlewares.isAuthorized_view([
            ROLES.GUEST,
            ROLES.BASIC,
            ROLES.PRIVILEGED
        ]),
        general_vistas_inicio
    );
    app.get("/privacidad", general_vistas_privacidad);
    app.get("/acerca-de", general_vistas_acercaDe);
    app.get("/preguntasFrecuentes", general_vistas_preguntasFrecuentes);
    app.get(
        "/login",
        middlewares.isAuthorized_view([ROLES.GUEST]),
        general_vistas_login
    );
    app.get("/signup", general_vistas_registro);
    app.get("/contacto", general_vistas_contacto);
    app.get("/google1e2e247e7cbf40b6.html", general_vistas_verificacion_google);
    app.get("/sitemap.xml", general_vistas_sitemap);
    app.get("/robots.txt", general_vistas_robots_txt);
    app.get("/ads.txt", general_vistas_ads_txt);
    app.get("/logos", general_vistas_logos);

    admin.get(
        "",
        middlewares.isLogged_view,
        middlewares.isAuthorized_view([ROLES.ADMIN]),
        general_vistas_admin
    );
    admin.get(
        "/emails",
        middlewares.isLogged_view,
        middlewares.isAuthorized_view([ROLES.ADMIN]),
        general_vistas_admin_emails
    );
    admin.get(
        "/emails/:id",
        middlewares.isLogged_view,
        middlewares.isAuthorized_view([ROLES.ADMIN]),
        general_vistas_admin_emails_email
    );
    admin.get(
        "/balanceEconomico",
        middlewares.isLogged_view,
        middlewares.isAuthorized_view([ROLES.ADMIN]),
        general_vistas_admin_balanceEconomico
    );
    admin.get(
        "/usuarios",
        middlewares.isLogged_view,
        middlewares.isAuthorized_view([ROLES.ADMIN]),
        general_vistas_admin_usuarios
    );
    admin.get(
        "/usuarios/:id",
        middlewares.isLogged_view,
        middlewares.isAuthorized_view([ROLES.ADMIN]),
        general_vistas_admin_usuarios_usuario
    );

    app.use("/admin", admin);
};
