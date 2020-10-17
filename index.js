import express from "express";
import request from "request";
import mongoose from "mongoose";
import Wardrobe from "./models/WardrobeModel.js";
import router from './routes/wardrobe.js';


const url = 'mongodb://localhost:27017/'
// import Wardrobe from "../React-Jacket/src/components/forecast/Wardrobe";

const endpoints = router

const app = express();
const port = 3000;
app.use(express.json());

const connectDatabase = async (databaseName = 'Jacket', hostname = 'localhost') => {
    const database = await mongoose.connect(process.env.MONGODB_URI || `mongodb://${hostname}/${databaseName}`,
      {// research
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }
    )
    console.log(`Database connected at mongodb://${hostname}/${databaseName}`)
    return database
  }

//app.use('/wardrobe', router)

// find all the articles in the wardrobe
// app.get('/', async (req, res) => {
//     try {
//         console.log(res, 'yesyes')
//         const wardrobe = await Wardrobe.find({}, (err, wardrobe) => res.json(wardrobe))
//         // console.log(wardrobe)
//         // res.json(wardrobe)
//     } catch (err) {
//         res.send(err)
//     }
// })
app.use('/', endpoints)
const db = connectDatabase()
// db.once('open', function() {
//     console.log(db)
//     db.Wardrobe.find().pretty();
// });
// db.on('error', console.error.bind(console, 'connection error:'));

// app.get("/", (req, res) => {res.send("Hello World!");
    // // res.send(Wardrobe.find(name) => {
    // //     return req.name === Wardrobe.name
    // })
// });

// app.get("/newEndpoint", (req, res) => {res.send("This is my latest endpoint!")});

app.listen(port, () => console.log("listening on port " + port || process.env.port))
