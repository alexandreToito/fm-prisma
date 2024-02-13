import prisma from "../db";
import { createJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (req, res) => {
  const hash = await hashPassword(req.body.password);

  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      password: hash,
    },
  });

  const token = createJWT(user);
  res.json({ token });
};

export const getUser = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.params.id,
    },
  });

  return res.json({ data: user });
};
