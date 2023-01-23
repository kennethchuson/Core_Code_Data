


let getting = "name"

//test 1
const data = [
    {
        i_d: 1,
        name: "Justin"
    },
    {
        i_d: 2,
        name: "Marie" 
    }
]

//test 2
const data2 = [
    {
        i_d: 1,
        name: "Justin", 
        folder: [
            {
                i_d: 12,
                name: "Justin2", 
            }, 
            {
                i_d: 13,
                name: "Justin3", 
            }
        ]
    },
    {
        i_d: 2,
        name: "Marie", 
        folder: [
            {
                i_d: 22,
                name: "Justin3", 
            }
        ]
    }
]

//test3 
const data3 = {
    "i_d": 1,
    "name": "Bob",
}

//test4 
const data4 = {
    "Students": [
    
            { "name":"Bob" , "Major":"Physics" }, 
            { "name":"Sally" ,"Major":"Chemistry" }, 
            { "name":null , "Major":"Mathematics" }
    ]
}

//test5
const data5 = {
    "name": "Bidhan",
    "lastName": "Chatterjee",
    "age": 40,
    "address":
        {
            "streetAddress": "144 J B Hazra Road",
            "name": "Burdwan",
            "state": "Paschimbanga",
            "postalCode": "713102"
        },
    "phoneNumber": [
        {
            "type": "personal",
            "number": "09832209761"
        },
        {
            "type": "fax",
            "number": "91-342-2567692"
        }
    ]
}

//test6
const data6 = [
    {
        "authority": "one.com",
        "path": "1",
        "links": [ 
            {
                "name": "Dona", 
                "links": [],
            },
            {
                "authority": "three.com",
                "path": "",
                "links": [],
            }
        ]
    },
    {
        "authority": "www.four.com",
        "links": [ 
            {
                "authority": "seven.com", 
                "links": [
                    {
                        "authority": "app.one.com",
                        "path": "2",
                        "links": [
                            {
                                "authority": "eight.com",
                                "links": []
                            }
                        ]
                    }
                ],
            },
            {
                "authority": "app.three.com", 
                "name": "Gloria",
                "links": [],
            }
        ]
    }
]


function getNames(what, data) {
    let names = [];
    
    function extractNames(obj) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (key === what) {
            names.push(obj[key]);
          } else if (typeof obj[key] === "object") {
            extractNames(obj[key]);
          }
        }
      }
    }
    
    extractNames(data);
    return names;
}

const out1 = getNames(getting, data)
const out2 = getNames(getting, data2)
const out3 = getNames(getting, data3)
const out4 = getNames(getting, data4)
const out5 = getNames(getting, data5)
const out6 = getNames(getting, data6)


console.log(out1) 
console.log(out2) 
console.log(out3) 
console.log(out4) 
console.log(out5) 
console.log(out6) 



  






