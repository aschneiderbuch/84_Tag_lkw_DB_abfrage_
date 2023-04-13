const person = {
    name: 'christian',
    alter: 45
}

const mensch = person

console.log(mensch, person)

mensch.name = 'Erwinia'
mensch.alter = 18
console.log(mensch, person)

const lebewesen = {
    name: person.name,
    alter: person.alter
}

// lebewesen.name = 'hildegard'
const leben = { ...person }

console.log(lebewesen, person);

console.log(mensch === person); // true
console.log(lebewesen === person); //false

const arr = ['apfel', 'banane', 'orange']
const arrB = arr
arrB.push('Sportwagen')
console.log(arr);