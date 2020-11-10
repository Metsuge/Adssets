const assert = require("chai").assert;

const expected = [
  {
    id: 621,
    name: "XxDragonSlayerxX",
    friends: [
      { id: 123, name: "FriendNo1", friends: [621, 631] },
      { id: 251, name: "SecondBestFriend", friends: [621] },
      { id: 631, name: "ThirdWh33l", friends: [621, 123, 251] },
    ],
  },
  {
    id: 123,
    name: "FriendNo1",
    friends: [
      { id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631] },
      { id: 631, name: "ThirdWh33l", friends: [621, 123, 251] },
    ],
  },
  {
    id: 251,
    name: "SecondBestFriend",
    friends: [{ id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631] }],
  },
  {
    id: 631,
    name: "ThirdWh33l",
    friends: [
      { id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631] },
      { id: 123, name: "FriendNo1", friends: [621, 631] },
      { id: 251, name: "SecondBestFriend", friends: [621] },
    ],
  },
];

const database = {
  621: { id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631] },
  123: { id: 123, name: "FriendNo1", friends: [621, 631] },
  251: { id: 251, name: "SecondBestFriend", friends: [621] },
  631: { id: 631, name: "ThirdWh33l", friends: [621, 123, 251] },
};

const result = [];
const ids = [621, 123, 251, 631];
const arrayOfObjects = [];
let array = {};

const getUser = (id, array) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      database[id] ? res(database[id]) : rej(new Error("not_found"));
    }, 300);
    array.friends = database[id];
    arrayOfObjects.push(database[id]);
  });

for (index in ids) {
  getUser(ids[index], array);
}

const getFullObject = (arrayOfObjects) => {
  arrayOfObjects.forEach((each) => {
    let object = {
      id: each.id,
      name: each.name,

      friends: function () {
        let friendArray = each.friends;
        let rightFriends = [];
        for (let i = 0; i < friendArray.length; i++) {
          let fren = arrayOfObjects.find((x) => x.id === friendArray[i]);
          rightFriends.push(fren);
        }
        return (object.friends = rightFriends);
      },
    };
    object.friends();
    result.push(object);
  });
};

getFullObject(arrayOfObjects);

const validate = (result) => {
  try {
    assert.deepEqual(result, expected);
  } catch (e) {
    console.error("Failed", e);
  }
};

validate(result);
