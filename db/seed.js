import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
  const folders = [
    {
      name: "folder1"
    },
    {
      name: "folder2"
    },
    {
      name: "folder3"
    }
  ];

  const files = [
    { name: "file1", size: 23, folder_id: 1 },
    { name: "file2", size: 22, folder_id: 1 },
    { name: "file3", size: 1512, folder_id: 1 },
    { name: "file4", size: 1223, folder_id: 1 },
    { name: "file5", size: 220, folder_id: 1 },
    { name: "file1", size: 23, folder_id: 2 },
    { name: "file2", size: 22, folder_id: 2 },
    { name: "file3", size: 1512, folder_id: 2 },
    { name: "file4", size: 1223, folder_id: 2 },
    { name: "file5", size: 220, folder_id: 2 },
    { name: "file1", size: 23, folder_id: 3 },
    { name: "file2", size: 22, folder_id: 3 },
    { name: "file3", size: 1512, folder_id: 3 },
    { name: "file4", size: 1223, folder_id: 3 },
    { name: "file5", size: 220, folder_id: 3 }
  ]

  for(const folder of folders) {
    await db.query(
      "INSERT INTO folders (name) VALUES ($1)",
      [folder.name]
    );
  }

  for(const file of files) {
    await db.query(
      "INSERT INTO files (name, size, folder_id) VALUES ($1, $2, $3)",
      [file.name, file.size, file.folder_id]
    );
  }
}
