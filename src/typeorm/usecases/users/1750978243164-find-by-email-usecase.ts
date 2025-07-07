import { MigrationInterface, QueryRunner } from "typeorm";

export class FindByEmailUsecase1750978243164 implements MigrationInterface {
    execute(email: string) {
        throw new Error('Method not implemented.');
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
