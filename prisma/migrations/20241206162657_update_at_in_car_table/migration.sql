-- AlterTable
ALTER TABLE `car` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `client` ALTER COLUMN `updatedAt` DROP DEFAULT;
