function addElementToBeginningOfArray(myArray, element){
    myArray.splice(0,0,element)
    return myArray

}

function destructivelyAddElementToBeginningOfArray(myArray, element){
  return myArray.unshift(element)
}

function addElementToEndOfArray(myArray, element){
  return myArray.push(element)
}
function destructivelyAddElementToEndOfArray(myArray, element){
  return myArray.push(element)
}
/*~~~~~~~~~~~~~~~~~~~~~~*/
function accessElementInArray(array,index){
  return array[index]
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function destructivelyRemoveElementFromBeginningOfArray(array, shift){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function removeElementFromEndOfArray(array){
  return array.slice(0,2)
}
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

