module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            build: {
                src: ['src/**/*.ts'],
                dest: 'build',
                options: {
                    module: 'Node',
                    target: 'ES5',
                    base_path: 'src',
                    sourcemap: false,
                    fullSourceMapPath: false,
                    declaration: false,
                    comments: false
                }
            }
        }
    });

    grunt.registerTask('default', 'List available tasks.', function()
    {
        grunt.log.writeln("");
        grunt.log.writeln("AVAILABLE TASKS");
        grunt.log.writeln("---------------");
        grunt.log.writeln('build: Build the application.');
    });
    grunt.registerTask('build', ['typescript:build']);
};