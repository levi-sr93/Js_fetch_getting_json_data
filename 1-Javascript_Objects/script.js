const friend = {
  name: 'Tony Stark',
  age: 50,
  gender: 'male',
  location: {
    city: 'Malibu',
    country: 'United States',
    address: 'Malibu Point 10880'
  }
};

console.log(friend);
console.log(friend.name); //dot notation
console.log(friend['name']); //brackets notation

console.log(friend.location.country);
let friendLocation = friend.location.country;

//showing in the HTML;
document.querySelector('.output').textContent = friendLocation;
