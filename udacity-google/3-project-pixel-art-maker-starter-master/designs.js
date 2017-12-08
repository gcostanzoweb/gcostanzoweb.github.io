function script(){
const MAX_WIDTH = 80;
const MAX_HEIGHT = 80;

$("#input_width").attr("max",MAX_WIDTH);
$("#input_height").attr("max",MAX_HEIGHT);

var bodyBackground = "white";
function changeBG(color){
$("body").css("background-color", color);
}
changeBG(bodyBackground);
$("#bgColorPicker").on("change", function(){
  bodyBackground = $(this).val();
  changeBG(bodyBackground);
});

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

$("#clearAll").on("click", function(){
  $("#pixel_canvas").find("td").css("background-color", "transparent");
});

$("#colorAll").on("click", function(){
  $("#pixel_canvas").find("td").css("background-color", colorPicker.val());
});
}
$(script());
