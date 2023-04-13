<center> 

# MAKEUP API
•───────•°•❀•°•───────•
---
<br>

### <center>***API Endpoint***: <br> <a href="https://www.makeup.herokuapp.com/makeup" target="_blank">makeup.herokuapp.com/makeup</a> 

<br>


<br>

### <center>***API Calls & Paths***: 
</center>

- **GET**: 
  - <a href="https://www.makeup.herokuapp.com/makeup" target="_blank">Show makeup database with all products</a>
  - <a href="https://www.makeup.herokuapp.com/makeup/brand/colourpop" target="_blank">Search by brand</a> (in this case, colourpop)
- **POST**: Add new makeup to the database
  - *Path*: "/"
- **PUT**: Update makeup by ID
  - *Path*: "/:id"
- **DELETE**: Deletes a makeup entry
  - *Path*: "/:id"


<br>
<center>

### ***Response Format***:

JSON

---
<br>

### ***Examples***
To search for the brand “maybelline”, append ’maybelline’ For example:
http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline
To search for the “lipsticks” by the brand “covergirl”, you would append ‘brand=covergirl’ and ‘&product_type=lipstick’. For example:
http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick


Search Parameters
Search for products and filter them by brand, price, product category, tags and many more. Take a look at the full list below!
This API also provides visual representation of the all of JSON data that is available as well

















----
----
Source: <a href="https://www.makeup-api.herokuapp.com/" target="_blank">Makeup API</a>

