export const postgresConfig = () => ({
    host        : process.env.POSTGRES_HOST,
    port        : parseInt(process.env.POSTGRES_POST) || 5432,
    database    : process.env.POSTGRES_DB,
    user        : process.env.POSTGRES_USER,
    password    : process.env.POSTGRES_PASS
});