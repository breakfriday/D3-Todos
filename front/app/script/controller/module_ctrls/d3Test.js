/**
 * Created by dupenghui on 2014/12/15.
 */
define(function(require){

        var d3TestCtrl=["$scope","$element",function($scope, element){
        var d3=require("D3")

        var viewModel= d3.select(element[0]).selectAll("p").data([1, 2, 3, 4, 5, 6]).enter()
            viewModel.append("p") .style("border","1px solid red").text(function(d) { return "I’m number " + d + "!"; });

    }]

    return d3TestCtrl
})