const express = require("express")
const router = express.Router()

exports.read = (req, res) => {
    res.send('All the cats')
}

exports.create = (req, res) => {
    res.send(req.params);
}

exports.post = (req, res) => {
   
    const {from , to, body } = req.body;

    res.send(req.body);
}