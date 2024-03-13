/**
 * Docs for `foo` module
 * @packageDocumentation
 */

import { LibInt, libFunc } from "@typedoc/lib";

interface WrappingLibInt {
    libInt: LibInt;
}

/**
 * Docs for `wrappingLibFunc` function, which returns a {@link @typedoc/lib!LibInt}
 */
export function wrappingLibFunc(): WrappingLibInt {
    return { libInt: libFunc() };
}
