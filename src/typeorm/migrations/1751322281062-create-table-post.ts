import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTablePost1751322281062 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'posts',
            columns: [
                { name: 'id', type: 'varchar', isPrimary: true },
                { name: 'content', type: 'text', isNullable: false },
                { name: 'authorId', type: 'varchar' },
                { name: 'created_at', type: 'datetime', default: 'CURRENT_TIMESTAMP' }
            ],
        }));

        await queryRunner.createForeignKey('posts', new TableForeignKey({
            columnNames: ['authorId'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('posts');
    }
}
