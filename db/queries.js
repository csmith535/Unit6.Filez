import db from "./client";

export async function getFiles() {
    const sql = `SELECT * FROM files`;
    const { rows: files } = await db.query(sql);
    return files;
};

export async function getFolders() {
    const sql = `SELECT * FROM folders`;
    const { rows: folders } = await db.query(sql);
    return folders;
};

export async function getFolderById({ id }) {
    const sql = `
    SELECT * FROM folders
    WHERE id = $1
  `;

  const { rows: folders } = await db.query(sql, [id]);
  return folders[0];
};