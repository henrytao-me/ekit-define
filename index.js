////////////////////////////////////////
// general
require('ekit-util');
var config = {

};

////////////////////////////////////////
// main class
var pool = new (Class.extend({

	pool: [],

	clear: function(){

	},

	clearAll: function(){

	},
	
	get: function(def){
		def = !def ? [] : def;
		def = _.isArray(def) ? def : [def];
		if(def.length > 0){
			
		}else{
			// get all data in pool
			
		};
		return 'var main = 2';
	},

	getFuncContent: function(func, separator){
		if(!_.isFunction(func)){
			return '';
		};
		separator = !separator ? ';' : separator;
		res = func.toString();
		return res.slice(res.indexOf("{") + 1, res.lastIndexOf("}")) + separator;
	},

	set: function(def, req, callback){
		// standardlize parameter
		if(!def){
			def = [];
			req = [];
			callback = null;
		};
		if(!req){
			req = [];
			callback = null;
		};
		if(!callback){
			callback = req;
			req = [];
		};
		if(_.isFunction(def) || _.isFunction(req) || !_.isFunction(callback)){
			return false;
		};

		// push to pool
		this.pool.push({
			def: _.isArray(def) ? def : [def],
			req: _.isArray(req) ? req : [req],
			callback: callback
		});
		return true;
	}

}))();

////////////////////////////////////////
// export
var __main__ = function(def, req, callback) { // defines / namespaces, requires, callback 
	return pool.set.apply(pool, arguments);
};
_.each({
	'export': 'get',
	'clear': 'clear',
	'clearAll': 'clearAll'
}, function(value, key){
	__main__[key] = function(){
		return pool[value].apply(pool, arguments);
	};
});
module.exports = __main__;



