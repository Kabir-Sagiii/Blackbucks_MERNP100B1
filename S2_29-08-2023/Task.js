function f1(para1) {}

function f2(para2) {}

function f3(para3) {}

f1(function f2() {});

f2(function () {});

f3(() => {});
