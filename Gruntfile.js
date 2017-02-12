/* eslint-disable strict */
/**
 * Creates CSS and JS files from Sass and uncompressed Javascript.
 *
 * @author Roelof Roos <github@roelof.io>
 * @license GPL-3.0
 */

module.exports = function(grunt) {
    // Fix promises
    require('es6-promise').polyfill();

    // Make sure some directories exist
    grunt.file.mkdir('dist');

    var bannerText = [
        '/* eslint-disable */',
        '/**!',
        ' * djoamersfoort-theme',
        ' * Components that make up the navbar and define base colours',
        ' * ',
        ' * Developed with ❤ by Roelof in Amersfoort',
        ' * (and sometimes Zwolle...)',
        ' * ',
        ' * @author Roelof Roos <github@roelof.io>',
        ' * @license GPL-3.0',
        ' * @link https://github.com/djoamersfoort/theme',
        ' */'
    ].join('\n') + '\n';

    //
    // File configuration, contains all files that will be compiled.
    //
    var files = {
        uglify: {
            'dist/theme.min.js': [
                'js/*.js'
            ]
        },
        eslint: [
            'Gruntfile.js',
            'js/*.js',
            '!dist/'
        ],
        eslintconfig: '.eslintrc.json',
        sass: {
            'dist/theme.css': [
                'scss/theme.scss'
            ]
        },
        sasslint: [
            'scss/*.scss',
            'scss/**/*.scss'
        ],
        watch: {
            js: [
                'js/*.js',
                '!js/*.min.js'
            ],
            sass: [
                'scss/*.scss',
                'scss/*/*.scss'
            ]
        }
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Uglify javascript
        uglify: {
            main: {
                files: files.uglify
            }
        },

        // ESLint linting and validation
        eslint: {
            files: files.eslint,
            options: {
                configFile: '.eslintrc.json'
            }
        },

        // Sass linting
        sasslint: {
            files: files.sasslint,
            options: {
                configFile: '.sass-lint.yml'
            }
        },

        // Sass compiler
        sass: {
            normal: {
                files: files.sass,
                options: {
                    banner: bannerText,
                    indentWidth: 4,
                    outputStyle: 'nested',
                    roundingPrecision: -1,
                    sourceComments: true
                }
            }
        },

        // Watch config
        watch: {
            sass: {
                files: files.watch.sass,
                tasks: ['sasslint', 'sass'],
                options: {
                    interrupt: true
                }
            },

            js: {
                files: files.watch.js,
                tasks: ['eslint', 'uglify'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    // Load all used tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-sass-lint');

    //
    // Start registering tasks
    //

    // Runs all the aforementioned tests in one go. This command is also run
    // before running `dev` or `prod`.
    grunt.registerTask(
        'test',
        'Runs the sass and javascript tests',
        [
            'eslint',
            'sasslint'
        ]
    );

    grunt.registerTask(
        'build',
        'Builds the sass and javascript files into a simple file.',
        [
            'uglify',
            'sass'
        ]
    );

    grunt.registerTask(
        'default',
        'Compiles assets for development',
        [
            'test',
            'build'
        ]
    );
};
