const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");

const sessionOptions ={
    secret:"mysupersecretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.errorMsg=req.flash("error");
    next();
});


const listings = require("./routes/listing.js");

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


app.use("/listings",listings);


app.use((req,res,next)=>{
    next(new ExpressError(404,"PAGE NOT FOUND!"));
});

app.use((err,req,res,next)=>{
    if(err.name=="CastError"){
        res.send("CastError");
    }
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