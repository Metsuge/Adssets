const assert = require("chai").assert;

const names = [
  "David Erik Svensson",
  "ELIN AMANDA gabriella Sellin",
  "Pippilotta Viktualia Rullgardina Krusmynta Efraimsdotter LÅNGSTRUMP",
  "Kalle Anka",
  "Ghandi",
];

const expected = [
  { first: "David", middle: ["Erik"], last: "Svensson" },
  { first: "ELIN", middle: ["AMANDA", "gabriella"], last: "SELLIN" },
  {
    first: "Pippilotta",
    middle: ["Viktualia", "Rullgardina", "Krusmynta", "Efraimsdotter"],
    last: "LÅNGSTRUMP",
  },
  { first: "Kalle", middle: [], last: "Anka" },
  { first: "Ghandi", middle: [], last: null },
];

const validate = (result) => {
  try {
    assert.deepEqual(result, expected);
    console.log("yay");
  } catch (e) {
    console.error("Failed", e);
  }
};

// implement code generating result

let result = [];

const completeObject = (names) => {
  let nameSplit = [];

  names.forEach((name) => {
    nameSplit.push(name.split(" "));
  });

  for (let i = 0; i < nameSplit.length; i++) {
    let EachNewObject = {
      first: nameSplit[i][0],

      middle: function () {
        if (nameSplit[i].slice([1], nameSplit[i].length - 1).length === 0) {
          EachNewObject.middle = [];
        } else {
          EachNewObject.middle = nameSplit[i].slice(
            [1],
            nameSplit[i].length - 1
          );
        }
      },

      last: function () {
        if (nameSplit[i].length > 1) {
          EachNewObject.last = nameSplit[i][nameSplit[i].length - 1];
        } else if (nameSplit[i].length <= 1) {
          EachNewObject.last = null;
        }
      },
    };

    EachNewObject.middle();
    EachNewObject.last();
    result.push(EachNewObject);
  }
  return result;
};

completeObject(names);
// console.log(result);

// At the end call validate
validate(result);
