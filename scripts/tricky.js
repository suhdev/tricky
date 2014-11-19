var tricky = (function(){
  var r = /([a-zA-Z\[\]\-]+) ?(<?~>?) ?([a-zA-Z$]+[a-zA-Z0-9]*) ?((~>) ?([a-zA-Z$]+[a-zA-Z0-9]*))?/;
  var f = /^[a-z]|[A-Z])[a-z]+/g;

  function updateBindings(){
    for(var i=0;this._bindings 
  }

  var _directives = {};

  var _activeDirectives = {};

  var _activeInjectables = {};

  var _injectables = {};

  var _objects = {};

  var _app = {};

  function inject()

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

    s[]
  }

  function run(){
    for(var k in _directives){
      $('['+k+']').each(function(){


        this.__t = createInjectable('directive',k);
      });
      _app[k] = _app[k] || {};
      _app[k][]
    }
  };
  function digest(){

  };
  return {
    directive:function(name,fn,p,i){
      _directives[name] = fn;
      _directives[name].prototype = p;
      _directives[name].prototype._updateBindings = ;
      _directives[name].inject = i;
    },
    injectable:function(name,fn,p,i){

    },

  };

})();

tricky.injectable('Element',function(){
  return
});

tricky.directive('tr-controller',function($t,$E){

},['Element']);
