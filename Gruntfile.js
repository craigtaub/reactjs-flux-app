module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            react: {
                files: 'js/components/**/*',
                // tasks: ['browserify' ,'uglify']
                tasks: ['browserify']
            }
        },
        browserify: {
          build: {
              options: {
                debug: false,
                transform: [
                    'reactify', // transform reactJS
                    'babelify' // transform es6 to es5
                ]
              },
              files: {
                'js/app.js': 'js/components/App.jsx'
              }
            }
        },
        uglify: {
          my_target: {
            files: {
              'js/app.min.js': ['js/app.js']
            }
          }
        }

    });

    grunt.loadNpmTasks('grunt-browserify'); // all into 1 file
    grunt.loadNpmTasks('grunt-contrib-uglify'); // minification
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['browserify', 'uglify']);
};
