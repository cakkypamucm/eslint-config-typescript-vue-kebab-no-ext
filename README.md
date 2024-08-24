This is `eslint` config based on [cakkypamucm/eslint-config-vue-kebab-no-ext](https://github.com/cakkypamucm/eslint-config-vue-kebab-no-ext) with `typescript` support

### Install

```shell
npm i --save-dev github:cakkypamucm/eslint-config-typescript-vue-kebab-no-ext
```

### Use (exactly like [cakkypamucm/eslint-config](https://github.com/cakkypamucm/eslint-config/tree/master?tab=readme-ov-file#use))

-   add `eslint-config-typescript-vue-kebab-no-ext-cakkypamucm` to the "extends" array in your `eslint` config file

<pre>
{
    "extends": ["some-other-config-you-use", <b>"eslint-config-typescript-vue-kebab-no-ext-cakkypamucm"</b>]
}
</pre>

-   add [resolvers](https://github.com/import-js/eslint-plugin-import/wiki/Resolvers) to correct working `import/no-unresolved` rule.  
    For webpack-based projects e.g.:

1.

```shell
npm i --save-dev eslint-import-resolver-webpack
```

2.

```json
{
    "settings": {
        "import/resolver": ["node", "webpack"]
    }
}
```
