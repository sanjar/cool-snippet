for (var line=1; line<45; line++) {
  for(var i=1;i<23;i++) {
  var x = (Math.floor((Math.random()*2)%2)) ;
  console.log(x);
    var s = x ? "╱" : "╲";
    document.write(s);
  }
  document.writeln("<br>");
}
