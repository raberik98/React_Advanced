import express from "express"
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

const data = [
    {id: 1, info: "Hello there!"},
    {id: 2, info: "Proxy works!"},
    {id: 3, info: "Seems good!"}
]

app.use(express.json())

app.use("/", (req,res,next) => {
    const ip = req.ip;
    console.log(`Request came from: ${ip}`);
    next()
})

app.use("/assets", express.static(`${__dirname}/dist/assets`));

app.get("/", (req, res, next) => {
    res.sendFile(path.join(`${__dirname}/dist/index.html`));
})


app.get("/api/v1/data", (req,res) => {
    res.send(data)
})

app.listen(3000, () => {
    console.log("Backend running at port: 3000");
})
