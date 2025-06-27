import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { env } from './config/env'
/* Quando criar a entidade, descomente a 4 */
// import {User} from './entities/User'

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database:env.DATABASE_FILE,
    synchronize: false,
    logging: false,
    entities: [],
    migrations: ['src/typeorm/migrations/*.ts']
})