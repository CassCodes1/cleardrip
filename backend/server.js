const express = require('express');
const app = express();
const cors = require('cors');

const { notFound, errorHandler } = require('./middleware/errorMiddleware.js');

require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', require('./routes/userRoutes'));
app.use('/api/v1/contact', require('./routes/contactRoutes'));
app.use('/api/v1/subscription', require('./routes/subscriptionRoutes'));
app.use('/api/v1', require('./routes/adminRoutes/bookingRoutes.js'));
app.use('/api/v1', require('./routes/adminRoutes/customerRoutes.js'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port: ${port}`));
