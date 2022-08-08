import db from "../db/connection.js";

export async function getAllUsers() {
  const result = db.query(`SELECT * FROM users;`);
  return result.rows;
}
