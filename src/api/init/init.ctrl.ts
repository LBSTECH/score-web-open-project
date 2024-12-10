import {Request , Response} from 'express';
import initDao from './init.dao';

const area = async (req : Request,res : Response)=>{
    try{
        const data = await initDao.getArea();
        res.json(data);
    }catch(error){
        res.status(500).send('init area method error!');
    }
}
const sideBar = async (req : Request , res : Response) =>{
    try{
        const idx_area = Number(req.body.idx_area)
        const data = await initDao.getSideBar(idx_area);
        res.json(data)
    }catch(errro){
        res.status(500).send('init sideBar method error!');
    }
}
export default {
    area,
    sideBar
}