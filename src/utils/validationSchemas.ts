import { Schema } from 'express-validator';

export const createEmployeeSchema: Schema = {
  name: {
    isLength: {
      options: {
        min: 3,
      },
      errorMessage: 'Name field must be at least 3 characters!',
    },
    notEmpty: {
      errorMessage: 'Name field must not be empty!',
    },
  },
  email: {
    isEmail: {
      errorMessage: 'Must be a valid email!',
    },
    notEmpty: {
      errorMessage: 'Email field must not be empty!',
    },
    isLength: {
      options: {
        min: 3,
      },
      errorMessage: 'Email field must be at least 3 characters!',
    },
  },
};

export const employeeQuerySchema: Schema = {
  name: {
    notEmpty: {
      errorMessage: 'Must not be empty!',
    },
    isLength: {
      options: {
        min: 3,
      },
      errorMessage: 'Must be 3 characters minimum!',
    },
  },
};

export const createUserValidationSchema: Schema = {
  username: {
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage:
        'Username must be at least 5 characters with a max of 32 characters',
    },
    notEmpty: {
      errorMessage: 'Username cannot be empty',
    },
    isString: {
      errorMessage: 'Username must be a string!',
    },
  },
  displayName: {
    notEmpty: true,
  },
  password: {
    notEmpty: true,
  },
};

export const getUsersListSchema: Schema = {
  filter: {
    isString: true,
    notEmpty: {
      errorMessage: 'Must not be empty',
    },
    isLength: {
      options: {
        min: 3,
        max: 10,
      },
      errorMessage: 'Must be at least 3-10 characters',
    },
  },
};
