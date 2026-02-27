/*
A LEFT JOIN ensures all records from the "left" table are included
in the result set. If a record in the left table has no match in
the "right" table, the columns from the right table will have
NULL values
*/
SELECT Person.firstName, Person.lastName, Address.city, Address.state
FROM Person
LEFT JOIN Address
ON Person.personId = Address.personId