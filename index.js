// add solution here
function theBeatlesPlay(musicians, instruments){
  var array1 = []
  for (var i=0; i<musicians.length; i++){
    var string = musicians[i] + " plays " + instruments[i]
    console.log(string)
    array1[i] = string 
  }
}
