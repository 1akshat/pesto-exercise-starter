const deepCopyObject = objToCopy => {
  let copiedObject, value, key;

  if(typeof objToCopy !== "object" || objToCopy === null) {
    return objToCopy
  }

  copiedObject = Array.isArray(objToCopy) ? []:{}

  for(key in objToCopy) {
    value = objToCopy[key]
     // Recursively (deep) copy for nested objects, including arrays
     copiedObject[key] = typeof value === "object" || value !== null ? deepCopyObject(value) : value
  }
  
  return copiedObject
};

export { deepCopyObject };
