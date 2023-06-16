import type {Equal, Expect} from './utils/index'



// TEST CASES

type A1 = Push<[], 1>;
type B1 = [1];
type C1 = Expect<Equal<A1, B1>>;
type A2 = Push<[1, 2], '3'>;
type B2 = [1, 2, '3'];
type C2 = Expect<Equal<A2, B2>>;
type A3 = Push<[1, 2, '3'], boolean>;
type B3 = [1, 2, '3', boolean];
type C3 = Expect<Equal<A3, B3>>;
// YOUR CODE

type Push<T extends unknown[], U> = [...T,U]