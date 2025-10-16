import db from "./client";

export async function getFiles() {
  const sql = `SELECT * FROM files`;
  const { rows: files } = await db.query(sql);
  return files;
}

export async function getFilesWithFolders() {
  const sql = `
    SELECT files.*, folders.name AS folder_name
    FROM files
    JOIN folders ON files.folder_id = folders.id
    `;
  const { rows: files } = await db.query(sql);
  return files;
}

export async function getFolders() {
  const sql = `SELECT * FROM folders`;
  const { rows: folders } = await db.query(sql);
  return folders;
}

export async function getFolderByIdWithFiles({ id }) {
  const sql = `
    SELECT *,
           (
            SELECT json_agg(files) 
            FROM files 
            WHERE files.folder_id = folders.id) 
            AS files
    FROM folders
    WHERE id = $1
  `;

  const { rows: folders } = await db.query(sql, [id]);
  return folders[0];
}

export async function createFile({ name, size, id }) {
  const sql = `
    INSERT INTO files(name, size, folder_id)
    VALUES($1, $2, $3)
    RETURNING *
    `;

  const { rows: file } = await db.query(sql, [name, size, id]);
  return file[0];
}
