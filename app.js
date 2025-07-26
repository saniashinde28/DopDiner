const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const ejsMate = require("ejs-mate");

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

app.get("/",(req,res)=>{
    res.send("root");

});


//Index route
app.get("/listings",async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
    
    }
);

//Show route
app.get("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});


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

app.listen(8080,()=>{
    console.log("server is listening!");
})