// index signatures

type fooType = {
	foo: number,
	bar: number,
	name: string,
};

const foo: fooType = {
	foo: 1,
	bar: 2,
	name: 'name',
};
  
type numericProperties = 'foo' | 'bar';
  
const fooPropName = 'foo';
const temp1 = foo[fooPropName];

const getProp = (o: fooType, propName: numericProperties): number => {
	const value = o[propName]; // TyüeScript recognizes that the possible properties must be of type "number" or lese the type would be "never"!
	return value;
};

const temp2 = getProp(foo, fooPropName);
