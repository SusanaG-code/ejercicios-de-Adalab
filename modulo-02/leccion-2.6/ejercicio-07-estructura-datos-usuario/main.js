'use strict';

const userData = {};

const job = 'developer';

userData.firstName = 'Dayana';
userData.lastName = 'Romero';
userData.age = 40;
userData.job = job;

console.log (userData.firstName);
console.log (userData.lastName);
console.log (userData.age);
console.log (userData.job);


userData.firstName = 'Pedro';
userData.age += 1;

console.log (userData.firstName);
console.log (userData.lastName);
console.log (userData.age);
console.log (userData.job);