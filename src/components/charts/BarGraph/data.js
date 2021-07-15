// eslint-disable-next-line import/no-anonymous-default-export
export default {
    "children": [
        {
            name: "Home",
            children: [{
                name: "Rent",
                value: 300
            },
            {
                name:"Electricity",
                value: 100
            }
            ]
        },
        {
            name: "Food",
            "hex": "#12939F",
            children: [{
                name: "Grocery",
                value: 300
            },
            {
                name:"Electricity",
                value: 100
            }
            ]
        }
    ],
    "style": {
        "fill": "#223F9A",
        "fillOpacity": 1
    }
};
