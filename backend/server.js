const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
    res.send("CropGuard backend is running 🚀");
});

// demo API
app.post("/api/analyze", (req, res) => {
    res.json({
        disease: "Leaf Blight",
        confidence: "92%",
        suggestion: "Use recommended fungicide and avoid overwatering"
    });
});

// start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
