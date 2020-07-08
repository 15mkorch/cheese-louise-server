



const mongoose = require('mongoose')
const FromSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String
    },
    zipCode: {
        type: String
    },
    eventType: {
        type: String
    },
    proposedDates: {
        type: String
    }
})
module.exports = Form = mongoose.model('form', FormSchema)