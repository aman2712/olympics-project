/*
  Warnings:

  - You are about to drop the `playerinfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `playerinfo` DROP FOREIGN KEY `PlayerInfo_player_id_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `country` VARCHAR(191) NULL,
    ADD COLUMN `flight_number` VARCHAR(191) NULL,
    ADD COLUMN `hotel_id` INTEGER NULL,
    ADD COLUMN `landing_time` DATETIME(3) NULL;

-- DropTable
DROP TABLE `playerinfo`;

-- CreateTable
CREATE TABLE `HotelInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `check_in` DATETIME(3) NOT NULL,
    `check_out` DATETIME(3) NOT NULL,
    `room_number` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `HotelInfo_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_hotel_id_fkey` FOREIGN KEY (`hotel_id`) REFERENCES `HotelInfo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
