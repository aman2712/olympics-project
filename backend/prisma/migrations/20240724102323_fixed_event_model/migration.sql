/*
  Warnings:

  - You are about to drop the column `gameId` on the `event` table. All the data in the column will be lost.
  - Added the required column `game_id` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `Event_gameId_fkey`;

-- AlterTable
ALTER TABLE `event` DROP COLUMN `gameId`,
    ADD COLUMN `game_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_game_id_fkey` FOREIGN KEY (`game_id`) REFERENCES `Game`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
