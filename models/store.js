const mongoose = require('mongoose');

const StoresChema = new mongoose.Schema({
    storeID: {
        type: String,
        required: [true, "Please add a storeID"],
        unique: true,
        trim: true,
        maxlength: [10, "StoreID must be less than 10 characters"]
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Store', StoresChema);