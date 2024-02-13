import prisma from "../db";

export const getUpdates = async (req, res) => {
  const updates = await prisma.update.findMany({
    where: {
      productId: req.params.productId,
    },
  });

  res.json({ data: updates });
};

export const getUpdate = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: update });
};

export const createUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.params.productId,
    },
  });

  if (!product) {
    return res.json({ message: "There's not a Product with the provided ID" });
  }

  const update = await prisma.update.create({
    data: req.body,
  });

  res.json({ data: update });
};

export const updateUpdate = async (req, res) => {
  const update = await prisma.update.update({
    where: {
      id: req.params.id,
    },
    data: {
      ...req.body,
    },
  });

  res.json({ data: update });
};

export const deleteUpdate = async (req, res) => {
  const deleted = await prisma.update.delete({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: deleted });
};
