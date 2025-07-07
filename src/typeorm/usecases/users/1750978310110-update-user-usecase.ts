import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserUsecase1750978310110 implements MigrationInterface {
    execute(id: string, body: unknown) {
        throw new Error('Method not implemented.');
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
