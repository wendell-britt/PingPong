var numberArray = []

function pingPong(number) {
  for (i = 1; i < (number); i++) {
     numberArray.push(i);
  };
  numberArray.push(number);
};

function printPingPong(finalarray){
  finalarray.forEach(function(entry){
    $("ul#pingPong-output").append("<li>"+entry+"</li>")
  });
};

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    var someInput = $("input#number").val()
    event.preventDefault();
      pingPong(someInput);
      numberArray.map(function(num) {
      if ( num % 15 === 0) {
         numberArray.splice((num-1),1,"pingpong");
      }
       else if (num % 3 === 0) {
        numberArray.splice((num-1),1,"ping");
      }
      else if (num % 5 === 0 ) {
        numberArray.splice((num-1),1,"pong");
      }


    });
    alert(numberArray);
    printPingPong(numberArray);
  });

  });
