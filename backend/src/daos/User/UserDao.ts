import { IUser, User } from "../../entities";
import { validate } from "rut.js";
import md5 from "md5";

export interface IUserDao {
  get: (token: string) => Promise<Object>;
  add: (user: IUser) => Promise<string>;
  validate: (user: string, password: string) => Promise<string | boolean>;
}

export class UserDao implements IUserDao {
  users: User[] = [
    {
      rut: "111.111-6",
      businessName: "Company A",
      password: "6a18d85cb6d0adcaf3cf5bf1f9410428",
      token: "440617fd-5e46-4213-ae7d-7daff2ec8fe7"
    },
    {
      rut: "222.222-1",
      businessName: "Company B",
      password: "d4379b88756404d01a2de9d7465d262b",
      token: "fe4d56ae-e661-4b1c-a150-156060e63323"
    }
  ];

  public add(user: IUser): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        if (validate(user.rut)) {
          const password = await md5(user.password);
          this.users.push(new User(user.rut, user.businessName, password));
          resolve(this.users[this.users.length - 1].token);
        } else {
          reject(user);
        }
      } catch (error) {
        console.log("error", error);
        reject(false);
      }
    });
  }

  public validate(rut: string, password: string): Promise<string | boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        const passwordHashed = await md5(password);
        const user = this.users.find(
          (user: User) => user.rut == rut && user.password == passwordHashed
        );
        if (!user) return reject(false);

        resolve(user.token);
      } catch (error) {
        console.log("error ", error);
        reject(false);
      }
    });
  }

  public get(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const user = this.users.find((user: User) => user.token === token);
      if (!user) {
        return reject(false);
      }
      resolve(user.rut);
    });
  }
}
