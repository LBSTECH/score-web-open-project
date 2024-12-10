import db from '../../config/dbConfig';

const getUsers = async () => {
  try {
    const query = `SELECT * FROM kor2.player LIMIT 100`;
    const result = await db.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error fetching player:', error);
    throw error;
  }
};

const testUser = async (limit: number) => {
  try {
    const query = `SELECT * FROM kor2.player LIMIT $1`;
    console.log(query);
    const result = await db.query(query, [limit]);
    return result.rows;
  } catch (error) {
    console.error('SQL Error:', error);
    throw error;
  }
};

export default {
  getUsers,
  testUser,
};