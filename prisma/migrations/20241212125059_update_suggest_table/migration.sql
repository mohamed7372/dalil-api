/*
  Warnings:

  - You are about to alter the column `startLat` on the `routesegment` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `startLon` on the `routesegment` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `endLat` on the `routesegment` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `endLon` on the `routesegment` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `routesegment` MODIFY `startLat` VARCHAR(191) NOT NULL,
    MODIFY `startLon` VARCHAR(191) NOT NULL,
    MODIFY `endLat` VARCHAR(191) NOT NULL,
    MODIFY `endLon` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `suggest` ADD COLUMN `step` INTEGER NOT NULL DEFAULT 0;
