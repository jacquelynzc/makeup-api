import db from '../db/connection.js'
import Makeup from '../models/Makeup.js';
import makeups from '../db/makeups.json' assert {type: 'json'};

let newMakeups = makeups.map((makeup) => {
  let productColors = makeup.product_colors.map(({ hex_value: hexValue, colour_name: colorName }) => 
  ({ hexValue, colorName }))
  
  return {
    name: makeup.name,
    brand: makeup.brand,
    productType: makeup.product_type,
    image: makeup.image_link,
    productLink: makeup.product_link,
    description: makeup.description,
    colours: productColors
  };
});

Makeup.deleteMany({})
  .then(() => {
    Makeup.create(newMakeups)
      .then(makeups => {
        console.log(makeups);
        db.close();
      });
  });
