function addElementToBeginningOfArray(marray, element) {
   var newarray = [element,...marray]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element)
   return array
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

