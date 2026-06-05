const express = require("express");
const app = express();
app.use(express.json());

const logs = [];

// Record activity
app.post("/logActivity", (req, res) => {
    const { userId, timestamp, action, metadata } = req.body;

    if (!userId || !timestamp || !action) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    logs.push({ userId, timestamp, action, metadata: metadata || {} });
    res.json({ success: true });
});

// Retrieve logs
app.post("/getLogs", (req, res) => {
    const { userId, start, end } = req.body;

    if (!userId && !start && !end) {
        return res.status(400).json({ error: "Invalid query parameters" });
    }

    let results = logs;

    if (userId) results = results.filter(l => l.userId === userId);
    if (start) results = results.filter(l => l.timestamp >= start);
    if (end) results = results.filter(l => l.timestamp <= end);

    res.json(results.slice(0, 100)); // pagination
});

app.listen(3009, () => console.log("Microservice 9 running on port 3009"));
