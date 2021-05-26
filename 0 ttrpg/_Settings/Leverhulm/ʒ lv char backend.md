# All Members
```dataview
TABLE rows.name AS Name, rows.present AS Present,rows.passive-perception AS "Pass Perc.", rows.passive-investigation AS "Pass Inv.", rows.passive-arcana AS "Pass Arca", rows.passive-history AS "Pass Hist.", rows.passive-nature AS "Pass. Nature", rows.passive-religion AS "Pass Relig.", rows.passive-insight AS "Pass Insight", rows.senses as "Senses" FROM "0 ttrpg/_Settings/Leverhulm" and #pc
SORT file.name asc
group by file.path
```


# Present
```dataview
TABLE rows.name AS Name, rows.passive-perception AS "Pass Perc.", rows.passive-investigation AS "Pass Inv.", rows.passive-arcana AS "Pass Arca", rows.passive-history AS "Pass Hist.", rows.passive-nature AS "Pass. Nature", rows.passive-religion AS "Pass Relig.", rows.passive-insight AS "Pass Insight", rows.senses as "Senses" FROM "0 ttrpg/_Settings/Leverhulm" and #pc
WHERE present = "yes"
SORT file.name asc
group by file.path
```