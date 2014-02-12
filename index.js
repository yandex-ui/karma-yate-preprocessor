var path = require('path');
var fs = require('fs');

var pattern = function(file) {
    return {
        pattern: file,
        included: true,
        served: true,
        watched: false
    };
};

var framework = function(files) {
    files.unshift(pattern(path.resolve(require.resolve('yate'), '../../lib/runtime.js')));
};
framework.$inject = ['config.files'];

var preprocessor = function(logger) {
    var log = logger.create('preprocessor.yate');
    var yate = require('yate');

    return function(content, file, done) {
        var template;

        log.debug('Processing "%s".', file.contentPath);
        template = yate.compile(file.contentPath);
        log.debug('Compiled template "%s"', template.ast.p.Name);

        /**
         * TODO(maksimrv): Научить работать yate с TMP
         * директорией
         */
        fs.unlink(file.contentPath.replace(/\.yate$/, '.yate.obj'));

        done(template.js);
    };

};
preprocessor.$inject = ['logger'];

module.exports['preprocessor:yate'] = ['factory', preprocessor];
module.exports['framework:yate'] = ['factory', framework];
