/**
 * Docs for `foo` module
 * @packageDocumentation
 */

import { libFunc } from "@typedoc/lib";

/**
 * Docs for `wrappingLibFunc` function, which returns a {@link @typedoc/lib!LibInt}
 *
 * Link: {@link libFunc}
 */
export function wrappingLibFunc() {
    return libFunc();
}
