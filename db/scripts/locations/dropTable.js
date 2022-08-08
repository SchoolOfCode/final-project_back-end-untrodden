import db from "../../connection.js";

async function dropTable() {
  const response = await db.query(
    `DROP TABLE IF EXISTS locations;`
  );
  
  console.log(response);
  
  db.end();
}

dropTable();