import express from "express";
import expressws from "express-ws";
import logger from "./config/logger";

const log = logger(__filename.split(/[\\/]/)[-1]);
const app = express();

expressws(app);

const server = app.listen(3000, () => {
	log.info("App running on http://localhost:3000/ (https://localhost:3000/)");
});
