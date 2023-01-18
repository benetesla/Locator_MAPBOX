const mongoose = require('mongoose');
const geocoder = require('../utils/Geo');
const StoresChema = new mongoose.Schema({
    storeID: {
        type: String,
        required: [true, "Please add a storeID"],
        unique: true,
        trim: true,
        maxlength: [10, "StoreID must be less than 10 characters"]
    },
    adress:{
        type: String,
        required: [true, "Please add an adress"]
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
//Geocode & create location
StoresChema.pre('save', async function(next){
    const loc = await geocoder.geocode(this.adress);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress
    };
    this.adress = undefined;
    next();
});
module.exports = mongoose.model('Store', StoresChema);