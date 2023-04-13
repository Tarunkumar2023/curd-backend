const express = require("express")
require("../src/db/conn")
const MensRanking = require("../src/models/mens.js");
const app = express()
const port = process.env.port || 6000 // hosting a port 
app.use(express.json()) //  accessing json file from postman in express
app.get("/", (req, res) => {
    res.send(" Welcome to our world ")
})
app.post("/mens", async (req, res) => {
    try {
        console.log(req.body);
        const user = new MensRanking({
            Name: req.body.Name, 
            dob: req.body.dob,
            Country: req.body.Country,

        })
        user.save();
        res.status(200).json({
            data: user
        })
    } catch (e) {
        res.status(400).send(e);
    }
})
app.get("/getdetails",async (req, res) => {
    try {
        const getData = await MensRanking.find({}).sort({"Ranking":1})
        console.log(getData);
        res.json({
            data: getData
        });
    } catch (e) {
        res.status(400).send(e);
    }
}) // get by id upadte 
app.get("/getdetails/:id",async (req, res) => { 
    try {
        const _id = req.params.id
        const getDatas = await MensRanking.findById({_id})
        console.log(getDatas);
        res.json({
            data: getDatas
        });
    } catch (e) {
        res.status(400).send(e);
    }
})
app.patch("/patchdetails/:id",async (req, res) => { 
    try {
        const _id = req.params.id
        const patchData = await MensRanking.findByIdAndUpdate(_id,req.body,{new :true})
        console.log(patchData);
        res.json({
            data:patchData
        });
    } catch (e) {
        res.status(500).send(e);
    }
})
app.delete("/deletedetails/:id",async (req, res) => { 
    try {
        const _id = req.params.id
        const deleteData = await MensRanking.findByIdAndDelete(_id)
        console.log(deleteData);
        res.json({
            data:deleteData
        });
    } catch (e) {
        res.status(500).send(e);
    }
})
app.listen(port, () => {
    console.log(`Connection is live at port no.${port}`);
})
