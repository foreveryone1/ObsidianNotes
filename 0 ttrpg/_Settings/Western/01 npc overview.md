```dataview
TABLE rows.faction AS Faction
FROM "0 ttrpg/_Settings/Western"
WHERE type = "npc"
SORT file.name asc
GROUP BY file.link AS Text
```

