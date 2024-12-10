import db from '../../config/dbConfig';

const getArea = async () => {
    try{
        const query = 'SELECT idx_area , sgg2 , score ,ST_AsGeoJson(ST_Centroid(ST_Transform(geom, 4326))) as center ,ST_AsGeoJSON(ST_Transform(geom, 4326)) as geom ,code ,entrc , area.inner FROM ROAD_SCORE.AREA ORDER BY idx_area';
        const result = await db.query(query);        
        return result.rows;
    }catch(error){
        console.error('getArea method ERROR!');
        throw new Error;
    }
}
const getSideBar = async (idx_area : number ) => {
    try{
        const query = `SELECT * FROM ROAD_SCORE.AREA_TYPE WHERE IDX_AREA = ${idx_area}`
        const result = await db.query(query);
        return result.rows;
    }catch(error){
        console.error('getSideBar method ERROR!');
        throw new Error;
    }
}
export default {
    getArea,
    getSideBar
}