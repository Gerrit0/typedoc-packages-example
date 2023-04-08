/**
 * Docs for `foo` module
 * @packageDocumentation
 */

import { bar } from "@typedoc/bar";
import {
  cloneDeep as deepClone,
  isEqual as deepEqual,
  findLast,
  isEmpty,
  pickBy,
  uniqBy,
  uniq,
  debounce,
  throttle,
  mergeWith,
  toNumber,
  type DebouncedFunc,
  isObject,
} from "lodash-es";

/**
 * Docs for `foo` function, which returns a {@link @typedoc/bar!BarInt}
 */
export function foo() {
  return bar();
}

// NOTE: We re-export lodash utilities like this so we centralize utility usage in our app
// in case we want to swap out the implementation
export {
  deepClone,
  deepEqual,
  findLast,
  isEmpty,
  pickBy,
  uniqBy,
  uniq,
  debounce,
  throttle,
  type DebouncedFunc,
};
