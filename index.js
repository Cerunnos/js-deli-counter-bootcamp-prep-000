function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line){
  if (line.length===0){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${line.shift()}.`
  }
}
function currentLine(line){
  if (line.length===0){
    return "The line is currently empty."
  }
  else{
    var placeInLine=[]
    for (var i=0,1=line.length;i<1;i++)
    return `The line is currently: ${line.length}. ${line},`
  }
}
