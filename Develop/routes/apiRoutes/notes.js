const router = require('express').Router()
const { notes } = require('../../db/db')

// get all notes
router.get('/notes', (req, res) => {
    let results = notes
    res.json(results)
})

module.exports = router