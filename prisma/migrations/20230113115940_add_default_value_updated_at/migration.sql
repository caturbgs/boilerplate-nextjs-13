-- AlterTable
ALTER TABLE `comment` MODIFY `updatedAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);

-- AlterTable
ALTER TABLE `post` MODIFY `updatedAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);
