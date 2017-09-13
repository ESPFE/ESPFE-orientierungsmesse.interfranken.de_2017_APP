/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = {
    initialize: function()
    {
        
    },
    
    bindEvents: function()
    {
        
    },
    
    onDeviceReady: function()
    {
        window.alert(window.location.href);
        window.location="http://dev01.managed-solr.de";
        window.alert(window.location.href);
        //window.location="https://www.edv-peuker.de";
    }
};

app.initialize();



document.addEventListener("deviceready", app.onDeviceReady, false);