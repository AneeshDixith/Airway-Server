if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require("express");
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const transcactionHistoryRouter = require('./routes/transactionHistory');
const flightsFetchingRouter = require('./routes/flightsFetching');
const bookingRouter = require('./routes/booking');
const cors  = require('cors');

const testRouter = require('./routes/testRoute');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

connectDB();

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/transactionHistory', transcactionHistoryRouter);
app.use('/flights', flightsFetchingRouter);
app.use('/test', testRouter);
app.use('/booking', bookingRouter);


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});