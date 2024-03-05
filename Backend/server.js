import express from "express"
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

const data = [
    {   id: 1, name: "Boti", pref: "Frontend", comment: "He likes React a lot!" },
    {   id: 2, name: "Alex", pref: "Mintent is", comment: "Ez az ember mindenhez is ért!" },
    {   id: 3, name: "Erik", pref: "Valamihez néha", comment: "Likes Next.js" }
]

app.use(express.json())

app.use("/", (req,res,next) => {
    const ip = req.ip;
    console.log(`Request came from: ${ip}`);
    next()
})


app.get("/api/allPeople", (req,res) => {
    res.json(data)
})


app.get("/api/person/:id", (req,res) => {
    res.json(data.find(nextPerson => nextPerson.id == req.params.id))
})




app.use("/assets", express.static(`${__dirname}/dist/assets`));

app.get("/*", (req, res, next) => {
    res.sendFile(path.join(`${__dirname}/dist/index.html`));
})

app.listen(3000, () => {
    console.log("Backend running at port: 3000");
})
