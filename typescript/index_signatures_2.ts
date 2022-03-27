// index signatures

type fooType = {
  n1: number,
  n2: number,
  s: string,
}

const fooKeys: {
  n1: 'n1',
  n2: 'n2',
  s: 's',
} = {
  n1: 'n1',
  n2: 'n2',
  s: 's',
};

const foo: fooType = {
  n1: 1,
  n2: 1,
  s: '1',
};

foo['n1'] = 2;
foo['n2'] = 2;
foo['s'] = '2';
foo[fooKeys.n1] = 3;
foo[fooKeys.s] = '3';

const n1 = 'n1';
foo[n1] = 4;

// Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'fooType'.
// No index signature with a parameter of type 'string' was found on type 'fooType'.(7053)
//const setToZero_a = (obj: fooType, key: string): void => {obj[key] = 0};

// Type 'number' is not assignable to type 'never'.(2322)
//const setToZero_b = (obj: fooType, key: keyof fooType): void => {obj[key] = 0};

const setToZero_c = (obj: fooType, key: 'n1' | 'n2'): void => {obj[key] = 0};
setToZero_c(foo, 'n1');
setToZero_c(foo, 'n2');

let key: keyof fooType;
for (key in foo) {
  const value = foo[key];
  console.log(`key of "${key}" is "${typeof value}"`);
}
