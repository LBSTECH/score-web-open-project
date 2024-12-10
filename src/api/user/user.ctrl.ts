import userDao from './user.dao';
import { Request, Response } from "express";

const index = async (req: Request, res: Response) => {
  try {
    const data = await userDao.getUsers();
    res.send(data);
  } catch (error) {
    res.status(500).send('An error occurred while fetching players');
  }
};

const testUser = async (req: Request, res: Response) => {
  try {
    const limit = Number(req.params.limit);
    const data = await userDao.testUser(limit);
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
}; 

export default {
  index,
  testUser,
};