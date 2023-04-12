import db from '../db/connection.js'
import Makeup from '../models/Makeup.js';
import makeups from '../db/makeups.json' assert {type: 'json'};


let newMakeups = makeups.map((makeup) => {
  return {
    name: makeup.name,
    brand: makeup.brand,
    image: makeup.image_link,
    productLink: makeup.product_link,
    description: makeup.description,
    colours: makeup.product_colors.map(({ hex_value, colour_name }) => ({ hex_value, colour_name }))
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
