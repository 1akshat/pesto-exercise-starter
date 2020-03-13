
function updateObject(positionToUpdate, replaceWithString, targetArray) {
  
  if(Math.abs(positionToUpdate) > targetArray.length) throw new Error(`Element not present at position ${positionToUpdate}`);

  if(positionToUpdate < 0) {
    targetArray = targetArray.reverse();
    targetArray[1 - Math.abs(positionToUpdate)] = replaceWithString;
    targetArray.reverse();
  } else {
    targetArray[positionToUpdate] = replaceWithString;
  }
  return targetArray
}

export {
  updateObject,
};
