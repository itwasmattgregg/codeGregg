---
  title: 'Union of all types in another type. Typescript'
  date: '2022-12-09T14:48:14Z'
---

If you want the union type of all the types of the values in another type in typescript you can use the keyof operator.

```ts
type Thing = {
  foo: string;
  bar: boolean;
}

type ThingTypes = Thing[keyof Thing];
// string | boolean
```
