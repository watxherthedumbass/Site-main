let x = 0

function dark() {
  if (x == 0) {
   document.getElementById("body").style.backgroundColor = "#323232";
   document.getElementById("header").style.color = "#DDD0C8";
   document.getElementById("p").style.color="#DDD0C8";
   document.getElementById("dark").style.color="#DDD0C8";
   document.getElementById("dark").style.border = "1px solid #DDD0C8";
   document.getElementById("dark").innerHTML = "light";
  x+=1;
  }
  else if (x == 1) {
    document.getElementById("body").style.backgroundColor = "";
   document.getElementById("header").style.color = "";
   document.getElementById("p").style.color="";
   document.getElementById("dark").style.color="";
   document.getElementById("dark").style.border = "";
   document.getElementById("dark").innerHTML = "dark";
   
    x-=1;
  }
                           }
