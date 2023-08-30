var data = [56, 78, 100, 12, 345, 87, 1, 40];

var newArray = data.filter(function (element, index) {
  return element < 50;
});

console.log(newArray);
