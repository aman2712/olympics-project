/*
  Warnings:

  - You are about to drop the column `gamesId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `games` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `gametypes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `gametypes` DROP FOREIGN KEY `GameTypes_gamesId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_gamesId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `gamesId`,
    ADD COLUMN `games_id` INTEGER NULL;

-- DropTable
DROP TABLE `games`;

-- DropTable
DROP TABLE `gametypes`;

-- CreateTable
CREATE TABLE `Game` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Game_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GameType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `game_type` VARCHAR(191) NOT NULL,
    `game_id` INTEGER NULL,

    UNIQUE INDEX `GameType_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlayerInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `flight_number` VARCHAR(191) NOT NULL,
    `boarding_time` DATETIME(3) NOT NULL,
    `landing_time` DATETIME(3) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `hotel_name` VARCHAR(191) NOT NULL,
    `room_number` VARCHAR(191) NOT NULL,
    `player_id` INTEGER NOT NULL,

    UNIQUE INDEX `PlayerInfo_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_games_id_fkey` FOREIGN KEY (`games_id`) REFERENCES `Game`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameType` ADD CONSTRAINT `GameType_game_id_fkey` FOREIGN KEY (`game_id`) REFERENCES `Game`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlayerInfo` ADD CONSTRAINT `PlayerInfo_player_id_fkey` FOREIGN KEY (`player_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
