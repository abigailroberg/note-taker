const router = require('express').Router()
const { notes } = require('../../db/db')
const { filterByQuery, createNewNote } = require('../../lib/notes')
const uniqid = require('uniqid')

// get notes
router.get('/notes', (req, res) => {
    let results = notes
    if(req.query) {
        results = filterByTitle(req.query, results)
    }
    res.json(results)
})

// post note
router.post('/notes', (req, res) => {
    // set unique id
    req.body.id = uniqid()
    
    const note = createNewNote(req.body, notes)
    res.json(note)
})

module.exports = router