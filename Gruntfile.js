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
        },
        bump: {
            options: {
                commitMessage: 'chore: release v%VERSION%',
                pushTo: 'origin'
            }
        },
        'npm-publish': {
            options: {
                abortIfDirty: true
            }
        },
        'npm-contributors': {
            options: {
                commitMessage: 'chore: update contributors'
            }
        }
    });

    grunt.registerTask('release', 'Bump the version and publish to NPM.', function(type) {
        return grunt.task.run(['npm-contributors', "bump:" + (type || 'patch') + ':bump-only', 'bump-commit', 'npm-publish']);
    });
    grunt.registerTask('test', ['karma:unit']);
    grunt.registerTask('default', ['test']);
};
