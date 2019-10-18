export as namespace DeepDiffObject;
/**
@param object - Object to take differences from
@param base - Object that will be compared against
@returns Differences of object from base
@example
```
const obj = { name: 'John', surname: 'Doe', age: 29 };
const base = { name: 'Jane', surname: 'Doe', age: 27 }
difference(obj, base);
//=> { name: 'John', age: 29 }
```
*/
export function difference(object: object, base: object): object;
