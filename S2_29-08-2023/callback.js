function createUi(fun) {
  fun("Riya", "Hyd");

  fun("Sneha", "Vija");
}

createUi(function (name, city) {
  console.log(name, city);
});
