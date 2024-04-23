import passport from 'passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { User } from '../mongoose/schemas/user.schema';

passport.use(
  new Strategy(
    {
      clientID:
        '7788636284-korj96feuihe4vdgh6g995ng17efag0p.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3001/api/v1/auth/google/redirect',
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: (error: any, user?: any) => void
    ) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser) {
          return done(null, existingUser);
        } else {
          const newUser = new User({
            googleId: profile.id,
            email: profile.emails?.[0].value,
            displayName: profile.displayName,
            roles: ['PERM_VIEW_PROJECTS'],
          });

          await newUser.save();
          return done(null, newUser);
        }
      } catch (error: any) {
        return done(new Error(error));
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});
