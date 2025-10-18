const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use(express.json());
app.use(cors({origin:"*", credentials:true}));


app.use("/gps", require("./routes/toggelRoute"));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://chinmaypuhan420_db_user:ltrHyDlCOsKn9AIy@cluster0.o4bq1ct.mongodb.net/testStatus';

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));






