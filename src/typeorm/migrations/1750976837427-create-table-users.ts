import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsers1750976837427 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                { name: 'id', type: 'varchar', isPrimary: true },
                { name: 'name', type: 'varchar', isNullable: false },
                { name: 'email', type: 'varchar', isNullable: false, isUnique: true },
                { name: 'phone', type: 'varchar', isNullable: false, isUnique: true },
                { name: 'password', type: 'varchar', isNullable: false },
                { name: 'created_at', type: 'datetime', default: 'CURRENT_TIMESTAMP' }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
