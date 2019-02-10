
function storybutton() {
  var x = document.getElementById("story");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function remedybutton() {
  var y = document.getElementById("remedy");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}
function testimonybutton() {
  var w = document.getElementById("test");
  if (w.style.display === "block") {
    w.style.display = "none";
  } else {
    w.style.display = "block";
  }
}
 function toggle_story1(id) {
       var x1 = document.getElementById(id);
       if(x1.style.display == 'block')
          x1.style.display = 'none';
       else
          x1.style.display = 'block';
    }
 function toggle_story2(id) {
       var x2 = document.getElementById(id);
       if(x2.style.display == 'block')
          x2.style.display = 'none';
       else
          x2.style.display = 'block';
    }
 
