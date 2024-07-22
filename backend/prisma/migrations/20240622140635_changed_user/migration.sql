-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_gamesId_fkey`;

-- AlterTable
ALTER TABLE `user` MODIFY `gamesId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_gamesId_fkey` FOREIGN KEY (`gamesId`) REFERENCES `Games`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
