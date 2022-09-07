SELECT p.product_id, p.product_name, c.category_name 
from categories c inner join products p 
 on c.category_id= p.category_id
