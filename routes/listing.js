const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const cookieParser = require("cookie-parser");



const router = express.Router();


// Index route with optional category filtering
router.get("", wrapAsync(async (req, res) => {
    const category = req.query.category; // Get category from query string

    let query = {};
    if (category && category !== "All") {
        query.category = category; // Filter only if category is not "All"
    }

    const allListings = await Listing.find(query);

    // Pass selectedCategory to EJS to highlight active navbar button
    res.render("listings/index.ejs", { 
        allListings, 
        selectedCategory: category || "All"
    });
}));



//Show route
router.get("/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Activity not found!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
}));

module.exports = router;