export const mssqlConfig = () => ({
    server      : process.env.MSSQL_URL,
    database    : process.env.MSSQL_DB,
    user        : process.env.MSSQL_USER,
    password    : process.env.MSSQL_PASS,
    options     : {
        encrypt: true, // Use encryption for Azure SQL
    }
});