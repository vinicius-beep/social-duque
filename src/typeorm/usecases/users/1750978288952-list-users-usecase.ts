import { MigrationInterface, QueryRunner } from "typeorm";

export class ListUsersUsecase1750978288952 implements MigrationInterface {
    execute() {
        throw new Error('Method not implemented.');
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
