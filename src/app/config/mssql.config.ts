export const mssqlConfig = () => ({
    server      : process.env.MSSQL_URL,
    port        : parseInt(process.env.MSSQL_PORT) || 1433,
    database    : process.env.MSSQL_DB,
    user        : process.env.MSSQL_USER,
    password    : process.env.MSSQL_PASS,
    options     : {
        encrypt: process.env.MSSQL_OPT_ENCRYPT === "true" || false, // Use encryption for Azure SQL
    }
});