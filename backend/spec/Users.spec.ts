import bcrypt from "bcrypt";
import { User } from "../src/entities";
import { UserDao } from "../src/daos";

describe("Users Routes", () => {
  it("Should add users", () => {
    const userDao = new UserDao();

    const user: User = {
      rut: "111.111-6",
      businessName: "Company A",
      password: "companya1234"
    };
    const response = userDao.add(user);
    expect(response).toBeDefined();
  });
  it("Should return the user RUT", async () => {
    const userDao = new UserDao();

    const userToAdd: User = {
      rut: "111.111-6",
      businessName: "Company A",
      password: "companya1234"
    };
    const token = await userDao.add(userToAdd);
    const user = await userDao.get(token);
    expect(user).toEqual({
      rut: "111.111-6",
      businessName: "Company A"
    });
  });
  it("Exist user", async () => {
    const userDao = new UserDao();

    const userToAdd = {
      rut: "111.111-6",
      password: "companya1234"
    };
    const user = await userDao.add(userToAdd);
    const result = await userDao.validate(userToAdd.rut, userToAdd.password);
    expect(result).not.toBe(false);
  });
});
