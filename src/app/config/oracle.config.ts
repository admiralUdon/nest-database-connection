export const oracleConfig = () => ({
    libDir          : "/opt/oracle/instantclient_19_20",
    connectString   : process.env.ORACLE_URL,
    user            : process.env.ORACLE_USER,
    password        : process.env.ORACLE_PASS,
});