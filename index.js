var es = require('event-stream'),
    gutil = require('gulp-util'),
    juice = require('juice'),
    File = gutil.File,
    PluginError = gutil.PluginError,
    crypto = require('crypto');

module.exports = function(options){
    options = options || {};
    return es.map(function(file, fn){
        options.url = 'file://' + file.path;
        file.contents = new Buffer(juice(file.contents.toString(), options));
        fn(null, file);
    });
};
