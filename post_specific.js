
/*


given arr = ["go", "yo", "so", "cool"], target = 3, s = "lol".
You want to insert the s by the target position on arr.
So the output is.  ["go", "yo","so", "lol", "cool"].


*/


function insertString(arr, target, s) {
    arr.splice(target, 0, s);
    return arr;
  }
  
  let arr = ["go", "yo", "so", "cool"];
  let target = 2;
  let s = "lol";
  
  console.log(insertString(arr, target, s));
  

/*


given data = [ {id: 1, name: "Nalt"}, {id: 2, name: "Soul"}, {id: 3, name: "Marie"}, {id: 4, name: "Jordan"} ],
      target = 3,
      s = {id: 9, name: "idk"},
      define = "Array" (define only takes either "Array" or "Object").
      position_define = None (if define is "Array" set to None).
      name_define_key = None (if name_define_key is "Array" set to None).
      name_define_value = None (if name_define_value is "Array" set to None).
      

      
You want to insert the s by the target position on data and determine which define area should place the s inside the data.



So the output is [ {id: 1, name: "Nalt"}, {id: 2, name: "Soul"}, {id: 3, name: "Marie"}, {id: 9, name: "idk"}, {id: 4, name: "Jordan"} ].

If define = "Object". Then position_define = 2, name_define_key = "nameTest", name_define_value = None 

Output is [ {id: 1, name: "Nalt"}, {id: 2, name: "Soul"}, {id: 3, name: "Marie", nameTest: {id: 9, name: "idk"} }, {id: 4, name: "Jordan"} ].

Another example, If define = "Object". Then position_define = 1, name_define_key = None, name_define_value = "nameTest"

Output is [ {id: 1, name: "Nalt"}, {id: 2, name: "Soul"}, {id: 3, {id: 9, name: "idk"}: "nameTest", name: "Marie" }, {id: 4, name: "Jordan"} ].



*/


function insertData(data, target, s, define, position_define, name_define_key, name_define_value) {
    if (define === "Array") {
      data.splice(target, 0, s);
      return data;
    } else if (define === "Object") {
      if (position_define !== null && name_define_key !== null && name_define_value === null) {
        data[position_define][name_define_key] = s;
        return data;
      } else if (position_define !== null && name_define_key === null && name_define_value !== null) {
        data[position_define] = { [s]: name_define_value };
        return data;
      }
    }
  }
  
  let data = [
    {id: 1, name: "Nalt"},
    {id: 2, name: "Soul"},
    {id: 3, name: "Marie"},
    {id: 4, name: "Jordan"}
  ];
  
  let target = 3;
  let s = {id: 9, name: "idk"};
  
  let define = "Array";
  let position_define = null;
  let name_define_key = null;
  let name_define_value = null;
  
  console.log(insertData(data, target, s, define, position_define, name_define_key, name_define_value));
  
  define = "Object";
  position_define = 2;
  name_define_key = "nameTest";
  name_define_value = null;
  
  console.log(insertData(data, target, s, define, position_define, name_define_key, name_define_value));
  
  define = "Object";
  position_define = 1;
  name_define_key = null;
  name_define_value = "nameTest";
  
  console.log(insertData(data, target, s, define, position_define, name_define_key, name_define_value));
  




