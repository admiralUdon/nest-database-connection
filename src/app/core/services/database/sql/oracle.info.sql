/*
This SQL query retrieves information about the top 10 tables from the 
ALL_TABLES view, which contains metadata about all tables accessible 
to the current user in the database. The query selects columns for 
the table name, owner, tablespace name, and the last analyzed date. 
It orders the results by the last analyzed date in descending order, 
showing the most recently analyzed tables first. This information 
is useful for understanding the structure and management of database tables.
*/

SELECT 
    TABLE_NAME AS TableName,        -- Alias for the name of the table
    OWNER AS TableOwner,            -- Alias for the owner of the table
    TABLESPACE_NAME AS Tablespace,  -- Alias for the tablespace of the table
    LAST_ANALYZED AS LastAnalyzed   -- Alias for the last analyzed date of the table
FROM 
    ALL_TABLES
ORDER BY 
    LAST_ANALYZED DESC NULLS LAST   -- Order the results by last analyzed date in descending order, placing NULLs last
FETCH FIRST 10 ROWS ONLY;           -- Limit the results to the top 10