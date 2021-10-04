import { signUp, signIn} from "../controllers/authController";
import { Request, Response} from 'express'
import { createUser, findUser} from '../services/user'
import { existsSync } from 'fs';
import * as dep from '../services/user'
// mockear la importacion
 jest.mock('../services/user', () => {
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
    expect(signUp.name).toBe(403);
  });
});
describe("User Registration", () => {
  type Request = {body:{password: number; email: string}}
  const request: Request = {
    body: {password: 123, email: 'ana@test'}
  }
  test("It should response the GET method", async () => {
// @ts-ignore
    const response = await (signUp( request, {}));//función de res para probar si se lleva o no se llama
    expect(request).toBe(request.body);
  });
});  
