/**
 * Created by dupenghui on 2014/12/3.
 */
var baseRoot="../."

require.config({
    "baseUrl":"./",
    "paths":{
        "cssRoot":baseRoot,
        'jquery':baseRoot+'/libs/jquery-1.7.1.min',
        'angular':baseRoot+'/libs/angular/angular.min',
        'angularRoute':baseRoot+'/libs/angular/angular-route.min',
        "angularSanitize":baseRoot+"/libs/angular/angular-sanitize.min",
        'controller':'script/controller',
        'directive':'script/directive',
        'css':baseRoot+'/libs/require/css',
        'text':baseRoot+'/libs/require/text',
        "D3":baseRoot+'/libs/D3/d3',
        'angularUiRoute':baseRoot+'/libs/angular/angular-ui-router.min'

    },

    "shim":{
        "angular":{
            "deps":["jquery"],
            "exports":"angular"
        },
        "angularSanitize":["angular"],
        'angularRoute': ['angular'],
        'angularUiRoute':["angular"]

    }

});
require(["css!style/home.css"])
require(["angular","script/app","jquery"],function(angular,app){
    angular.element().ready(function(){
        angular.resumeBootstrap([app["name"]]);
    });
});;

