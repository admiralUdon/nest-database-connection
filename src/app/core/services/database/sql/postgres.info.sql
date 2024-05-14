/*
This SQL query retrieves information about the top 10 tables from 
the pg_catalog.pg_tables table, which contains metadata about all 
tables within the database. The query selects columns for the table 
name, table owner, schema name, and table creation time. Since PostgreSQL 
does not store the creation time of tables directly, we will order by 
the table name for simplicity. This information is useful for understanding 
the structure and management of database tables.
*/

SELECT 
    tablename AS TableName,         -- Alias for the name of the table
    tableowner AS TableOwner,       -- Alias for the owner of the table
    schemaname AS TableSchema       -- Alias for the schema of the table
FROM 
    pg_catalog.pg_tables
ORDER BY 
    tablename                       -- Order the results by table name
LIMIT 10;                           -- Limit the results to the top 10