import Makeup from '../models/Makeup.js';
import makeups from '../db/makeups.json' assert {type: 'json'};

let newMakeups = makeups.map((makeup) => {
    return {
        name: makeups.name,
        brand: makeups.brand,
        image: makeups.image_link,
        productLink: makeups.product_link,
        description: makeups.description,
        colours: makeups.product_colors[{hex_value, colour_name}]
    }
})

Makeup
    .deleteMany({})
    .then(() => {
        Makeup.create(newMakeups).then(data => {
            console.log(data)
            process.exit()
        })
    })
