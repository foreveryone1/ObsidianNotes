```dataview
TABLE rows.partypositive AS "Positive Relations", rows.partynegative AS "Negative Relations", rows.allies AS "Allies", rows.enemies AS "Enemies"
FROM "0 ttrpg/_Settings/Western"
WHERE type = "faction"
SORT file.name asc
GROUP BY file.link AS Faction
```


### USA BOUNTY BOARD

### Mexican BOUNTY BOARD

### Divine Republic's bounty board

