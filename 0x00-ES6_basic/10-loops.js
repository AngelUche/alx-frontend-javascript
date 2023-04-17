export default function appendToEachArrayValue(array, appendString) {
  for (const indexofonearray of array) {
    // cget the index of the given array, and append its value to the the string and finally
    // assign its value to the new array value
    array[array.indexOf(indexofonearray)] = appendString + indexofonearray;
  }

  return array;
}