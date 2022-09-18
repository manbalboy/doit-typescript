export function makePerson(name, age) {
  return {name , age}
}

export function testMakePerson() {
  console.log(makePerson('Hun', 34),makePerson('Hoon', 35) )
}