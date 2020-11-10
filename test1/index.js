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
  { first: "ELIN", middle: ["AMANDA", "gabriella"], last: "Sellin" }, // "SELLIN" corrected to "Sellin"
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
  } catch (e) {
    console.error("Failed", e);
  }
};

// implement code generating result

let result = [];

const completeObject = (names) => {
  let nameSplitArray = [];

  names.forEach(name => {
    nameSplitArray.push(name.split(" "));
  });

  for (let i = 0; i < nameSplitArray.length; i++) {
    let newObject = {
      first: nameSplitArray[i][0],

      middle: function () {
        if (nameSplitArray[i].slice([1], nameSplitArray[i].length - 1).length === 0) {
          newObject.middle = [];
        } else {
          newObject.middle = nameSplitArray[i].slice([1], nameSplitArray[i].length - 1);
        }
      },

      last: function () {
        if (nameSplitArray[i].length > 1) {
          newObject.last = nameSplitArray[i][nameSplitArray[i].length - 1];
        } else if (nameSplitArray[i].length <= 1) {
          newObject.last = null;
        }
      },
    };

    newObject.middle();
    newObject.last();
    result.push(newObject);
  }
  return result;
};

completeObject(names);

// At the end call validate
validate(result);
