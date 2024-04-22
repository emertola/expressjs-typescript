import passport from 'passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { User } from '../types';

passport.use(
  new Strategy(
    {
      clientID:
        '7788636284-korj96feuihe4vdgh6g995ng17efag0p.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3001/api/v1/auth/google/redirect',
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, profile);
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});
