
import { Request, Response } from 'express';
import initDao from './init.dao';

const dgrp = async (req: Request, res: Response) => {
    try {
        const idx_point: number = Number(req.params.idx_point);
        if (isNaN(idx_point)) {
            return res.status(400).send('Invalid idx_point parameter');
        } 
        const data  = await initDao.getDgrp(idx_point);
        const doorImages = data.door_imgs.split('; ');
        const enterImages = data.enter_imgs.split('; ');
        const response = [...doorImages , ...enterImages]        
        res.json(response);
    } catch (error) {
        res.status(500).send('init area method error!');
    }
}
const door_typ = async (req: Request, res: Response) => {
    try {    
        const idx_point: number = Number(req.params.idx_point);
        if (isNaN(idx_point)) {
            return res.status(400).send('Invalid idx_point parameter');
        } const data = await initDao.getDoorTyp(idx_point);
        console.log(data);
        
        res.json(data);
    } catch (error) {
        res.status(500).send('init area method error!');
    }
}

export default {
    dgrp,
    door_typ
}