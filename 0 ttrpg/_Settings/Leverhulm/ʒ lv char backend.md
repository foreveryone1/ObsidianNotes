### All Members
```dataview
TABLE rows.present AS "Present?" ,rows.passive-perception AS "Pass. Perc.", rows.passive-investigation AS "Pass. Inv.",rows.passive-insight AS "Pass. Insight",  rows.passive-arcana AS "Pass. Arca", rows.passive-history AS "Pass. Hist.", rows.passive-nature AS "Pass. Nature", rows.passive-religion AS "Pass. Relig.", rows.senses as "Senses" FROM "0 ttrpg/_Settings/Leverhulm" and #pc
SORT file.name asc
group by file.link
```


### Present
```dataview
TABLE rows.passive-perception AS "Pass. Perc.", rows.passive-investigation AS "Pass. Inv.",rows.passive-insight AS "Pass. Insight",  rows.passive-arcana AS "Pass. Arca", rows.passive-history AS "Pass. Hist.", rows.passive-nature AS "Pass. Nature", rows.passive-religion AS "Pass. Relig.", rows.senses as "Senses" FROM "0 ttrpg/_Settings/Leverhulm" and #pc
WHERE present = "yes"
SORT file.name asc
group by file.link
```