import mongoose from 'mongoose';

const locationSchema = mongoose.Schema({
    country: String,
    city: String,
    type: String,
    airport: Number,
    perHour: Number,
    perKM: Number,
    baseAmount: Number,
    baseKM: Number,
})

var LocationSchema = mongoose.model('LocationSchema', locationSchema);

export default LocationSchema;