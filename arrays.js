function addElementToBeginningOfArray(myArray, element){
  
  return myArray.unshift("element")
}

function destructivelyAddElementToBeginningOfArray(myArray, element){
  myArray = myArray.unshift("element")
  return myArray
}

function addElementToEndOfArray(myArray, element){
  return myArray.push("element")
}
function destructivelyAddElementToEndOfArray(myArray, element){
  myArray4 = myArray.push("element")
  return myArray
}
/*~~~~~~~~~~~~~~~~~~~~~~*/
function accessElementInArray(array,index){
  return array[index]
}
function destructivelyRemoveElementFromEndOfArray(array){
  array = array.pop()
  return array
}
function destructivelyRemoveElementFromBeginningOfArray(array, shift){
  return array.shift(0)
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function removeElementFromEndOfArray(array){
  return array.slice(0,3)
}


