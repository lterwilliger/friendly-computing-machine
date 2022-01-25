// $ = jQuery's way of naming its stuff.
// $( ... ) = what's inside () is the "object" we are messin with
// .ready() = method of $jQ
// .ready( ... ) = argument/parameter passed to that method
// function(){} in the method is an IIFE = Immediately Invoked F/n Expresson
$(document).ready(function () {
  // alert("page is ready");
  console.log("doc is ready");
    let $start_counter = $( "#event-start" ),
          // $drag_counter = $( "#event-drag" ),
          // $stop_counter = $( "#event-stop" ),
          counts = [0, 0, 0],
          updateCounterStatus = 0
          ;
const output = ["Little Wow","Wow", "Very Wow", "Much Wow", "Very Much Wow", "Great Wow", "Big Wow",  "Huge Wow"];
let dmax = output.length;
function pickWowInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
Math.random();
$( function() {
    $( "#dogeDiv" ).draggable({ containment: "#dogeHouse", scroll: false });
  } );
 $( "#dogeDiv" ).draggable(
{
//    containment: "#dogeHouse", scroll: false;
    start: function () {
        counts[0]++;
        //updateCounterStatus($start_counter, counts[0]);
        console.log(counts[0]);
        dogeIndex = pickWowInt(0,dmax);
        min = (dogeIndex) * 10
        max = (dogeIndex + 1) * 10
        $("#dogeOutput").text(pickWowInt(min,max)+" -- " +output[dogeIndex]);
    }

  });
});
