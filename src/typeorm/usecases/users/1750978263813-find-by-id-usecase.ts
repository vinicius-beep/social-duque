import { MigrationInterface, QueryRunner } from "typeorm";

export class FindByIdUsecase1750978263813 implements MigrationInterface {
    execute(id: string) {
        throw new Error('Method not implemented.');
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
