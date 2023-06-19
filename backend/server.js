const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', require('./routes/mainRoutes'));
app.use('/api/v1', require('./routes/contactRoutes'));
app.use('/api/v1', require('./routes/subscriberRoutes'));

app.listen(port, () => console.log(`Listening on port: ${port}`));
