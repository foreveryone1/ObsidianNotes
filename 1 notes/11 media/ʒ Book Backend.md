author::
status::
rating::
notes::
date-read::

### Currently Reading
```dataview
TABLE rows.author AS Author, rows.status AS Status, rows.rating AS Rating, rows.date-read AS "Date Read", rows.notes AS Notes
FROM "1 notes/11 media/111 books"
WHERE status = "Reading"
SORT file.name asc
GROUP BY file.link AS Text
```


### Read
```dataview
TABLE rows.author AS Author, rows.status AS Status, rows.rating AS Rating, rows.date-read AS "Date Read", rows.notes AS Notes
FROM "1 notes/11 media/111 books"
WHERE status = "Read"
SORT file.name asc
GROUP BY file.link AS Text
```

### All Books
```dataview
TABLE rows.author AS Author, rows.status AS Status, rows.rating AS Rating, rows.date-read AS "Date Read", rows.notes AS Notes
FROM "1 notes/11 media/111 books"
SORT file.name asc
GROUP BY file.link AS Text
```

### Plan to Read
```dataview
TABLE rows.author AS Author, rows.status AS Status, rows.rating AS Rating, rows.notes AS Notes
FROM "1 notes/11 media/111 books"
WHERE status = "To Read"
SORT file.name asc
GROUP BY file.link AS Text
```