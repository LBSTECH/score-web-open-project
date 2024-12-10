import { Request, Response } from 'express';

const index = async (req: Request, res: Response) => {
    try {
      res.send('rank INDEX');
    } catch (error) {
      res.status(500).send('An error occurred while fetching players');
    }
  };
  
  const rankMonth = async (req: Request, res: Response) => {
    try {
      res.send(process.env.NODE_ENV);
    } catch (error) {
      res.status(500).send('An error occurred while fetching players');
    }
  };
  
  export default {
    index,
    rankMonth,
  };