import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());



app.use("/api",chatRoutes);




// ✅ Listen last
// app.listen(PORT, () => {
//     console.log(`Server running on ${PORT}`);
//     connectDB();
// });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected with Database!");

        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`);
        });

    } catch (err) {
        console.log("Failed to connect with DB", err);
    }
};

connectDB();



// // ✅ Routes first
// app.post("/test", async (req, res) => {
//     const { message } = req.body;

//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
//         },
//         body: JSON.stringify({
//             model: "gpt-3.5-turbo",
//             messages: [
//                 { role: "user", content: req.body.message }
//             ]
//         })
//     };

//     try {
//         const response = await fetch("https://api.openai.com/v1/chat/completions", options);
//         const data = await response.json();
//         // console.log(data.choices[0].message.content);
//         res.send(data.choices[0].message.content); //reply
//     } catch (err) {
//         console.log(err);
//         res.status(500).send({ error: "Something went wrong" });
//     }
// });

