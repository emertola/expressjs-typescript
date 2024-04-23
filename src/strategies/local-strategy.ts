// import passport from 'passport';
// import { IVerifyOptions, Strategy } from 'passport-local';
// import { comparePassword, mockUsers } from '../utils';
// import { User } from '../mongoose/schemas/user.schema';

// passport.serializeUser((user: any, done) => {
//   done(null, user?.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const findUser = await User.findById(id);

//     if (!findUser) {
//       throw new Error('User Not Found!');
//     }
//     done(null, findUser);
//   } catch (error) {
//     done(error, null);
//   }
// });

// passport.use(
//   new Strategy(
//     async (
//       username: string,
//       password: string,
//       done: (
//         error: any,
//         user?: Express.User | false,
//         options?: IVerifyOptions
//       ) => void
//     ) => {
//       // code here will be responsible for validating username & password
//       // ex. validate if the user exists from the database

//       try {
//         const findUser = await User.findOne({ username });

//         if (!findUser) {
//           throw new Error('User not found!');
//         }

//         if (!comparePassword(password, findUser.password)) {
//           throw new Error('Bad Credentials');
//         }

//         done(null, findUser);
//       } catch (error) {
//         done(error);
//       }
//     }
//   )
// );

// export default passport;
