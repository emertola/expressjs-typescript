import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import routes from './routes';
import mongoose from 'mongoose';
// import './strategies/local-strategy';
import './strategies/google-oauth2.strategy';

const app = express();
const PORT = 3001;

mongoose
  .connect('mongodb://localhost:27017/mongodb-try')
  .then(() => console.log('Connected to the database!'))
  .catch((error) => console.log(`Error: ${error}`));

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: 'session123',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000 * 60,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/v1', routes);

app.listen(PORT, () => console.log(`Running express server on PORT ${PORT}`));
