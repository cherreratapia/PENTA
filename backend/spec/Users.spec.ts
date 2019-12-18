import bcrypt from "bcrypt";

describe("Users Routes", () => {
  it("Should add users", () => {
    const userDao = new UserDao();
    let password: string = "";

    const user: User = {
      RUT: "111.111-6",
      businessName: "Company A",
      password: bcrypt.hashSync("companya1234", 10)
    };
    const response = userDao.addUser(user);
    expect(response).toBeDefined();
  });
});
