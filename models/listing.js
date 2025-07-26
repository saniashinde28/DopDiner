const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    category :{
        type : String,
        required : true,

    } ,

    description :{
        type : String,
        required : true,
    },
    mood_benefit : [String],
    tools_needed : {
        type : [String],
        required : true,
    },
    tags : {
        type : [String],
        required : true,
    },
    icon_url : {
        type : String,
        required : true,
        set : (v)=>v===""?"https://cdn.jsdelivr.net/npm/feather-icons/dist/icons/activity.svg":v,
    },

});

const Listing = mongoose.model("Listing",listingSchema);
module.exports=Listing;