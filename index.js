const assert = require("chai").assert;

const names = [
    "David Erik Svensson",
    "ELIN AMANDA gabriella SELLIN",
    "Pippilotta Viktualia Rullgardina Krusmynta Efraimsdotter LÅNGSTRUMP",
    "Kalle Anka",
    "Ghandi"
];

const expected = [
    { first: "David", middle: ["Erik"], last: "Svensson" },
    { first: "ELIN", middle: ["AMANDA", "gabriella"], last: "Sellin" },
    { first: "Pippilotta", middle: ["Viktualia", "Rullgardina", "Krusmynta", "Efraimsdotter"], last: "LÅNGSTRUMP" },
    { first: "Kalle", middle: [], last: "Anka" },
    { first: "Ghandi", middle: [], last: null },
];

const validate = (expected) => {
    try {
        assert.deepEqual(expected, expected);
        console.log("yay");
    } catch (e) {
        console.error("Failed", e);
    }
};

// implement code generating result
const result = [];

// At the end call validate
validate(expected);
