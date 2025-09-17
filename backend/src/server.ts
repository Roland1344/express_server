import express from "express";
import cors from "cors";
import { json } from "stream/consumers";
import * as path from "node:path";
import  * as url from "node:url";
import router from "./router.js";

const PORT = 8000;
const HOST = "127.0.0.1";

const server = express();

const __dirname = import.meta.dirname;
const staticFilesDir = path.join(__dirname, "..", "dist");

server.use(cors());
server.use(express.json())
server.use(express.static(staticFilesDir))

server.use("/api", router)
server.listen(PORT, () => console.log(`Server is running at http://${HOST}:${PORT}`));