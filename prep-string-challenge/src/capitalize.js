/* exported capitalize */
function capitalize(word) {
  const lowerCase = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lowerCase.slice(1);
}
