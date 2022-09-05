const express = require("express");
const cors = require("cors");
const path = require("path");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.paths = {
            api: '/api'
        }

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());

        // Pick up React index.html file
        this.app.use(
            express.static(path.join(__dirname, "../frontend/build"))
        );
    }

    // Bind controllers to routes
    routes() {
        this.app.all('*', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin,");
            res.header("Access-Control-Allow-Credentials", "true");
            next();
        });

        this.app.use(this.paths.api, require("../routes/readblogs"));

        this.app.get("*", (req, res) => {
            res.sendFile(
                path.join(__dirname, "../frontend/build/index.html")
            );
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port: ", this.port);
        })
    }
}

module.exports = Server;