-- CREATE TABLE items(
--  item_id SERIAL PRIMARY KEY,
--  item_name VARCHAR (50) NOT NULL,
--  item_price INT  NOT NULL)
 
-- INSERT INTO items (item_id, item_name, item_price)
-- VALUES('1','Small Desk','100');

-- INSERT INTO items (item_id, item_name, item_price)
-- VALUES('2','Large desk','300');

-- INSERT INTO items (item_id, item_name, item_price)
-- VALUES('3','Fan','80')

-- SELECT * FROM items WHERE item_price > 80;

-- SELECT * FROM items WHERE item_price <= 300;

-- SELECT * FROM customers WHERE customers_surname = 'Smith';

-- SELECT * FROM customers WHERE customers_surname = 'Jones';

SELECT * FROM customers WHERE customers_name <> 'Scott';

