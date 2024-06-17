import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './router/router.js'; 

const app = express();

app.use(cors({
    origin: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://nagendrayadav13938:bGpDM8dw7Vba0mhl@cluster0.2m4pjjo.mongodb.net/', {
    dbName: "Doctor_details"
})
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.use('/', router); 

app.get("/", (req, res) => {
    console.log("done");
    res.status(200).send({
        message: "ok"
    });
});

app.listen(3000, () => {
    console.log("server is working on 3000");
});
