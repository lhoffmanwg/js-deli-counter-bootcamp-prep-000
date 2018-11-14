
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name); 
  return ("Welcome, "+ name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine) {

  var name;
  if(katzDeliLine.length === 0) {
   return ("There is nobody waiting to be served!")
    
  }else{
    name = (katzDeliLine[0]);
    katzDeliLine.shift()
    return("Currently serving " + name + ".");
  }

}


function currentLine(katzDeliLine) {
  var i;
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var lineList;
    for (i = 0; i < katzDeliLine.length; i++) {
      if (i === 0) {
        lineList = "The line is currently: " + (i+1) + ". " + (katzDeliLine[i]);
      } else {
        lineList = lineList + ", " + (i+1) + ". " + (katzDeliLine[i]);
      }
    }
    return lineList;
  }
}


