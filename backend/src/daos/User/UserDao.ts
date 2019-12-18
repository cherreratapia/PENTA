import { IUser, User } from "../../entities";
import { validate } from "rut.js";
import bcrypt from "bcrypt";

export interface IUserDao {
  get: (token: string) => Promise<Object>;
  add: (user: IUser) => Promise<string>;
}

export class UserDao implements IUserDao {
  users: User[] = [];

  public add(user: IUser): Promise<string> {
    return new Promise(async (resolve, reject) => {
      if (validate(user.rut)) {
        const password = await bcrypt.hashSync(user.password, 10);
        this.users.push(new User(user.rut, user.businessName, password));
        resolve(this.users[this.users.length - 1].token);
      } else {
        reject(user);
      }
    });
  }
  public get(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const user = this.users.find((user: User) => user.token === token);
      if (!user) {
        return reject(false);
      }
      resolve({
        rut: user.rut,
        businessName: user.businessName
      });
    });
  }
}
