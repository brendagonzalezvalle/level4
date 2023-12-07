// # Mid Level Assessment


// ## Filter Anagrams

// Write a function called **`filterAnagrams`** that filters an array of words to find and return an array containing only the words that are anagrams of a given target word.

// **Understand the Problem:**
// Before you start coding, make sure you understand what the challenge is asking. You need to filter a given array of words to find the anagrams of a target word. Anagrams are words that have the same letters but in a different order.
const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];

const target = 'enlist';

function filterAnagrams(arr, target) { //function is passing through and array of words and using arr as parameter 1, & 1 word as param2

    
    const anagrams1 = arr.filter(function(item){ // using filter we are filtering each

      if(item.length === target.length){
        return item
      }
  
  })
  return anagrams1
  // console.log(anagrams1) 
}


const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']