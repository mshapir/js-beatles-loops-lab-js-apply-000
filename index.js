// add solution here
function theBeatlesPlay(musicians, instruments){
  var array1 = []
  for (var i=0; i<musicians.length; i++){
    var string = musicians[i] + " plays " + instruments[i]
    array1[i] = string 
  }
  return array1 
}
function johnLennonFacts(facts){
  var loop = 0 
  while(loop < facts.length){
   facts[loop] = facts[loop] + "!!!"
    loop++
  }
  return facts 
}

function 