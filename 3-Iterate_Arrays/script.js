const friend1 = {
  name: 'Laurence'
}
const friend2 = {
  name: 'John'
}
const friend3 = {
  name: 'Jane'
}
const friends = [friend1, friend2];

//adding jane at friends array
friends.push(friend3);
console.log(friends)

//dinamically show the names on iterating the array
for(let x = 0; x < friends.length; x++){
  console.log(friends[x].name);
}

//forEach
friends.forEach(function(item, index, array) {
  console.log(item.name);
})

for(ind in friends) {
  console.log(ind);
  console.log(friends[ind].name)
}

const friendList = ['Laurence', 'John', 'Steve', 'Linda', 'Jane'];

const newArray = []

friendList.forEach((item, index) => {
  // newArray.push({index, item})
  let temp = {
    name: item
  }
  console.log(temp)
  newArray.push(temp)
  console.log(newArray)
})

console.log(newArray)
