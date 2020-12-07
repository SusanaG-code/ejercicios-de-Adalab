const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const findUser = users.find((userPin) => userPin.pin === 5232).name;

console.log(findUser);

const findIndex = users.findIndex((userIndex) => userIndex.pin === 5232);
console.log(findIndex);
const DeleteUser = users.splice(3, 1);

console.log(DeleteUser);
