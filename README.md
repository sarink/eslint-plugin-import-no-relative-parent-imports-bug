# eslint-plugin-import-no-relative-parent-imports-bug

## Problem
`src/children/child.ts` has the following line:
```
import { parent } from '../parent';
```
but `eslint-plugin-import/no-relative-parent-imports` does not pick it up

## Repro:
1. `git clone git@github.com:sarink/eslint-plugin-import-no-relative-parent-imports-bug.git`
2. `cd eslint-plugin-import-no-relative-parent-imports-bug`
3. `nvm use`
4. `npm install`
5. `npm run lint`

```

> eslint-plugin-import-no-relative-parent-imports@0.0.1 lint /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug
> eslint . --ext .ts,.tsx,.js,.jsx "--debug"

2020-01-14T20:04:59.615Z eslint:cli CLI args: [ '.', '--ext', '.ts,.tsx,.js,.jsx', '--debug' ]
2020-01-14T20:04:59.617Z eslint:cli Running on files
2020-01-14T20:04:59.627Z eslint:config-array-factory Loading JSON config file: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/package.json
2020-01-14T20:04:59.628Z eslint:ignore-pattern Create with: [ IgnorePattern { patterns: [ '/node_modules/*', '/bower_components/*' ], basePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug', loose: false } ]
2020-01-14T20:04:59.630Z eslint:ignore-pattern   processed: { basePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug', patterns: [ '/node_modules/*', '/bower_components/*' ] }
2020-01-14T20:04:59.630Z eslint:ignore-pattern Create with: [ IgnorePattern { patterns: [ '/node_modules/*', '/bower_components/*' ], basePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug', loose: false } ]
2020-01-14T20:04:59.631Z eslint:ignore-pattern   processed: { basePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug', patterns: [ '/node_modules/*', '/bower_components/*' ] }
2020-01-14T20:04:59.631Z eslint:file-enumerator Start to iterate files: [ '.' ]
2020-01-14T20:04:59.631Z eslint:file-enumerator Directory: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug
2020-01-14T20:04:59.632Z eslint:file-enumerator Enter the directory: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug
2020-01-14T20:04:59.632Z eslint:cascading-config-array-factory Load config files for /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug.
2020-01-14T20:04:59.632Z eslint:cascading-config-array-factory No cache found: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug.
2020-01-14T20:04:59.632Z eslint:config-array-factory Loading JS config file: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/.eslintrc.js
2020-01-14T20:04:59.633Z eslint:config-array-factory Config file found: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/.eslintrc.js
2020-01-14T20:04:59.633Z eslint:config-array-factory Loading parser "@typescript-eslint/parser" from /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/.eslintrc.js
2020-01-14T20:04:59.634Z eslint:config-array-factory Loaded: @typescript-eslint/parser@2.16.0 (/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/@typescript-eslint/parser/dist/parser.js)
2020-01-14T20:04:59.856Z eslint:config-array-factory Loading plugin "@typescript-eslint" from /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/.eslintrc.js
2020-01-14T20:04:59.857Z eslint:config-array-factory Loaded: @typescript-eslint/eslint-plugin@2.16.0 (/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/@typescript-eslint/eslint-plugin/dist/index.js)
2020-01-14T20:04:59.936Z eslint:config-array-factory Plugin /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/@typescript-eslint/eslint-plugin/dist/index.js loaded in: 79ms
2020-01-14T20:04:59.936Z eslint:config-array-factory Loading plugin "import" from /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/.eslintrc.js
2020-01-14T20:04:59.937Z eslint:config-array-factory Loaded: eslint-plugin-import@2.20.0 (/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/eslint-plugin-import/lib/index.js)
2020-01-14T20:05:00.016Z eslint:config-array-factory Plugin /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/eslint-plugin-import/lib/index.js loaded in: 79ms
2020-01-14T20:05:00.016Z eslint:cascading-config-array-factory No cache found: /Users/sarink/Projects.
2020-01-14T20:05:00.016Z eslint:config-array-factory Config file not found on /Users/sarink/Projects
2020-01-14T20:05:00.016Z eslint:cascading-config-array-factory No cache found: /Users/sarink.
2020-01-14T20:05:00.016Z eslint:cascading-config-array-factory Stop traversing because of considered root.
2020-01-14T20:05:00.020Z eslint:cascading-config-array-factory Configuration was determined: ConfigArray [ { name: 'DefaultIgnorePattern', filePath: '', criteria: null, env: undefined, globals: undefined, ignorePattern: IgnorePattern { patterns: [Array], basePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug', loose: false }, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: undefined, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: undefined, settings: undefined }, { name: '.eslintrc.js', filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/.eslintrc.js', criteria: null, env: undefined, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: { error: null, filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/@typescript-eslint/parser/dist/parser.js', id: '@typescript-eslint/parser', importerName: '.eslintrc.js', importerPath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/.eslintrc.js' }, parserOptions: { ecmaVersion: 6, sourceType: 'module' }, plugins: { '@typescript-eslint': [Object], import: [Object] }, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: { 'import/no-relative-parent-imports': 'warn' }, settings: undefined } ] on /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug
2020-01-14T20:05:00.020Z eslint:ignore-pattern Create with: [ IgnorePattern { patterns: [ '/node_modules/*', '/bower_components/*' ], basePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug', loose: false } ]
2020-01-14T20:05:00.021Z eslint:ignore-pattern   processed: { basePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug', patterns: [ '/node_modules/*', '/bower_components/*' ] }
2020-01-14T20:05:00.021Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/.eslintrc.js',
  dot: false,
  relativePath: '.eslintrc.js',
  result: true
}
2020-01-14T20:05:00.021Z eslint:file-enumerator Yield: .eslintrc.js but ignored
2020-01-14T20:05:00.021Z eslint:cascading-config-array-factory Load config files for /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug.
2020-01-14T20:05:00.021Z eslint:cascading-config-array-factory Cache hit: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug.
2020-01-14T20:05:00.021Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/.nvmrc',
  dot: false,
  relativePath: '.nvmrc',
  result: true
}
2020-01-14T20:05:00.021Z eslint:file-enumerator Didn't match: .nvmrc
2020-01-14T20:05:00.022Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/eslint-debug-log.txt',
  dot: false,
  relativePath: 'eslint-debug-log.txt',
  result: false
}
2020-01-14T20:05:00.022Z eslint:file-enumerator Didn't match: eslint-debug-log.txt
2020-01-14T20:05:00.022Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/',
  dot: false,
  relativePath: 'node_modules/',
  result: false
}
2020-01-14T20:05:00.022Z eslint:file-enumerator Enter the directory: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules
2020-01-14T20:05:00.022Z eslint:cascading-config-array-factory Load config files for /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules.
2020-01-14T20:05:00.022Z eslint:cascading-config-array-factory No cache found: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules.
2020-01-14T20:05:00.022Z eslint:config-array-factory Config file not found on /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules
2020-01-14T20:05:00.023Z eslint:cascading-config-array-factory Cache hit: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug.
2020-01-14T20:05:00.023Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/.bin/',
  dot: false,
  relativePath: 'node_modules/.bin/',
  result: true
}
2020-01-14T20:05:00.023Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/@babel/',
  dot: false,
  relativePath: 'node_modules/@babel/',
  result: true
}
2020-01-14T20:05:00.023Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/@types/',
  dot: false,
  relativePath: 'node_modules/@types/',
  result: true
}
2020-01-14T20:05:00.023Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/@typescript-eslint/',
  dot: false,
  relativePath: 'node_modules/@typescript-eslint/',
  result: true
}
2020-01-14T20:05:00.023Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/acorn/',
  dot: false,
  relativePath: 'node_modules/acorn/',
  result: true
}
2020-01-14T20:05:00.023Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/acorn-jsx/',
  dot: false,
  relativePath: 'node_modules/acorn-jsx/',
  result: true
}
2020-01-14T20:05:00.023Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/ajv/',
  dot: false,
  relativePath: 'node_modules/ajv/',
  result: true
}
2020-01-14T20:05:00.023Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/ansi-escapes/',
  dot: false,
  relativePath: 'node_modules/ansi-escapes/',
  result: true
}
2020-01-14T20:05:00.024Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/ansi-regex/',
  dot: false,
  relativePath: 'node_modules/ansi-regex/',
  result: true
}
2020-01-14T20:05:00.024Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/ansi-styles/',
  dot: false,
  relativePath: 'node_modules/ansi-styles/',
  result: true
}
2020-01-14T20:05:00.024Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/argparse/',
  dot: false,
  relativePath: 'node_modules/argparse/',
  result: true
}
2020-01-14T20:05:00.024Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/array-includes/',
  dot: false,
  relativePath: 'node_modules/array-includes/',
  result: true
}
2020-01-14T20:05:00.024Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/array.prototype.flat/',
  dot: false,
  relativePath: 'node_modules/array.prototype.flat/',
  result: true
}
2020-01-14T20:05:00.024Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/astral-regex/',
  dot: false,
  relativePath: 'node_modules/astral-regex/',
  result: true
}
2020-01-14T20:05:00.024Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/balanced-match/',
  dot: false,
  relativePath: 'node_modules/balanced-match/',
  result: true
}
2020-01-14T20:05:00.024Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/brace-expansion/',
  dot: false,
  relativePath: 'node_modules/brace-expansion/',
  result: true
}
2020-01-14T20:05:00.024Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/callsites/',
  dot: false,
  relativePath: 'node_modules/callsites/',
  result: true
}
2020-01-14T20:05:00.024Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/chalk/',
  dot: false,
  relativePath: 'node_modules/chalk/',
  result: true
}
2020-01-14T20:05:00.024Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/chardet/',
  dot: false,
  relativePath: 'node_modules/chardet/',
  result: true
}
2020-01-14T20:05:00.025Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/cli-cursor/',
  dot: false,
  relativePath: 'node_modules/cli-cursor/',
  result: true
}
2020-01-14T20:05:00.025Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/cli-width/',
  dot: false,
  relativePath: 'node_modules/cli-width/',
  result: true
}
2020-01-14T20:05:00.025Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/color-convert/',
  dot: false,
  relativePath: 'node_modules/color-convert/',
  result: true
}
2020-01-14T20:05:00.025Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/color-name/',
  dot: false,
  relativePath: 'node_modules/color-name/',
  result: true
}
2020-01-14T20:05:00.025Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/concat-map/',
  dot: false,
  relativePath: 'node_modules/concat-map/',
  result: true
}
2020-01-14T20:05:00.025Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/contains-path/',
  dot: false,
  relativePath: 'node_modules/contains-path/',
  result: true
}
2020-01-14T20:05:00.025Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/cross-spawn/',
  dot: false,
  relativePath: 'node_modules/cross-spawn/',
  result: true
}
2020-01-14T20:05:00.025Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/debug/',
  dot: false,
  relativePath: 'node_modules/debug/',
  result: true
}
2020-01-14T20:05:00.025Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/deep-is/',
  dot: false,
  relativePath: 'node_modules/deep-is/',
  result: true
}
2020-01-14T20:05:00.026Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/define-properties/',
  dot: false,
  relativePath: 'node_modules/define-properties/',
  result: true
}
2020-01-14T20:05:00.026Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/doctrine/',
  dot: false,
  relativePath: 'node_modules/doctrine/',
  result: true
}
2020-01-14T20:05:00.026Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/emoji-regex/',
  dot: false,
  relativePath: 'node_modules/emoji-regex/',
  result: true
}
2020-01-14T20:05:00.026Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/error-ex/',
  dot: false,
  relativePath: 'node_modules/error-ex/',
  result: true
}
2020-01-14T20:05:00.026Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/es-abstract/',
  dot: false,
  relativePath: 'node_modules/es-abstract/',
  result: true
}
2020-01-14T20:05:00.026Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/es-to-primitive/',
  dot: false,
  relativePath: 'node_modules/es-to-primitive/',
  result: true
}
2020-01-14T20:05:00.026Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/escape-string-regexp/',
  dot: false,
  relativePath: 'node_modules/escape-string-regexp/',
  result: true
}
2020-01-14T20:05:00.026Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/eslint/',
  dot: false,
  relativePath: 'node_modules/eslint/',
  result: true
}
2020-01-14T20:05:00.026Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/eslint-import-resolver-node/',
  dot: false,
  relativePath: 'node_modules/eslint-import-resolver-node/',
  result: true
}
2020-01-14T20:05:00.026Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/eslint-module-utils/',
  dot: false,
  relativePath: 'node_modules/eslint-module-utils/',
  result: true
}
2020-01-14T20:05:00.026Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/eslint-plugin-import/',
  dot: false,
  relativePath: 'node_modules/eslint-plugin-import/',
  result: true
}
2020-01-14T20:05:00.027Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/eslint-scope/',
  dot: false,
  relativePath: 'node_modules/eslint-scope/',
  result: true
}
2020-01-14T20:05:00.027Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/eslint-utils/',
  dot: false,
  relativePath: 'node_modules/eslint-utils/',
  result: true
}
2020-01-14T20:05:00.027Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/eslint-visitor-keys/',
  dot: false,
  relativePath: 'node_modules/eslint-visitor-keys/',
  result: true
}
2020-01-14T20:05:00.027Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/espree/',
  dot: false,
  relativePath: 'node_modules/espree/',
  result: true
}
2020-01-14T20:05:00.027Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/esprima/',
  dot: false,
  relativePath: 'node_modules/esprima/',
  result: true
}
2020-01-14T20:05:00.027Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/esquery/',
  dot: false,
  relativePath: 'node_modules/esquery/',
  result: true
}
2020-01-14T20:05:00.027Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/esrecurse/',
  dot: false,
  relativePath: 'node_modules/esrecurse/',
  result: true
}
2020-01-14T20:05:00.027Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/estraverse/',
  dot: false,
  relativePath: 'node_modules/estraverse/',
  result: true
}
2020-01-14T20:05:00.027Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/esutils/',
  dot: false,
  relativePath: 'node_modules/esutils/',
  result: true
}
2020-01-14T20:05:00.027Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/external-editor/',
  dot: false,
  relativePath: 'node_modules/external-editor/',
  result: true
}
2020-01-14T20:05:00.027Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/fast-deep-equal/',
  dot: false,
  relativePath: 'node_modules/fast-deep-equal/',
  result: true
}
2020-01-14T20:05:00.028Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/fast-json-stable-stringify/',
  dot: false,
  relativePath: 'node_modules/fast-json-stable-stringify/',
  result: true
}
2020-01-14T20:05:00.028Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/fast-levenshtein/',
  dot: false,
  relativePath: 'node_modules/fast-levenshtein/',
  result: true
}
2020-01-14T20:05:00.028Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/figures/',
  dot: false,
  relativePath: 'node_modules/figures/',
  result: true
}
2020-01-14T20:05:00.028Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/file-entry-cache/',
  dot: false,
  relativePath: 'node_modules/file-entry-cache/',
  result: true
}
2020-01-14T20:05:00.028Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/find-up/',
  dot: false,
  relativePath: 'node_modules/find-up/',
  result: true
}
2020-01-14T20:05:00.028Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/flat-cache/',
  dot: false,
  relativePath: 'node_modules/flat-cache/',
  result: true
}
2020-01-14T20:05:00.028Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/flatted/',
  dot: false,
  relativePath: 'node_modules/flatted/',
  result: true
}
2020-01-14T20:05:00.028Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/fs.realpath/',
  dot: false,
  relativePath: 'node_modules/fs.realpath/',
  result: true
}
2020-01-14T20:05:00.028Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/function-bind/',
  dot: false,
  relativePath: 'node_modules/function-bind/',
  result: true
}
2020-01-14T20:05:00.028Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/functional-red-black-tree/',
  dot: false,
  relativePath: 'node_modules/functional-red-black-tree/',
  result: true
}
2020-01-14T20:05:00.028Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/glob/',
  dot: false,
  relativePath: 'node_modules/glob/',
  result: true
}
2020-01-14T20:05:00.029Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/glob-parent/',
  dot: false,
  relativePath: 'node_modules/glob-parent/',
  result: true
}
2020-01-14T20:05:00.029Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/globals/',
  dot: false,
  relativePath: 'node_modules/globals/',
  result: true
}
2020-01-14T20:05:00.029Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/graceful-fs/',
  dot: false,
  relativePath: 'node_modules/graceful-fs/',
  result: true
}
2020-01-14T20:05:00.029Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/has/',
  dot: false,
  relativePath: 'node_modules/has/',
  result: true
}
2020-01-14T20:05:00.029Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/has-flag/',
  dot: false,
  relativePath: 'node_modules/has-flag/',
  result: true
}
2020-01-14T20:05:00.029Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/has-symbols/',
  dot: false,
  relativePath: 'node_modules/has-symbols/',
  result: true
}
2020-01-14T20:05:00.029Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/hosted-git-info/',
  dot: false,
  relativePath: 'node_modules/hosted-git-info/',
  result: true
}
2020-01-14T20:05:00.029Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/iconv-lite/',
  dot: false,
  relativePath: 'node_modules/iconv-lite/',
  result: true
}
2020-01-14T20:05:00.029Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/ignore/',
  dot: false,
  relativePath: 'node_modules/ignore/',
  result: true
}
2020-01-14T20:05:00.029Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/import-fresh/',
  dot: false,
  relativePath: 'node_modules/import-fresh/',
  result: true
}
2020-01-14T20:05:00.029Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/imurmurhash/',
  dot: false,
  relativePath: 'node_modules/imurmurhash/',
  result: true
}
2020-01-14T20:05:00.030Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/inflight/',
  dot: false,
  relativePath: 'node_modules/inflight/',
  result: true
}
2020-01-14T20:05:00.030Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/inherits/',
  dot: false,
  relativePath: 'node_modules/inherits/',
  result: true
}
2020-01-14T20:05:00.030Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/inquirer/',
  dot: false,
  relativePath: 'node_modules/inquirer/',
  result: true
}
2020-01-14T20:05:00.030Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/is-arrayish/',
  dot: false,
  relativePath: 'node_modules/is-arrayish/',
  result: true
}
2020-01-14T20:05:00.030Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/is-callable/',
  dot: false,
  relativePath: 'node_modules/is-callable/',
  result: true
}
2020-01-14T20:05:00.030Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/is-date-object/',
  dot: false,
  relativePath: 'node_modules/is-date-object/',
  result: true
}
2020-01-14T20:05:00.030Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/is-extglob/',
  dot: false,
  relativePath: 'node_modules/is-extglob/',
  result: true
}
2020-01-14T20:05:00.030Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/is-fullwidth-code-point/',
  dot: false,
  relativePath: 'node_modules/is-fullwidth-code-point/',
  result: true
}
2020-01-14T20:05:00.031Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/is-glob/',
  dot: false,
  relativePath: 'node_modules/is-glob/',
  result: true
}
2020-01-14T20:05:00.031Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/is-promise/',
  dot: false,
  relativePath: 'node_modules/is-promise/',
  result: true
}
2020-01-14T20:05:00.032Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/is-regex/',
  dot: false,
  relativePath: 'node_modules/is-regex/',
  result: true
}
2020-01-14T20:05:00.032Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/is-string/',
  dot: false,
  relativePath: 'node_modules/is-string/',
  result: true
}
2020-01-14T20:05:00.032Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/is-symbol/',
  dot: false,
  relativePath: 'node_modules/is-symbol/',
  result: true
}
2020-01-14T20:05:00.032Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/isarray/',
  dot: false,
  relativePath: 'node_modules/isarray/',
  result: true
}
2020-01-14T20:05:00.032Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/isexe/',
  dot: false,
  relativePath: 'node_modules/isexe/',
  result: true
}
2020-01-14T20:05:00.032Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/js-tokens/',
  dot: false,
  relativePath: 'node_modules/js-tokens/',
  result: true
}
2020-01-14T20:05:00.032Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/js-yaml/',
  dot: false,
  relativePath: 'node_modules/js-yaml/',
  result: true
}
2020-01-14T20:05:00.032Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/json-schema-traverse/',
  dot: false,
  relativePath: 'node_modules/json-schema-traverse/',
  result: true
}
2020-01-14T20:05:00.032Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/json-stable-stringify-without-jsonify/',
  dot: false,
  relativePath: 'node_modules/json-stable-stringify-without-jsonify/',
  result: true
}
2020-01-14T20:05:00.032Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/levn/',
  dot: false,
  relativePath: 'node_modules/levn/',
  result: true
}
2020-01-14T20:05:00.033Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/load-json-file/',
  dot: false,
  relativePath: 'node_modules/load-json-file/',
  result: true
}
2020-01-14T20:05:00.033Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/locate-path/',
  dot: false,
  relativePath: 'node_modules/locate-path/',
  result: true
}
2020-01-14T20:05:00.033Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/lodash/',
  dot: false,
  relativePath: 'node_modules/lodash/',
  result: true
}
2020-01-14T20:05:00.033Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/mimic-fn/',
  dot: false,
  relativePath: 'node_modules/mimic-fn/',
  result: true
}
2020-01-14T20:05:00.033Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/minimatch/',
  dot: false,
  relativePath: 'node_modules/minimatch/',
  result: true
}
2020-01-14T20:05:00.033Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/minimist/',
  dot: false,
  relativePath: 'node_modules/minimist/',
  result: true
}
2020-01-14T20:05:00.033Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/mkdirp/',
  dot: false,
  relativePath: 'node_modules/mkdirp/',
  result: true
}
2020-01-14T20:05:00.033Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/ms/',
  dot: false,
  relativePath: 'node_modules/ms/',
  result: true
}
2020-01-14T20:05:00.033Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/mute-stream/',
  dot: false,
  relativePath: 'node_modules/mute-stream/',
  result: true
}
2020-01-14T20:05:00.033Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/natural-compare/',
  dot: false,
  relativePath: 'node_modules/natural-compare/',
  result: true
}
2020-01-14T20:05:00.034Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/nice-try/',
  dot: false,
  relativePath: 'node_modules/nice-try/',
  result: true
}
2020-01-14T20:05:00.034Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/normalize-package-data/',
  dot: false,
  relativePath: 'node_modules/normalize-package-data/',
  result: true
}
2020-01-14T20:05:00.034Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/object-inspect/',
  dot: false,
  relativePath: 'node_modules/object-inspect/',
  result: true
}
2020-01-14T20:05:00.034Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/object-keys/',
  dot: false,
  relativePath: 'node_modules/object-keys/',
  result: true
}
2020-01-14T20:05:00.034Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/object.assign/',
  dot: false,
  relativePath: 'node_modules/object.assign/',
  result: true
}
2020-01-14T20:05:00.034Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/object.values/',
  dot: false,
  relativePath: 'node_modules/object.values/',
  result: true
}
2020-01-14T20:05:00.034Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/once/',
  dot: false,
  relativePath: 'node_modules/once/',
  result: true
}
2020-01-14T20:05:00.034Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/onetime/',
  dot: false,
  relativePath: 'node_modules/onetime/',
  result: true
}
2020-01-14T20:05:00.035Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/optionator/',
  dot: false,
  relativePath: 'node_modules/optionator/',
  result: true
}
2020-01-14T20:05:00.035Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/os-tmpdir/',
  dot: false,
  relativePath: 'node_modules/os-tmpdir/',
  result: true
}
2020-01-14T20:05:00.035Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/p-limit/',
  dot: false,
  relativePath: 'node_modules/p-limit/',
  result: true
}
2020-01-14T20:05:00.035Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/p-locate/',
  dot: false,
  relativePath: 'node_modules/p-locate/',
  result: true
}
2020-01-14T20:05:00.035Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/p-try/',
  dot: false,
  relativePath: 'node_modules/p-try/',
  result: true
}
2020-01-14T20:05:00.035Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/parent-module/',
  dot: false,
  relativePath: 'node_modules/parent-module/',
  result: true
}
2020-01-14T20:05:00.035Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/parse-json/',
  dot: false,
  relativePath: 'node_modules/parse-json/',
  result: true
}
2020-01-14T20:05:00.035Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/path-exists/',
  dot: false,
  relativePath: 'node_modules/path-exists/',
  result: true
}
2020-01-14T20:05:00.035Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/path-is-absolute/',
  dot: false,
  relativePath: 'node_modules/path-is-absolute/',
  result: true
}
2020-01-14T20:05:00.036Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/path-key/',
  dot: false,
  relativePath: 'node_modules/path-key/',
  result: true
}
2020-01-14T20:05:00.036Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/path-parse/',
  dot: false,
  relativePath: 'node_modules/path-parse/',
  result: true
}
2020-01-14T20:05:00.036Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/path-type/',
  dot: false,
  relativePath: 'node_modules/path-type/',
  result: true
}
2020-01-14T20:05:00.036Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/pify/',
  dot: false,
  relativePath: 'node_modules/pify/',
  result: true
}
2020-01-14T20:05:00.036Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/pkg-dir/',
  dot: false,
  relativePath: 'node_modules/pkg-dir/',
  result: true
}
2020-01-14T20:05:00.036Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/prelude-ls/',
  dot: false,
  relativePath: 'node_modules/prelude-ls/',
  result: true
}
2020-01-14T20:05:00.036Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/progress/',
  dot: false,
  relativePath: 'node_modules/progress/',
  result: true
}
2020-01-14T20:05:00.036Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/punycode/',
  dot: false,
  relativePath: 'node_modules/punycode/',
  result: true
}
2020-01-14T20:05:00.036Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/read-pkg/',
  dot: false,
  relativePath: 'node_modules/read-pkg/',
  result: true
}
2020-01-14T20:05:00.036Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/read-pkg-up/',
  dot: false,
  relativePath: 'node_modules/read-pkg-up/',
  result: true
}
2020-01-14T20:05:00.037Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/regexpp/',
  dot: false,
  relativePath: 'node_modules/regexpp/',
  result: true
}
2020-01-14T20:05:00.037Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/resolve/',
  dot: false,
  relativePath: 'node_modules/resolve/',
  result: true
}
2020-01-14T20:05:00.037Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/resolve-from/',
  dot: false,
  relativePath: 'node_modules/resolve-from/',
  result: true
}
2020-01-14T20:05:00.037Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/restore-cursor/',
  dot: false,
  relativePath: 'node_modules/restore-cursor/',
  result: true
}
2020-01-14T20:05:00.037Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/rimraf/',
  dot: false,
  relativePath: 'node_modules/rimraf/',
  result: true
}
2020-01-14T20:05:00.037Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/run-async/',
  dot: false,
  relativePath: 'node_modules/run-async/',
  result: true
}
2020-01-14T20:05:00.037Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/rxjs/',
  dot: false,
  relativePath: 'node_modules/rxjs/',
  result: true
}
2020-01-14T20:05:00.037Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/safer-buffer/',
  dot: false,
  relativePath: 'node_modules/safer-buffer/',
  result: true
}
2020-01-14T20:05:00.037Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/semver/',
  dot: false,
  relativePath: 'node_modules/semver/',
  result: true
}
2020-01-14T20:05:00.037Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/shebang-command/',
  dot: false,
  relativePath: 'node_modules/shebang-command/',
  result: true
}
2020-01-14T20:05:00.037Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/shebang-regex/',
  dot: false,
  relativePath: 'node_modules/shebang-regex/',
  result: true
}
2020-01-14T20:05:00.038Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/signal-exit/',
  dot: false,
  relativePath: 'node_modules/signal-exit/',
  result: true
}
2020-01-14T20:05:00.038Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/slice-ansi/',
  dot: false,
  relativePath: 'node_modules/slice-ansi/',
  result: true
}
2020-01-14T20:05:00.038Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/spdx-correct/',
  dot: false,
  relativePath: 'node_modules/spdx-correct/',
  result: true
}
2020-01-14T20:05:00.039Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/spdx-exceptions/',
  dot: false,
  relativePath: 'node_modules/spdx-exceptions/',
  result: true
}
2020-01-14T20:05:00.039Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/spdx-expression-parse/',
  dot: false,
  relativePath: 'node_modules/spdx-expression-parse/',
  result: true
}
2020-01-14T20:05:00.039Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/spdx-license-ids/',
  dot: false,
  relativePath: 'node_modules/spdx-license-ids/',
  result: true
}
2020-01-14T20:05:00.039Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/sprintf-js/',
  dot: false,
  relativePath: 'node_modules/sprintf-js/',
  result: true
}
2020-01-14T20:05:00.039Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/string-width/',
  dot: false,
  relativePath: 'node_modules/string-width/',
  result: true
}
2020-01-14T20:05:00.039Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/string.prototype.trimleft/',
  dot: false,
  relativePath: 'node_modules/string.prototype.trimleft/',
  result: true
}
2020-01-14T20:05:00.039Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/string.prototype.trimright/',
  dot: false,
  relativePath: 'node_modules/string.prototype.trimright/',
  result: true
}
2020-01-14T20:05:00.039Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/strip-ansi/',
  dot: false,
  relativePath: 'node_modules/strip-ansi/',
  result: true
}
2020-01-14T20:05:00.039Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/strip-bom/',
  dot: false,
  relativePath: 'node_modules/strip-bom/',
  result: true
}
2020-01-14T20:05:00.039Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/strip-json-comments/',
  dot: false,
  relativePath: 'node_modules/strip-json-comments/',
  result: true
}
2020-01-14T20:05:00.039Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/supports-color/',
  dot: false,
  relativePath: 'node_modules/supports-color/',
  result: true
}
2020-01-14T20:05:00.039Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/table/',
  dot: false,
  relativePath: 'node_modules/table/',
  result: true
}
2020-01-14T20:05:00.039Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/text-table/',
  dot: false,
  relativePath: 'node_modules/text-table/',
  result: true
}
2020-01-14T20:05:00.039Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/through/',
  dot: false,
  relativePath: 'node_modules/through/',
  result: true
}
2020-01-14T20:05:00.040Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/tmp/',
  dot: false,
  relativePath: 'node_modules/tmp/',
  result: true
}
2020-01-14T20:05:00.040Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/tslib/',
  dot: false,
  relativePath: 'node_modules/tslib/',
  result: true
}
2020-01-14T20:05:00.040Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/tsutils/',
  dot: false,
  relativePath: 'node_modules/tsutils/',
  result: true
}
2020-01-14T20:05:00.040Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/type-check/',
  dot: false,
  relativePath: 'node_modules/type-check/',
  result: true
}
2020-01-14T20:05:00.040Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/type-fest/',
  dot: false,
  relativePath: 'node_modules/type-fest/',
  result: true
}
2020-01-14T20:05:00.040Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/typescript/',
  dot: false,
  relativePath: 'node_modules/typescript/',
  result: true
}
2020-01-14T20:05:00.040Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/uri-js/',
  dot: false,
  relativePath: 'node_modules/uri-js/',
  result: true
}
2020-01-14T20:05:00.040Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/v8-compile-cache/',
  dot: false,
  relativePath: 'node_modules/v8-compile-cache/',
  result: true
}
2020-01-14T20:05:00.040Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/validate-npm-package-license/',
  dot: false,
  relativePath: 'node_modules/validate-npm-package-license/',
  result: true
}
2020-01-14T20:05:00.040Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/which/',
  dot: false,
  relativePath: 'node_modules/which/',
  result: true
}
2020-01-14T20:05:00.040Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/word-wrap/',
  dot: false,
  relativePath: 'node_modules/word-wrap/',
  result: true
}
2020-01-14T20:05:00.040Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/wrappy/',
  dot: false,
  relativePath: 'node_modules/wrappy/',
  result: true
}
2020-01-14T20:05:00.041Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules/write/',
  dot: false,
  relativePath: 'node_modules/write/',
  result: true
}
2020-01-14T20:05:00.041Z eslint:file-enumerator Leave the directory: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/node_modules
2020-01-14T20:05:00.041Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/package-lock.json',
  dot: false,
  relativePath: 'package-lock.json',
  result: false
}
2020-01-14T20:05:00.041Z eslint:file-enumerator Didn't match: package-lock.json
2020-01-14T20:05:00.041Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/package.json',
  dot: false,
  relativePath: 'package.json',
  result: false
}
2020-01-14T20:05:00.041Z eslint:file-enumerator Didn't match: package.json
2020-01-14T20:05:00.041Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/',
  dot: false,
  relativePath: 'src/',
  result: false
}
2020-01-14T20:05:00.041Z eslint:file-enumerator Enter the directory: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src
2020-01-14T20:05:00.041Z eslint:cascading-config-array-factory Load config files for /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src.
2020-01-14T20:05:00.041Z eslint:cascading-config-array-factory No cache found: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src.
2020-01-14T20:05:00.041Z eslint:config-array-factory Config file not found on /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src
2020-01-14T20:05:00.041Z eslint:cascading-config-array-factory Cache hit: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug.
2020-01-14T20:05:00.041Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/children/',
  dot: false,
  relativePath: 'src/children/',
  result: false
}
2020-01-14T20:05:00.041Z eslint:file-enumerator Enter the directory: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/children
2020-01-14T20:05:00.041Z eslint:cascading-config-array-factory Load config files for /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/children.
2020-01-14T20:05:00.041Z eslint:cascading-config-array-factory No cache found: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/children.
2020-01-14T20:05:00.041Z eslint:config-array-factory Config file not found on /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/children
2020-01-14T20:05:00.041Z eslint:cascading-config-array-factory Cache hit: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src.
2020-01-14T20:05:00.042Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/children/child.ts',
  dot: false,
  relativePath: 'src/children/child.ts',
  result: false
}
2020-01-14T20:05:00.042Z eslint:file-enumerator Yield: child.ts
2020-01-14T20:05:00.042Z eslint:cascading-config-array-factory Load config files for /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/children.
2020-01-14T20:05:00.042Z eslint:cascading-config-array-factory Cache hit: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/children.
2020-01-14T20:05:00.042Z eslint:cli-engine Lint /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/children/child.ts
2020-01-14T20:05:00.042Z eslint:linter Linting code for /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/children/child.ts (pass 1)
2020-01-14T20:05:00.042Z eslint:linter Verify
2020-01-14T20:05:00.042Z eslint:linter With ConfigArray: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/children/child.ts
2020-01-14T20:05:00.075Z eslint:linter Generating fixed text for /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/children/child.ts (pass 1)
2020-01-14T20:05:00.075Z eslint:source-code-fixer Applying fixes
2020-01-14T20:05:00.075Z eslint:source-code-fixer shouldFix parameter was false, not attempting fixes
2020-01-14T20:05:00.076Z eslint:file-enumerator Leave the directory: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/children
2020-01-14T20:05:00.076Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/parent.ts',
  dot: false,
  relativePath: 'src/parent.ts',
  result: false
}
2020-01-14T20:05:00.076Z eslint:file-enumerator Yield: parent.ts
2020-01-14T20:05:00.076Z eslint:cascading-config-array-factory Load config files for /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src.
2020-01-14T20:05:00.076Z eslint:cascading-config-array-factory Cache hit: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src.
2020-01-14T20:05:00.076Z eslint:cli-engine Lint /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/parent.ts
2020-01-14T20:05:00.076Z eslint:linter Linting code for /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/parent.ts (pass 1)
2020-01-14T20:05:00.076Z eslint:linter Verify
2020-01-14T20:05:00.076Z eslint:linter With ConfigArray: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/parent.ts
2020-01-14T20:05:00.079Z eslint:linter Generating fixed text for /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src/parent.ts (pass 1)
2020-01-14T20:05:00.079Z eslint:source-code-fixer Applying fixes
2020-01-14T20:05:00.079Z eslint:source-code-fixer shouldFix parameter was false, not attempting fixes
2020-01-14T20:05:00.079Z eslint:file-enumerator Leave the directory: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/src
2020-01-14T20:05:00.079Z eslint:ignore-pattern Check {
  filePath: '/Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug/tsconfig.json',
  dot: false,
  relativePath: 'tsconfig.json',
  result: false
}
2020-01-14T20:05:00.079Z eslint:file-enumerator Didn't match: tsconfig.json
2020-01-14T20:05:00.079Z eslint:file-enumerator Leave the directory: /Users/sarink/Projects/eslint-plugin-import-no-relative-parent-imports-bug
2020-01-14T20:05:00.079Z eslint:file-enumerator Complete iterating files: ["."]
2020-01-14T20:05:00.079Z eslint:cli-engine Linting complete in: 448ms
```
