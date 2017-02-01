var Tools = global.load_library('Tools')
var project_model = global.load_model('project_model')

var Project = (function() {
    
    var project = function() {}
    project.prototype = {
    	prepare_folder_name: function($name, $secret)
    	{
    		var crypto = require('crypto');

    		$secret = ($secret)? $secret : '__secret__';
    		return crypto.createHmac('sha256', $secret)
                   .update($name)
                   .digest('hex');
    	},

    	/*
    	|
    	|
    	|
    	| @params
    	- id_clients
    	- project name
    	- 
    	*/
        create: function(event, data, callback){
            console.log(data)
            project_model.insert_project(data)
        	// PREPARE FOLDER NAME
        	// var dirname = this.prepare_folder_name($data.id);
        	// CREATE FOLDER PROJECT
        	// Tools.create_folder({folder: dirname});
        	// Tools.create_folder({folder: 'takayama'});
        	// REQUIRED FILES
        	// []

        },

        delete_project: function(event, data, callback)
        {
            project_model.delete_project(data)
        }
    };
    var nObj = new project();
    return nObj;
})()

module.exports = Project;

