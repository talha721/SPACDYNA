const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MultiBlogsSchema = new Schema({
    title: String,
    content: String,
    date: Date
})

module.exports = mongoose.models.multiBlogs || mongoose.model('multiBlogs', MultiBlogsSchema)