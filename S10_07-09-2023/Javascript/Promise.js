var promiseObject = new Promise(function (resolve, reject) {
  // resolve() and reject()

  //   resolve("Kabir");

  // resolve(1000000);

  // resolve(true);

  resolve({
    status: "ok",
    data: [{}, {}],
  });

  //   reject({
  //     status: false,
  //     data: "Error occured due to Issue st server",
  //   });

  // resolve([123,123,456,789,876])
});

promiseObject
  .then(function (successdata) {
    console.log("Success", successdata);
  })
  .catch(function (errordata) {
    console.log("Failure", errordata);
  });
