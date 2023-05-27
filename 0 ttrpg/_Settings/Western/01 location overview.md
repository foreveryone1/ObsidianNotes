```dataview
LIST
FROM "0 ttrpg/_Settings/Western"
WHERE type = "location"
SORT file.name asc
GROUP BY file.link AS Text
```