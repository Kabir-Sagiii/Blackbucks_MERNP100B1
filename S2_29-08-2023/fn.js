function fn(kabir) {
  kabir();

  kabir();
}

fn(function f1() {
  console.log("f1 is called");
});
