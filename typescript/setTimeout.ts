function delayedCall(fn: () => void) {
  setTimeout(fn, 1000);
}

delayedCall(function () {
  console.log("hi there");
});  //i am doing 
