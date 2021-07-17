// eslint-disable-next-line import/no-anonymous-default-export
export default {
    "children": [
        {
            name: "Home",
            "hex": "#2dce89",
            children: [{
                name: "Rent",
                "hex": "#2dce00",
                value: 2000
            },
            {
                name:"Electricty, gas and water",
                "hex": "#2dce30",
                value: 100
            },
            {
                name:"Phone",
                "hex": "#2dce60",
                value: 70
            },
            {
                name:"Insurance",
                "hex": "#2dce90",
                value: 25
            },
            {
                name:"Internet & TV",
                "hex": "#2dcf00",
                value: 85
            },
            {
                name:"Laundry",
                "hex": "#2dcf30",
                value: 50
            },
            {
                name:"Parking",
                "hex": "#2dcf60",
                value: 50
            }

            ]
        },
        {
            name: "Food",
            "hex": "#0d6efd",
            children: [{
                name: "Grocery",
                value: 300,
                "hex": "#0d6efd",
            },
            {
                name:"Resturant",
                value: 200,
                "hex": "#0d6efd",
            }
            ]
        },
        {
            name: "Transport",
            "hex": "#6c757d",
            children: [{
                name: "Car",
                value: 400,
                "hex": "#6c757d",
            },
            {
                name:"Car Insurance",
                value: 325,
                "hex": "#6c757d",
            },
            {
                name:"Gas & Maintaince",
                value: 110,
                "hex": "#6c757d",
            }
            ]
        },{
            name: "Others",
            "hex": "#ffc107",
            children: [{
                name: "Movie",
                value: 30,
                "hex": "#ffc107",
            },
            {
                name:"Booze",
                value: 60,
                "hex": "#ffc107",
            },
            {
                name:"Chiken Tikka",
                value: 20,
                "hex": "#ffc107",
            },
            {
                name:"Hair Cut",
                value: 50,
                "hex": "#ffc107",
            }
            ]
        }
    ],
    "style": {
        "fill": "#223F9A",
        "fillOpacity": 1
    },
    total:3875,
    clicked: false,
    parent:null,
    child:null
};
