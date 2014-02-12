module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        watch: {
            files: ['**/*.js', '**/*.yate'],
            tasks: ['test']
        }
    });

    grunt.registerTask('test', ['karma:unit']);
    grunt.registerTask('default', ['test']);
};
