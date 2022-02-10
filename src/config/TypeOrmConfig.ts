import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
    type: "mysql",
    host: process.env.host, 
    port: parseInt(process.env.port),
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    synchronize: false,
    migrationsRun: true,
    migrationsTableName: "MigrationHistory",
    extra: {
        trustServerCertificate: true,
    },
    entities: ["src/domain/entities/**/*.entity{.ts,.js}"],
    migrations: ["src/infra/migrations/**"],    
    cli: {
        entitiesDir: "src/domain/entities",
        migrationsDir: "src/infra/migrations"
    }
}

export = config;