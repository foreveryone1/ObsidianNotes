### Currently Reading
```dataview
TABLE rows.name AS Name, rows.passive-perception AS "Pass. Perc.", rows.passive-investigation AS "Pass. Inv.",rows.passive-insight AS "Pass. Insight",  rows.passive-arcana AS "Pass. Arca", rows.passive-history AS "Pass. Hist.", rows.passive-nature AS "Pass. Nature", rows.passive-religion AS "Pass. Relig.", rows.senses as "Senses" FROM "1 notes/11 media/111 books"
WHERE status = "reading"
SORT file.name asc
group by file.path
```


### Read
```dataview
TABLE rows.name AS Name, rows.passive-perception AS "Pass. Perc.", rows.passive-investigation AS "Pass. Inv.",rows.passive-insight AS "Pass. Insight",  rows.passive-arcana AS "Pass. Arca", rows.passive-history AS "Pass. Hist.", rows.passive-nature AS "Pass. Nature", rows.passive-religion AS "Pass. Relig.", rows.senses as "Senses" FROM "1 notes/11 media/111 books"
WHERE status = "read"
SORT file.name asc
group by file.path
```

### All Books
```dataview
TABLE rows.author AS Author
FROM "1 notes/11 media/111 books"
SORT file.name asc
GROUP BY file.name AS Text
```