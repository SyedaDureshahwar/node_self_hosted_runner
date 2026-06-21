import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Node App Running Successfully"
    });
});

app.listen(PORT, () => {
    console.log(`HY Server is running on port number ${PORT}`);
});