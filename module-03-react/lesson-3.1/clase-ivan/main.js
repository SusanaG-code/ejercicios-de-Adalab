"use strict";

/*const d1 = {
  "firstname":"Dayana",
  "lastname":"Romero",
  "address":"Avenda de...",
  "phone":"555030303"
}
const d2 = {
  "firstname":"Miguel",
  "lastname":"del Mazo",
  "address":"Calle de..",
  "phone":"55550404040"
} */

class Person {
  constructor(fn, ln, ad, ph = "[No indicado]") {
    this.firstname = fn;
    this.lastname = ln;
    this.address = ad;
    this.phone = ph;
    // let variableLocal = "";
  }

  getGender() {
    if (this.firstname === "Dayana") {
      return "Female";
    } else this.fistname === "Miguel";
    {
      return "Male";
    }
  }

  getFullName() {
    return this.firstname + " " + this.lastname;
  }
}

function init() {
  const objDayana = new Person("Dayana", "Romero");

  objDayana.phone = "555282828";

  console.log(objDayana.getGender()); // --> "Female"

  const objMiguel = new Person("Miguel", "Adalab");

  objMiguel.firstname = "Miguel";
  console.log(objMiguel.getFullName());
  console.log(objMiguel.getGender()); // --> "Male"
}

init();
