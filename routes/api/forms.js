


const express = require('express')
const router = express.Router();
const Form = require('../../models/Form');

router.post('/', async (req, res) => {
    console.log('post: api/form')
    const form = new Form(req.body)
    form.save()
    res.end()
})

router.get('/', async (req, res) => {
    console.log('get: api/form')
    const forms = await Form.find().sort({ date: -1 })
    res.json(forms)
})
module.exports = router