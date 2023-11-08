const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet')
const xss = require('xss-clean')
const errorHandler = require('./middleware/error');

//Load env vars
dotenv.config();

const app = express();

//Dev logging middleware
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

//Helmet Middleware
app.use(helmet())

//xss Middleware
app.use(xss())

//Body parser
app.use(express.json());

//Route files
const cars = require('./routes/cars');
const calculate = require('./routes/calculate');

//Mount routes
app.use('/api/v1/cars', cars);
app.use('/api/v1/calculate', calculate);

app.use(errorHandler)
const PORT = process.env.PORT || 5001;

const server = app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
  
    //Close server and exit process
    server.close(() => process.exit(1));
  });
  