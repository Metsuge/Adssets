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
const ids = [621, 123, 251, 631];

let listOfObjects = [];
let listOfIds = [];
const getUser = (id, arrayToStore) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      database[id] ? res(database[id]) : rej(new Error("not_found"));
    }, 300);
    return arrayToStore.push(database[id]);
  });



for (index in ids) {
    getUser(ids[index], listOfObjects);
}
console.log('listOfObjects: ');
console.log(listOfObjects);


const result = [];


console.log(result);

// const doTheThing = (ArrayOfObjects, ArrayToStoreObject) => {
    
//   for (index in ArrayOfObjects) {
//     friendsArray = ArrayOfObjects[index].friends;
    
//     let object = {
//       id: ArrayOfObjects[index].id,
//       name: ArrayOfObjects[index].name,
//       friends: friendsArray,
//     };
//     return ArrayToStoreObject.push(object);
//   }

  
// };



//   console.log('result');
//   console.log(result);


// const getFriends = (friendsArray)=>{
   
// }

// getFriends(friendsArray)


// console.log(result);

// const validate = (result) => {
//     try {
//         assert.deepEqual(result, expected);
//     } catch (e) {
//         console.error("Failed", e);
//     }
// };

// List of user ids to test

// implement a method to create this result

// At the end call validate
// validate(result);
