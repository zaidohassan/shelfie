UPDATE shelfie
SET 
productname = $2,
url = $3,
price = $4
WHERE
product_id = $1