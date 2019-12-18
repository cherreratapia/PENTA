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
  it("Should return the user RUT", () => {
    const userDao = new UserDao();

    const userToAdd: User = {
      rut: "111.111-6",
      businessName: "Company A",
      password: "companya1234"
    };
    const token = userDao.add(userToAdd);
    const user = userDao.get(token);
    expect(user).toEqual({
      rut: "111.111-6",
      businessName: "Company A"
    });
  });
});
