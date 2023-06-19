const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/mainRoutes'));
app.use('/', require('./routes/contactRoutes'));
app.use('/', require('./routes/subscriberRoutes'));

app.listen(port, () => console.log(`Listening on port: ${port}`));
