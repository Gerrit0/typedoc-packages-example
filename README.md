# TypeDoc Packages Example

This monorepo provides an example of how TypeDoc's packages mode can be used to generate documentation
for multiple projects and combine it into a single site which contains all documented projects.

You can see the result of building this at <https://gerritbirkeland.com/typedoc-packages-example/index.html>

## Building

```bash
git clone git@github.com:Gerrit0/typedoc-packages-example.git
npm install

# We need to build before building the docs so that `foo` can reference types from `bar`
# TypeDoc can't use TypeScript's build mode to do this for us because build mode may skip
# a project that needs documenting, or include packages that shouldn't be included in the docs
npm run build

# Now, we can run TypeDoc with packages mode to generate a single docs folder
npm run docs
```

## Building - Advanced

If your build system requires running with multiple versions of TypeDoc, you can instead manually
generate JSON files for each package, and then run TypeDoc on the generated JSON files.

```bash
# Cross-package links will be invalid during initial conversion, they will be validated when merging
for package in packages/*; do
    npx typedoc --json docs-json/$(basename $package).json --options $package/typedoc.json --validation.invalidLink false
done

# Merge previously generated documentation together into a site
npx typedoc --entryPointStrategy merge "docs-json/*.json"
```
