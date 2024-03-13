# README only package

This package only contains a readme file, without any entry points. This is intended to support
packages which don't export any JS, only shared assets. See [#2264](https://github.com/TypeStrong/typedoc/issues/2264).

This package also does not contain a `docs` script in its `package.json`, so `npm run docs-all` will not run TypeDoc
within it, and therefore not generate a docs folder here.
