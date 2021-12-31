const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({
    title: String,
    content: String,
    users: String,
    folder: String,
    date: Date
})

module.exports = mongoose.models.blogs || mongoose.model('blogs', BlogSchema)