import OrderedLazyIterable = require('./OrderedLazyIterable');

declare function Set<T>(...values: T[]): Set<T>;

declare module Set {
  function empty(): Set<any>;
  function fromArray<T>(values: T[]): Set<T>;
}

interface Set<T> extends OrderedLazyIterable<T, T, Set<T>> {
  length: number;
  has(value: T): boolean;
  empty(): Set<T>;
  add(value: T): Set<T>;
  delete(value: T): Set<T>;
  equals(other: Set<T>): boolean;
  merge(seq: OrderedLazyIterable<any, T, any>): Set<T>;
  isTransient(): boolean;
  asTransient(): Set<T>;
  asPersistent(): Set<T>;
  clone(): Set<T>;
}

export = Set;
