require('dotenv').config();
const cors = require('cors');
const connection = require("./db-config");
const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

require('./routes')(app);



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

