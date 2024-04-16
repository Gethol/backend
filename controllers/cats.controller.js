const express = require("express")
const router = express.Router()
const params = {
    from: 'Nairobi',
    to: 'Talinn',
    body: 'tomorrow'
}

exports.read = (req, res) => {
    res.send('All the cats')
}

exports.create = (req, res) => {
    res.send(req.params);
}

exports.post = (req, res) => {
   
    // res.send(req.body)
    const {from,to, body } = req.body;

    res.send(req.body);
}
exports.put = (req, res) => {
    const id = req.params.id


    res.send(req.params.id);

}