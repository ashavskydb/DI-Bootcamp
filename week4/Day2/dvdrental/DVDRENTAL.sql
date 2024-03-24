-- SELECT * FROM customer;

-- SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM customer;

-- SELECT DISTINCT create_date FROM customer;

-- SELECT * FROM customer ORDER BY first_name DESC;

-- SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;

-- SELECT a.address, a.phone FROM customer AS c JOIN address AS a ON c.address_id = a.address_id WHERE a.district = 'Texas';

-- SELECT * FROM film WHERE film_id IN (15, 150);

-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Your Favorite Movie';

-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title LIKE 'YourFavoriteMovie%';

-- SELECT film_id, title, rental_rate FROM film ORDER BY rental_rate LIMIT 10;

-- SELECT film_id, title, rental_rate
-- FROM film
-- WHERE rental_rate NOT IN (
--     SELECT rental_rate
--     FROM film
--     ORDER BY rental_rate
--     LIMIT 10
-- )
-- ORDER BY rental_rate
-- LIMIT 10;

-- SELECT c.first_name, c.last_name, p.amount, p.payment_date
-- FROM customer c
-- JOIN payment p ON c.customer_id = p.customer_id
-- ORDER BY p.payment_id;

-- SELECT f.*
-- FROM film f
-- LEFT JOIN inventory i ON f.film_id = i.film_id
-- WHERE i.film_id IS NULL;

-- SELECT city.city, country.country
-- FROM city
-- JOIN country ON city.country_id = country.country_id;

-- SELECT p.customer_id, c.first_name AS customer_first_name, c.last_name AS customer_last_name, 
--        p.amount, p.payment_date, s.staff_id
-- FROM payment p
-- JOIN customer c ON p.customer_id = c.customer_id
-- JOIN staff s ON c.store_id = s.store_id
-- ORDER BY s.staff_id;







