//@ts-nocheck
export default function postcss() {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins.length === 1 && Array.isArray(plugins[0])) {
    plugins = plugins[0];
  }

  return new Processor.default(plugins);
}
postcss.plugin = function plugin(name, initializer) {
  function creator() {
    var transformer = initializer.apply(void 0, arguments);
    transformer.postcssPlugin = name;
    transformer.postcssVersion = new Processor.default().version;
    return transformer;
  }

  var cache;
  Object.defineProperty(creator, 'postcss', {
    get: function get() {
      if (!cache) cache = creator();
      return cache;
    }
  });
}

var Processor =
  /*#__PURE__*/
  function () {
    function Processor(plugins) {
      if (plugins === void 0) {
        plugins = [];
      }
      this.version = '7.0.30';

      this.plugins = this.normalize(plugins);
    }

    var _proto = Processor.prototype;

    _proto.use = function use(plugin) {
      this.plugins = this.plugins.concat(this.normalize([plugin]));
      return this;
    }
      ;
    _proto.process = function (_process) {
      function process(_x) {
        return _process.apply(this, arguments);
      }

      process.toString = function () {
        return _process.toString();
      };

      return process;
    }(function (css, opts) {
      if (opts === void 0) {
        opts = {};
      }

      if (this.plugins.length === 0 && opts.parser === opts.stringifier) {
        if (process.env.NODE_ENV !== 'production') {
          if (typeof console !== 'undefined' && console.warn) {
            console.warn('You did not set any plugins, parser, or stringifier. ' + 'Right now, PostCSS does nothing. Pick plugins for your case ' + 'on https://www.postcss.parts/ and use them in postcss.config.js.');
          }
        }
      }

      return new _lazyResult.default(this, css, opts);
    });

    _proto.normalize = function normalize(plugins) {
      var normalized = [];

      for (var _iterator = plugins, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var i = _ref;
        if (i.postcss) i = i.postcss;

        if (typeof i === 'object' && Array.isArray(i.plugins)) {
          normalized = normalized.concat(i.plugins);
        } else if (typeof i === 'function') {
          normalized.push(i);
        } else if (typeof i === 'object' && (i.parse || i.stringify)) {
          if (process.env.NODE_ENV !== 'production') {
            throw new Error('PostCSS syntaxes cannot be used as plugins. Instead, please use ' + 'one of the syntax/parser/stringifier options as outlined ' + 'in your PostCSS runner documentation.');
          }
        } else {
          throw new Error(i + ' is not a PostCSS plugin');
        }
      }

      return normalized;
    };

    return Processor;
  }();
