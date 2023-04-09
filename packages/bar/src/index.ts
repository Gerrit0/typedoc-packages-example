/**
 * Docs for `bar` module
 * @packageDocumentation
 */

/**
 * Docs for `bar` function.
 */
export function bar(): BarInt {
  console.log("Bar");
  return { bar: true };
}

/**
 * BarInt interface
 */
export interface BarInt {
  bar: true;
}
