/**
 * Docs for `lib` module
 * @packageDocumentation
 */

/**
 * Docs for `libFunc` function.
 */
export function libFunc(): LibInt {
    console.log("Bar");
    return { bar: true };
}

export interface LibInt {
    bar: true;
}
