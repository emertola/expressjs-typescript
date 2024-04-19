import { Request, Response } from 'express';
import { CreateUserDto } from '../dtos';
import { BaseResponse } from '../types';
import { User } from '../types';
import {
  ValidationError,
  matchedData,
  validationResult,
} from 'express-validator';
import { hashPassword } from '../utils';
import { User as UserSchema } from '../mongoose/schemas/user.schema';
import session from 'express-session';

export const getAllUsers = (request: Request, response: Response) => {
  console.log('sessionstore', request.sessionStore);
  console.log('session', request.session);
  request.sessionStore.get(
    request.session.id,
    (err: any, sessionData?: session.SessionData | null | undefined) => {
      if (err) {
        console.log('error', err);
        throw err;
      }
      console.log('session data', sessionData);
    }
  );
  // const result = validationResult(request);

  // if (!result.isEmpty()) {
  //   return response.status(400).send({
  //     data: result.array(),
  //     message: 'Error creating the user!',
  //   });
  // }

  // const {
  //   query: { filter, value },
  // } = result;

  // console.log('filter', filter);
  // console.log('value', value);
  // if (filter && value) {
  // }

  // if (!request.user) {
  //   return response.sendStatus(401);
  // } else {
  //   return await UserSchema.find().then((users) => response.send(users));
  // }
};

export const getUserById = (request: Request, response: Response) => {
  response.send({});
};

export const createUserHandler = async (
  request: Request<{}, {}, CreateUserDto>,
  response: Response<BaseResponse<User | ValidationError[]>>
) => {
  const result = validationResult(request);

  if (!result.isEmpty()) {
    return response.status(400).send({
      data: result.array(),
      message: 'Error creating the user!',
    });
  }

  const data: Record<string, any> = matchedData(request, {
    includeOptionals: false,
  });
  data.password = hashPassword(data.password);

  const newUser = new UserSchema(data);

  try {
    const savedUser = await newUser.save();
    return response.status(201).send({
      data: savedUser.toObject(),
      message: 'User successfully created!',
    });
  } catch (error) {
    return response.sendStatus(400);
  }
};
