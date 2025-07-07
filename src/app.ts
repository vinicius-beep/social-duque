import Fastify from 'fastify'
import { AppDataSource } from './data-source'
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'

export async function startApp() {
    const app = Fastify()
    await app.register(swagger, {
        openapi: {
            info: {
                title: 'API de Usuários',
                version: '1.0.0',
                description: 'Documentação da API usando Swagger',
            },
        },
    })

    await app.register(swaggerUI, {
        routePrefix: '/docs',
        uiConfig: {
            docExpansion: 'full',
            deepLinking: false,
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
    })

    await AppDataSource.initialize()
        .then(() => {
            console.log('Banco de dados inicializado')
        })
        .catch((ex) => {
            console.log('Erro de conexão do banco de dados', ex)
            process.exit(1)
        })
    return app
}