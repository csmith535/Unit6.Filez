import db from "./client";

export async function getFiles() {
    const sql = `SELECT * FROM files`;
    const { rows: files } = await db.query(sql);
    return files;
};

export async function getFolders() {};

export async function getFolderById({ id }) {};