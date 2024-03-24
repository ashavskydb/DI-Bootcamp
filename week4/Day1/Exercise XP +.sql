-- CREATE TABLE students(
--  students_id SERIAL PRIMARY KEY,
--  last_name VARCHAR (100) NOT NULL,
--  first_name VARCHAR (100) NOT NULL,
--  birth_date DATE NOT NULL
-- )

-- INSERT INTO students (students_id, last_name, first_name, birth_date)
-- VALUES('1','Benichou','Marc', '1998-02-11');

-- INSERT INTO students (students_id, last_name, first_name, birth_date)
-- VALUES('2','Cohen','Yoan', '2010-03-12');

-- INSERT INTO students (students_id, last_name, first_name, birth_date)
-- VALUES('3','Benichou','Lea', '1987-07-27');

-- INSERT INTO students (students_id, last_name, first_name, birth_date)
-- VALUES('4','Dux','Amelia', '1996-07-04');

-- INSERT INTO students (students_id, last_name, first_name, birth_date)
-- VALUES('5','Grez','David', '2003-06-14');

-- INSERT INTO students (students_id, last_name, first_name, birth_date)
-- VALUES('6','Simpson','Omer', '1980-10-03')

-- SELECT * FROM students;

-- SELECT first_name, last_name FROM students;

-- SELECT * FROM students WHERE students_id = 2;

-- SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- SELECT * FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- SELECT * FROM students WHERE first_name LIKE '%a%';

-- SELECT * FROM students WHERE first_name LIKE 'A%';

-- SELECT * FROM students WHERE first_name LIKE '%a';

-- SELECT * FROM students WHERE first_name LIKE '%_a%';

-- SELECT * FROM students WHERE students_id IN (1, 3);

-- SELECT * FROM students WHERE birth_date >= '2000-01-01';


