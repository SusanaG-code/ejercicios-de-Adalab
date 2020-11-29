'use strict';

const pears = {};
pears.max = 10;
pears.min = 2;
pears.current = 5;
pears.initial = 1;

// pears.add = function (){
//     pears.current = pears.current + 1;
// }

pears.add = addPears => (pears.current += 1);

pears.rest = function (){
    return pears.current -= 1;
}

pears.reset = function (){
    return pears.current = pears.initial;
}
