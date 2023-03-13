/* exported toObject */
function toObject(keyValuePair) {
  const obj = {};
  const key = keyValuePair[0];
  obj[key] = keyValuePair[1];
  return obj;
}
