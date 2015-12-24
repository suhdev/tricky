/**
 * @module tricky
 * @description Library
 */
var tricky = (function(){


  /**
   * @member module:tricky~internal
   * @description holds the internal variables of the library
   * @type {object}
   */
  var _I = {};
  /**
   * @property module:tricky~internal.r
   * @description binding regular expression
   * @kind property
   * @type {RegExp}
   */
  _I.r = /([a-zA-Z\[\]\-]+) ?(<?~>?) ?([a-zA-Z$]+[a-zA-Z0-9]*) ?((~>) ?([a-zA-Z$]+[a-zA-Z0-9]*))?/;
  /**
  * @property module:tricky~internal.c
  * @description camel case extraction regular expression
  * @kind property
  * @type {RegExp}
  */
  _I.f = /(^[a-z]|[A-Z])[a-z]+/g;

  _I.classData = {};
  _I.waiting = {};

  _I.instanciated = {};

  function register(type,name,fn,proto,rq){
    _I.classData[name] = fn;
    var k = _I.classData[name];
    k.type = type;
    k.name = name;
    k.prototype = proto;
    k.inject = requires(rq);
  }

  function requires(list){
    var l = [];
    if (list && list.length > 0){
      if (_I.instanciated[list[i]]){
        l.push(_I.instanciated[list[i]]);
      }else if(_I.classData[list[i]] && 
        _I.classData[list[i]].attempted){
        _I.instanciated[list[i]] = _I.instanciated[list[i]];
        l.push(_I.classData[list[i]])
      }
    }
  }

  var _appData = {};  //stores types
  var _plugins = {};
  var _diSingletons = {};
  var _diInstances = [];

  var di = {
    register:function(type,name,fn,proto,requires){
      _appData[name] = ;
      _appData[name] = fn;
      _appData[name].type = type;
      _appData[name].prototype = proto;
      _appData[name].inject = this.require(requires);
    },
    refresh:function(){

    },
    unregister:function(name){

    },
    get:function(name){
      var o = _appData[name];
      if (o.type == 'controller' ||
          o.type == 'directive')
      var a = Object.create(_appData[name].prototype || {});
      _diData[name].apply(a,req);

    },
    getSingleton:function(name){
      var o = _appData[name];
      var a = Object.create(_appData[name].prototype || {});
      _diData[name].apply(a,req);
    },

    require:function(list){
      var l = [];
      for(var i=0;i<list.length;i++){

        l.push(_diSingletons[list[i]] ||
          (_diSingletons[list[i]] = this.getSingleton(list[i])));
      }
      return l;
    },

  };





  var _directives = {};

  var _activeDirectives = {};

  var _activeInjectables = {};

  var _injectables = {};

  var _objects = {};

  var _app = {};

  function inject(){

  };

  function createInjectable(type,name){
    var l = _directives;
    var s = _activeDirectives;
    if (type === 'injectables'){
      l = _injectables;
      s = _activeInjectables;
    }

    var list = [];

    for(var j=0;j<l[name].inject.length;j++){
      var obj = _objects[l[name].inject[j]] ||
      createInjectable(l[name].inject[j]);
      list.push(obj);
    }

    var o = Object.create(l[name].prototype || {});
    l[name].apply(o,list);

    //s[]
  }

  function run(){
    for(var k in _directives){
      $('['+k+']').each(function(){


        this.__t = createInjectable('directive',k);
      });
      _app[k] = _app[k] || {};

    }
  };
  function digest(){

  };
  var _trk = {
    plugin:function(name,fn,p,i){
      var o = Object.create(p||{});
      var req = di.requires(i);
      _plugins[name] = fn.apply(o,req);
    },
    directive:function(name,fn,p,i){
      this._injectable('directive',
        name,fn,p,i);
    },
    service:function(name,fn,p,i){
      this._injectable('service',
      name,fn,p,i);
    },
    controller:function(name,fn,p,i){
      this._injectable('controller',
      name,fn,p,i);
    },
    _injectable:function(type,name,fn,p,i){
      _appClasses[name] = fn;
      _appClasses[name].prototype = p;
      _appClasses[name].type = type;
      _appClasses[name].inject = i;
    },

  };

  return _trk;

})();

tricky.injectable('Element',function(){
  return
});

tricky.directive('tr-controller',function($t,$E){

},['Element']);

tricky.plugin('Mock',function(I,T){
  T.mock.internal = I;
  T.mock.di = di;
},{},['Internal','Tricky']);
