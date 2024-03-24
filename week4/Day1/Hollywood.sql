-- SELECT actor_id, first_name, last_name, age, number_oscars
-- 	FROM public.actors;

-- SELECT * FROM actors WHERE first_name = 'Matt';

-- SELECT * FROM actors WHERE number_oscars >= 3;

-- SELECT last_name FROM actors WHERE first_name != 'Matt' ;

-- SELECT first_name, last_name FROM actors WHERE first_name = 'Matt'  AND 
-- last_name = 'Damon' ;
-- -- 1 row is retrieved, with the field last_name and first_name

-- SELECT first_name, last_name FROM actors WHERE first_name = 'Matt'  AND 
-- last_name = 'Clooney' ;

-- SELECT first_name, last_name FROM actors WHERE first_name = 'Matt'  OR  
-- number_oscars = 2 ;

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Angelina','Jolie','04/06/1975', 1);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Jennifer','Aniston','11/02/1969', 0);

-- SELECT * FROM actors ORDER BY first_name LIMIT 4;

-- SELECT first_name, last_name FROM actors ORDER BY last_name DESC LIMIT 4;

-- SELECT * FROM actors WHERE first_name LIKE '%e%';

-- SELECT * FROM actors WHERE number_oscars >= 5;

-- ALTER TABLE actors RENAME COLUMN age TO birthdate;

-- SELECT COUNT(*) AS actors_count FROM actors;

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- -- VALUES('Brad','Pitt','18/12/1963', );