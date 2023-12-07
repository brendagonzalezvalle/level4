//Sort by Multiple Criteria//

// Write a function called sortByMultipleCriteria that takes an array of objects representing people, each with a name (string) and age (number) property. The function should return a new array with the people sorted first by age in ascending order, and then by name in alphabetical order.

const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
];

function sortByMultipleCriteria(people) { //function is taking in an array of objects with peoples names and ages
   const sortPerson = people.sort(function(a, b){ // using the sort method we are sorting through people values by comparing 2 values at a time
        return a.age - b.age 
        // we are asking to compare the first number in our array under age against the next number in the array and if subtracting a - b = a postive number  then b is sorted before a
    })
    // console.log(sortPerson)
    return sortPerson

}


const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]