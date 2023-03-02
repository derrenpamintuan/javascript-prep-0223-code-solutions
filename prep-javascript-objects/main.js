const person = {
  firstName: 'Derren',
  lastName: 'Pamintuan',
  hobby: 'Gaming'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName + '.');

person.job = 'Server';
console.log("The person's current job is:", person.job + '.');

person['previousJob'] = 'Barista';
console.log("The person's previous job is:", person['previousJob'] + '.');

console.log("The complete person's object:", person);
