/*
  Warnings:

  - Added the required column `email` to the `Idea` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Idea` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Idea" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_Idea" ("description", "id", "status", "title") SELECT "description", "id", "status", "title" FROM "Idea";
DROP TABLE "Idea";
ALTER TABLE "new_Idea" RENAME TO "Idea";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
