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

# Or use npm workspaces to run TypeDoc individually in each package that defines
# a docs script, to generate a docs folder in each package
npm run docs-all

# Or for more control over when each package is built, we can manually build each
# package and save the output of --json
# Cross-package links will be invalid here, they will be validated when merging
npx typedoc --json docs-json/bar.json --options packages/bar/typedoc.json --validation.invalidLink false
npx typedoc --json docs-json/baz.json --options packages/baz/typedoc.json --validation.invalidLink false
npx typedoc --json docs-json/foo.json --options packages/foo/typedoc.json --validation.invalidLink false
# Merge previously generated documentation together into a site
npx typedoc --entryPointStrategy merge "docs-json/*.json"
```
