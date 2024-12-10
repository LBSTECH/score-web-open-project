import db from '../../config/dbConfig';

const getDgrp = async (idx_point: number) => {
    try {
        const query = `
        SELECT 
        KOR2.POINT.IDX_POINT,
        STRING_AGG(DISTINCT DOOR.img, '; ') AS door_imgs,
        STRING_AGG(DISTINCT ENTER.img, '; ') AS enter_imgs
        FROM KOR2.POINT
        JOIN KOR2.REL_POINT_DOOR USING(IDX_POINT)
        JOIN KOR2.DOOR USING(IDX_DOOR)
        JOIN KOR2.REL_POINT_ENT USING(IDX_POINT)
        JOIN KOR2.ENTER USING(IDX_ENT)
        WHERE IDX_POINT = ${idx_point}
        GROUP BY KOR2.POINT.IDX_POINT`        
        const result = await db.query(query);
        return result.rows[0];
    } catch (error) {
        console.error('getArea method ERROR!');
        throw new Error;
    }
}
const getDoorTyp = async (idx_point: number) => {
    try {
        const query = `
        SELECT DOOR.TYP FROM KOR2.POINT
        JOIN KOR2.REL_POINT_DOOR USING(IDX_POINT)
        JOIN KOR2.DOOR USING(IDX_DOOR)
        WHERE IDX_POINT = ${idx_point}
        GROUP BY DOOR.TYP`
        const result = await db.query(query);
        return result.rows;
    } catch (error) {
        console.error('getArea method ERROR!');
        throw new Error;
    }
}

export default {
    getDgrp,
    getDoorTyp,
}