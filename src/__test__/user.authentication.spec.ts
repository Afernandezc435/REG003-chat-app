import { signUp} from "../controllers/authController";
import Supertest from 'supertest'
import { Request, Response} from 'express'
/* describe('Test Sequelize Mocking', () => {
  it('Should get value from mock', async () => {
    const userTest = await signUp(Request, Response);
    expect(Request).toEqual({
      meta: {
        type: "error",
        status: 403,
        message: "username and password are required"
      }
    })
  }) */

  /*it('should resolve with false for invalid token', async () => {
    const response = await user.auth('invalidToken')
    expect(response).toEqual({error: {type: 'unauthorized', message: 'Authentication Failed'}})
  })*/
/* }) */

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await (signUp);
    expect({
      meta: {
        type: "error",
        status: 403,
        message: "username and password are required"
      }
    }).toBe(403);
  });
});