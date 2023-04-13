<center> 

# MAKEUP API
  
## •───────•°•❀•°•───────•
  


### <center>

***API Endpoint***: <br> <a href="https://makeup.herokuapp.com/makeup" target="_blank">makeup.herokuapp.com/makeup</a> 


<br>

### <center> ***API Calls & Paths***: 

###### *Response Format*: JSON

</center>

- **GET**: 
  - <a href="https://makeup.herokuapp.com/makeup" target="_blank">Show makeup database with all products</a>
  - <a href="https://makeup.herokuapp.com/makeup/brand/colourpop" target="_blank">Search by brand</a> (brand: colourpop)
  - <a href="https://makeup.herokuapp.com/makeup/type/eyeliner" target="_blank">Search by name</a> (name: cloud paint)
  - * broken * <a href="https://makeup.herokuapp.com/makeup/type/cloud paint" target="_blank">Search by type</a> (type: eyeliner)
- **POST**: <br>
  Add new makeup to the database using path: /
- **PUT**: <br>
   Update makeup by ID using path: /:id
- **DELETE**: <br>
  Deletes a makeup entry by ID using path: /:id


<center>




---


### ***Filters***

</center>



- To search for the brand “benefit”, append '/brands/benefit' <br>
*example*:
[makeup.herokuapp.com/brands/benefit](https://makeup.herokuapp.com/brands/benefit)

- To search for the name "wowder", append '/name/wowder' <br>
*example*:
[makeup.herokuapp.com/name/wowder](https://makeup.herokuapp.com/name/wowder)

- Theoretically you should be able to search for a type (for example, "lipstick") by appending '/type/lipstick' 
  On the localhost route, it works perfectly. However when appending '/type/lipstick' to the heroku URL, it returns "message": "Makeup not found!". 
  <br>
*example*:
[makeup.herokuapp.com/type/lipstick](https://makeup.herokuapp.com/type/lipstick)

---

### ***Brands List***

</center>

```
almay
alva
anna sui
annabelle
benefit
boosh
burt's bees
butter london
c'est moi
cargo cosmetics
china glaze
clinique
coastal classic creation
colourpop
covergirl
dalish
deciem
dior
dr. hauschka
e.l.f.
essie
fenty
glossier
green people
iman
l'oreal
lotus cosmetics usa
maia's mineral galaxy
marcelle
marienatie
maybelline
milani
mineral fusion
misa
mistura
moov
nudus
nyx
orly
pacifica
penny lane organics
physicians formula
piggy paint
pure anada
rejuva minerals
revlon
sally b's skin yummies
salon perfect
sante
sinful colours
smashbox
stila
suncoat
w3llpeople
wet n wild
zorah
zorah biocosmetiques
```
---

<center>

### ***Dependencies***

</center>


- express
- mongoose
- cors
- chalk
- nodemon









----
----
Source: <a href="https://www.makeup-api.herokuapp.com/" target="_blank">Makeup API</a>

