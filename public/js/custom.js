'use strict';
var com = {};

com.actions = {};

$(document).ready(function () {
    com.handlers();
    $("#login").on('click',com.actions.toggleModel);
});

com.handlers = function(){
    
}

com.actions.toggleModel = function(){
    $("#log_in_model").show();
}