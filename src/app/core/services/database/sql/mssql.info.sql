/*
This SQL query retrieves the top 10 objects from the sysobjects table, 
which contains metadata about database objects such as tables, views, 
and procedures. The query selects columns for the object name, type, 
creation date, last altered date, and owner ID. It orders the results by 
the creation date in descending order, showing the most recently created
objects first. This information is useful for understanding the structure 
and history of database objects.
*/

SELECT 
    TOP 10 
    name AS ObjectName,            -- Alias for the name of the object
    xtype AS ObjectType,           -- Alias for the type of the object
    crdate AS CreatedDate,         -- Alias for the creation date of the object
    refdate AS LastAlteredDate,    -- Alias for the last altered date of the object
    uid AS OwnerID                 -- Alias for the owner ID of the object
FROM 
    sysobjects
ORDER BY 
    crdate DESC;                   -- Order the results by creation date in descending order