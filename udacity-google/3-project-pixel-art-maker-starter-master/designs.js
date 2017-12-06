const MAX_WIDTH = 100;
const MAX_HEIGHT = 200;
var down = false;
$(document)
  .mousedown(function(){
    down = true;
    console.log("Mouse pressed.");
  })
  .mouseup(function(){
    down = false;
    console.log("Mouse released.");
  });

var colorPicker = $("#colorPicker");
var sizePicker = $("#sizePicker");

sizePicker.on("submit",function(event){
  event.preventDefault();
  var h = $("#input_height").val();
  var w = $("#input_width").val();
  makeGrid(h,w);
});

function makeGrid(h,w) {
console.log("Table: "+h+"px x "+w+"px.");
$("#pixel_canvas").children().remove();
var trClass, tdClass, tr, td;
for(var i=1; i<=h; i++){
  trClass = "tr"+i;
  tr = $('<tr></tr>').addClass(trClass);
  for(var j=1; j<=w; j++){
    tdClass = "td"+i+"-"+j;
    td = $('<td></td>').addClass(tdClass);
    tr.append(td);
  }
  $("table").append(tr);
}

}

function fill(event){
  $(event.target).css("background-color", colorPicker.val());
}

$("table").on("mouseenter", "td", function(event){
  if(down){
    fill(event);
  }
})
.on("mousedown","td",function(event){
  fill(event);
});
