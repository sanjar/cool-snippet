function func(){
var f = [];

 for(var i = 0; i<10 ;i++){
               
    f[i] = function(){ return i;};
}
    return f;
    
}
func()[6]();
