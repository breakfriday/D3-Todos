/**
 * Created by dupenghui on 2014/12/4.
 */
define(function(require){
    require("angular")
    var webAppCtrl=angular.module("webApp.controllers",[]);

    var d3TestCtrl=require("controller/module_ctrls/d3Test")
    webAppCtrl.controller({

        d3TestCtrl:d3TestCtrl

    })
    return webAppCtrl
})
