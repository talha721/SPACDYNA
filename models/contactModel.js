const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Your Name'],
        maxlength: [15, 'Name cannot be more than 15 characters']
    },
    surname: {
        type: String,
        required: [true, 'Please Enter Your Surname'],
        maxlength: [15, 'Name cannot be more than 15 characters']
    },
    email: {
        type: String,
        required: [true, 'Enter Your Email ID'],
        unique: true,
    },
    message: {
        type: String,
        required: true
    }
})

module.exports = mongoose.models.contact_queries || mongoose.model('contact_queries', ContactSchema)