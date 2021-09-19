import { signUp, signIn} from "../controllers/authController";
import Supertest from 'supertest'
import { Request, Response, NextFunction} from 'express'
import { createUser, findUser} from '../services/user'
import { any } from "sequelize/types/lib/operators";
import { json } from "sequelize/types";
import { existsSync } from 'fs';
import * as dep from '../services/user'
// mockear la importacion
/* jest.mock('../services/user', () => {
  return {
    createUser: jest.fn().mockReturnValue({
      create: jest.fn(),
      findOne: jest.fn(),
    })
    
  }
})
describe("Response", () => {
  test("It should response the GET method", async () => {
    const response = await (signUp);
    expect({
      meta: {
        type: "error",
        status: 403,
        message: "username and password are required"
      }
    }).toBe(signUp);
  });
});
describe("Request", () => {
  type Request = {body:{password: number; email: string}}
  const request: Request = {
    body: {password: 123, email: 'ana@test'}
  }
  test("It should response the GET method", async () => {
// @ts-ignore
    const response = await (signUp( request, {}));//función de res para probar si se lleva o no se llama
    expect(request).toBe(request.body);
  });
});  */
/* onst mock = mock(createUser(jest.mock{}))

describe('', function() {
  it('add', function() {
    let result = Calculator.Sum(5, 2);
    expect(result).toBe(7);   
  });

  it('substract', function() {
    let result = Calculator.Difference(5, 2);
    expect(result).toBe(3);
  });
}); */
/* describe('User Registration', () => {
  test('User has an invalid first name', async () => {
    const mockRequest: any = {
      body: {
        name: 'Doe',
        email: 'jdoe@abc123.com',
        password: 'Abcd1234',

      },
    };

    const mockResponse: any = {
      json: jest.fn(),
      status: jest.fn(),
    }; 

    const mockNext: NextFunction = jest.fn();
    
    await createUser(mockRequest, mockResponse(Json), mockNext(nextFunction));

    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith(
      new Error('First name must be between 2 and 50 characters')
    );
  });
}); */

import mock from '../services/__mocks__/user'
jest.mock('../services/__mocks__/user', () => jest.fn)
const mockedfindUserByEmail = signIn as jest.Mocked<typeof signIn>;

describe("Login API", () => {
  test('should return email', async () => {

    const req = {
      email: "email@domain.com",
      password: "password"
    };

    mockedfindUserByEmail.mockImplementation(async () => false)

    expect(await (req)).toBe('email@domain.com');
  });
});