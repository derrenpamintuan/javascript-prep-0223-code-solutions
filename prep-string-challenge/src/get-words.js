/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  }
  const array = string.split(' ');
  return array;
}
