import { UserDao } from "../daos";
import { Request, Response, Router } from "express";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";
import { IUser } from "../entities";

// Init shared
const router = Router();
const userDao = new UserDao();

/******************************************************************************
 *                      Add User - "POST /api/users/register"
 ******************************************************************************/

router.post("/register", async (req: Request, res: Response) => {
  const { rut, businessName, password } = req.body;
  if (!rut || !businessName || !password) return res.status(BAD_REQUEST);
  const user: IUser = {
    rut,
    businessName,
    password
  };
  const response = await userDao.add(user);
  if (!response)
    return res.status(BAD_REQUEST).json({ message: "RUT INVALIDO" });
  return res.status(CREATED).json({ token: response });
});

/******************************************************************************
 *                      Validate User - "POST /api/users/login"
 ******************************************************************************/

router.post("/login", async (req: Request, res: Response) => {
  const { rut, password } = req.body;
  if (!rut || !password) return res.status(BAD_REQUEST);

  const response = await userDao.validate(rut, password);
  if (!response)
    return res
      .status(BAD_REQUEST)
      .json({ message: "RUT o CONTRASEÑA INVALIDOS" });
  return res.status(OK).json({ token: response });
});

export default router;
