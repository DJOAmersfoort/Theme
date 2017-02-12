# DJO Amersfoort Theme

[![Build status][shield-build]][link-build]
[![Code Climate rating][shield-cc]][link-cc]
[![AGPL-3.0 license][shield-license]][link-license]

Contains theme components, based on Bootstrap 4.

This repository contains various modules that can be used to build a DJO-themed
website.

**This is _not_ a standalone package!**, it is to be used as a sass import to
load all mixins and add the key components to the site. Using it as-is is not
a use case that's properly supported, hence no compiled stylesheets or
javascripts are available.

## License

The project is licensed under the [GNU General Public License 3.0][1]. This
means that using this project in your final code implies that you will also
make your code freely available.

If you disagree with this license, please contact the [authors][2].

## How to use

You usually depend on this project in your own code, causing it to compile
alongside your own code. This has been demonstrated below:

### Sass / scss

The stylesheets can be loaded using the `@import` directive in your scss code.

```scss
@import 'node_modules/djoamersfoort-components/scss/modules';
```

### Javascript

For the javascripts you could add the `js` directory to your UglifyJS
configuration, (or whichever javascripts concatenator you use).

```js
var javascriptFiles = [
    'node_modules/djoamersfoort-components/js/*.js',
    // More files
];
```

## Available modules

Please see [the documentation][3] for the list of available modules.

[1]: LICENSE.md
[2]: AUTHORS.md
[3]: docs/index.md

[shield-build]: https://img.shields.io/travis/djoamersfoort/theme.svg
[link-build]: https://travis-ci.org/djoamersfoort/theme
[shield-cc]: https://img.shields.io/codeclimate/github/djoamersfoort/theme.svg
[link-cc]: https://codeclimate.com/github/djoamersfoort/theme
[shield-license]: https://img.shields.io/github/license/djoamersfoort/theme.svg
[link-license]: LICENSE.md
