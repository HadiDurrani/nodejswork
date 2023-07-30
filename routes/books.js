const express = require('express')
const router = express.Router()
const Book = require('../models/book')
const Author = require("../models/author")

//All books route
router.get('/', async (req,res)=>{
    res.send('All Books')
})

//new book route
router.get('/new', async (req,res)=>{
    try{
        const authors = await Author.find({})
        const book = new Book()
        res.render('books/new', {
            authors: authors,
            book: book
        })
    }catch{
        res.redirect('/books')
    }
})

// create book route
router.post('/', async (req,res)=>{
    res.send('Create book')
})

module.exports = router