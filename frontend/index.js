$(document).ready(function()
{
  var numbers = [];
  var numlen = 90;
  for(let i = 1 ; i <= 90 ; i++)
  numbers.push(i) ;
    $(".board").hide();
    $("#start").click(function()
    {
        $(".board").show();
        $("#start").hide(); 
    });
    $("#gennum").click(function()
    {
      if(numlen == 0)
      {
        alert("Game Over !! Clear the board for New Game") ;
      }
      else
      {
        var ind = Math.floor(Math.random() * numlen);
        var n = numbers[ind];
        numbers[ind] = numbers[numlen - 1];
        numlen-- ;
        document.getElementById("num").innerHTML = n ;
        document.getElementById("n" + n).style.backgroundColor = "green";
      }
    });
    $("#clr").click(function()
    {
      for(let i = 1 ; i <= 90 ; i++)
      numbers[i - 1] = i ;
      numlen = 90 ;
      document.getElementById("num").innerHTML = 0 ;
      for(let i = 1 ; i <= 90 ; i++)
      document.getElementById("n" + i).style.backgroundColor = "white";
    });
});

function clearboard(){
  document.getElementById("numdis").innerHTML="";
  for(let i=0;i<90;i++){
    numbers[i]=i+1;
    var x = "n" + numbers[i];
    document.getElementById(x).style.backgroundColor="white";
  }
  c=0;
}