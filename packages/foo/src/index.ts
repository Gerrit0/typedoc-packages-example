/**
 * Docs for `foo` module
 * @packageDocumentation
 */

import { bar } from "@typedoc/bar";

/**
 * Docs for `foo` function, which returns a {@link @typedoc/bar!BarInt}
 */
export function foo() {
  return bar();
}
