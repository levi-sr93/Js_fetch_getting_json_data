const friends = ["John", "Laurence", "Steve", "Janet"];

console.log(friends);
console.log(friends[2]);

const firstFriend = {
  name: "Tony",
};

const secondFriend = {
  name: "Steve",
};

const friendsList = [firstFriend, secondFriend];
console.log(friendsList);

friendsList[10] = {
  name: "Linda",
};

console.log(friendsList);

document.querySelector(".output").textContent = friendsList[10]["name"]; //works the same as the dot notation
