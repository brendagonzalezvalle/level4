// # Mid Level Assessment


// ## Filter Anagrams

// Write a function called **`filterAnagrams`** that filters an array of words to find and return an array containing only the words that are anagrams of a given target word.

// **Understand the Problem:**
// Before you start coding, make sure you understand what the challenge is asking. You need to filter a given array of words to find the anagrams of a target word. Anagrams are words that have the same letters but in a different order.
const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];

const target = 'enlist';

function filterAnagrams(arr, target) { //function is passing through and array of words and using arr as parameter 1, & 1 word as param2
    function sortString(str){ // the sort string function is going to split strings into an array of strings, then the sort method will return elements of an array in place & returns array, lastly joined to allow values to be compared down below
      const split = str.split("")
      console.log(split)
      const sort = split.sort()
      console.log(sort)
      const join = sort.join("")
      console.log(join)
     
      return join
    }

    
    const anagrams1 = arr.filter(word=> sortString(word) === sortString(target))
    return anagrams1
 
}


const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']