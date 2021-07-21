// eslint-disable-next-line import/no-anonymous-default-export
export default {
    "children": [
        {
            name: "Home",
            "hex": "#042A2B",
            children: [{
                name: "Rent",
                "hex": "#074648",
                value: 1600,
                percent: 33,
            },
            {
                name:"Electricty, gas and water",
                "hex": "#0A6467",
                value: 100,
                percent: 3
            },
            {
                name:"Phone",
                "hex": "#0C8185",
                value: 75,
                percent: 1.5
            },
            {
                name:"Insurance",
                "hex": "#0F9EA3",
                value: 25,
                percent: 0.5
            },
            {
                name:"Internet & TV",
                "hex": "#12BCC2",
                value: 85,
                percent: 1.75
            },
            {
                name:"Laundry",
                "hex": "#15D9E0",
                value: 50,
                percent: 0.75
            },
            {
                name:"Parking",
                "hex": "#2BE5EB",
                value: 50,
                percent: 1
            }

            ]
        },
        {
            name: "Food",
            "hex": "#8CC7D1",
            children: [{
                name: "Grocery",
                value: 280,
                "hex": "#6AB6C4",
                percent: 8
            },
            {
                name:"Resturant",
                value: 200,
                "hex": "#AFD8DF",
                percent: 2
            }
            ]
        },
        {
            name: "Transport",
            "hex": "#CDEDF6",
            children: [{
                name: "Car",
                value: 400,
                "hex": "#D3EFF7",
                percent: 8
            },
            {
                name:"Car Insurance",
                value: 325,
                "hex": "#E1F4FA",
                percent: 6.5
            },
            {
                name:"Gas & Maintaince",
                value: 110,
                "hex": "#F0FAFC",
                percent: 2.25
            }
            ]
        },{
            name: "Entertainment",
            "hex": "#EF7B45",
            children: [
            {
                name:"Booze",
                value: 100,
                "hex": "#F18D5E",
                percent: 2
            },
            {
                name:"Hair Cut",
                value: 50,
                "hex": "#F3A079",
                percent: 1
            },
            {
                name: "Movie",
                value: 30,
                "hex": "#F6B394",
                percent: 0.5
            },
            {
                name:"Chiken Tikka",
                value: 20,
                "hex": "#F8C6AF",
                percent: 0.5
            }
            ]
        },{
            name: "Planning",
            "hex": "#D84727",
            children: [{
                name: "Parents",
                value: 675,
                "hex": "#E06F56",
                percent: 13
            },
            {
                name:"Travel",
                value: 250,
                "hex": "#E68974",
                percent: 5
            },
            {
                name:"Stock",
                value: 250,
                "hex": "#EEB0A3",
                percent: 5,
            }
            ]
        }
    ],
    "style": {
        "fill": "#223F9A",
        "fillOpacity": 1,
             
    },
    total:4680,
    savedPercent:4.75,
    clicked: false,
    parent:null,
    child:null
};
