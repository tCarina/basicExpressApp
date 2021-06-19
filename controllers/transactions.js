const transactions =  require('express').Router()
const transArr = require('../models/transactions')

transactions.get('/', (req, res) => {
    res.json(transArr)
})

transactions.get('/:transID', (req, res) => {
    const transaction = transArr[req.params.transID]

    if(transaction) {
        res.json(transaction)
    } else {
        res.redirect('/404')
    }

})

transactions.post('/', (req, res) => {
    const { body } = req
    transArr.push(body)
    const newID = transArr.length - 1
    res.json(transArr[newID])
})

transactions.put('/:transID', (req, res) => {
const { transID } = req.params
const { body } = req
transArr[transID] = body
res.json(transArr[transID])
})

transactions.delete('/:transID', (req, res) => {
    const { transID } = req.params;
    const delTrans = transArr.splice(transID, 1)
    res.json(delTrans[0])
})


module.exports = transactions