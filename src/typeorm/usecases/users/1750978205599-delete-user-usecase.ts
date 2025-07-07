import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteUserUsecase1750978205599 implements MigrationInterface {
    execute(id: string) {
        throw new Error('Method not implemented.');
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
