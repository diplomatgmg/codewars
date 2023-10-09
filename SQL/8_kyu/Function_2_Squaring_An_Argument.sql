/*
https://www.codewars.com/kata/523b623152af8a30c6000027
*/

--# write your SQL statement here: 
-- you are given a table 'square' with column 'n'
-- return a table with:
--   this column and your result in a column named 'res'
select n, n*n as res
from square