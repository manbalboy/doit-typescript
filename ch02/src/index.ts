import IPerson from './person/IPerson';
import Person, { makePerson } from './person/Person';

const testMakePerson = (): void => {
  let jane: IPerson = makePerson('Jane', 24);
  let jack: IPerson = new Person('Jack');
  console.log(jane, jack);
}

testMakePerson();