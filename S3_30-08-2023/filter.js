var arr = [45, 76, 32, 12, 98, 89, 67, 33, 69];

var newArray = arr.filter(function (element, index) {
  return element > 50 && element < 70;
});

console.log(newArray);
