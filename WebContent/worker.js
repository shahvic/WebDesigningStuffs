self.addEventListener('message', function(e) {
  let count = 0;
  var findSolutions = function(e1) {
    console.log('called')
 console.log('number received-->'+e1)     
 count=e1+25;
  };
  console.log('gonna call')
  findSolutions(e.data);
  self.postMessage(count);
}, false);
