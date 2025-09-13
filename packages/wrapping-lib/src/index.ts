/**
 * Docs for `foo` module links to [lib package with directory](../../lib)
 * @packageDocumentation
 */

import { libFunc } from "@typedoc/lib";

/**
 * Docs for `wrappingLibFunc` function, which returns a {@link @typedoc/lib!LibInt}
 */
export function wrappingLibFunc() {
    return libFunc();
}
