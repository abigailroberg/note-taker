const router = require('express').Router()
const { notes } = require('../../db/db')
const filterByTitle = require('../../lib/notes')

let id = 0;

// get notes
router.get('/notes', (req, res) => {
    let results = notes
    if(req.query) {
        results = filterByTitle(req.query, results)
    }
    res.json(results)
})

// post note
/* router.post('/notes', (req, res) => {
    req.body.id = this.toString(id++)
    
}) */

module.exports = router