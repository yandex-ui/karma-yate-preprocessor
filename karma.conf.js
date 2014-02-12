module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'expect', 'yate'],
        files: [
            'test/*.yate',
            'test/*.js',
        ],
        plugins: [
            'karma-*',
            require('./index.js')
        ],
        preprocessors: {
            'test/*.yate': ['yate']
        },
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: ['PhantomJS']
    });
};
