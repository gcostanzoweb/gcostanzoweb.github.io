const MAX_WIDTH = 80;
const MAX_HEIGHT = 80;

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
  if(h>0&&h<=MAX_HEIGHT&&w>0&&w<=MAX_WIDTH) $("#status").text(" ");
  else{
    var status = "[ ";

    if(w<=0){
      status += "The minimum width is 1. ";
      w = 1;
      $("#input_width").val(1);
    }else if(w>MAX_WIDTH){
      status += "The maximum width is "+MAX_WIDTH+". ";
      w = MAX_WIDTH;
      $("#input_width").val(MAX_WIDTH);
    }

    if(h<=0){
      status += "The minimum height is 1. ";
      h = 1;
      $("#input_height").val(1);
    }else if(h>MAX_HEIGHT){
      status += "The maximum height is "+MAX_HEIGHT+". ";
      h = MAX_HEIGHT;
      $("#input_height").val(MAX_HEIGHT);
    }

    status += "]";

    $("#status").text(status);
  }
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
