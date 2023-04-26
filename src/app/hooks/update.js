const fs = require('fs');
const path = require('path');

let items = [];

let newJH = {
    align: "center",
    label: "nico"
}
let generateJH =  `
        {
            "component": "JText",
            "data": {
                "aling": "${newJH.align}",
                "label": "${newJH.label}"
            }
        }`;

items.push(generateJH);

const filePath = path.join(__dirname, '../../../update.json');

fs.writeFileSync(filePath, 
    `{
        "template": "mint",
        "meta": 
            {
                "title": "Esto es un tituloooo",
                "description": "lololo"
            },
        "items": [${items}
        ]
    }`,
); 
