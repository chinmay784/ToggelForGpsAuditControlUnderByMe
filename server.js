const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use(express.json());

app.use("/gps", require("./routes/toggelRoute"));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/AccessDb';

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));






