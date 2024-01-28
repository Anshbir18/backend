import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();

const port = process.env.PORT || 4000; // Use process.env.PORT or a default value

app.get('/', (req, res) => {
    res.send("hello ans");
});

app.get('/home', (req, res) => {
    res.send("<h1>please login</h1>");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
