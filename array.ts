// Type Array
const superHeros1: string[] = [];
const superHeros2: Array<number> = [];

superHeros1.push("spiderman");
console.log('superHeros1: ', superHeros1);
superHeros2.push(12);
console.log('superHeros2: ', superHeros2);
 // Array of objects

type User2 = {
  name: string,
  age: number
}

const allUsers: User2[] = []
allUsers.push({ name: "tam", age: 23 })
console.log('allUsers: ', allUsers);


 
