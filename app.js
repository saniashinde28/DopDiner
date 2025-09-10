const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

app.engine("ejs", ejsMate);

const mongo_url= 'mongodb://127.0.0.1:27017/dopamine';

main().then(()=>console.log("connected to db"))
.catch(err=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(mongo_url);
}

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
// Serve static files from "public" folder
app.use(express.static('public'));


// Index route with optional category filtering
app.get("/listings", wrapAsync(async (req, res) => {
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
app.get("/listings/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/show.ejs",{listing});
}));


// app.get("/testListing",async (req,res)=>{
//     let sampleListing = new Listing({
//     title: "Aroma Therapy",
//     category: "Starter",
//     description: "Light a scented candle or use essential oils for mood elevation.",
//     mood_benefit: ["Relaxation", "Calmness"],
//     indoor_outdoor: "Indoor",
//     tools_needed: ["Essential oils", "Diffuser", "Candles"],
//     tags: ["self-care", "aromatherapy", "relaxation"],
//     icon_url: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
//   });
//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("successful testing");

// });



app.use((req,res,next)=>{
    next(new ExpressError(404,"PAGE NOT FOUND!"));
});

//Custom ERROR Handling
app.use((err,req,res,next)=>{
    let {statusCode=500,message="NOT FOUND"} = err;
    res.status(statusCode).send(message);
    //res.status(statusCode).send(message);
    }
);


app.listen(8080,()=>{
    console.log("server is listening!");
})