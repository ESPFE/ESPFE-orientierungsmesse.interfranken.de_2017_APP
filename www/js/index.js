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
        window.alert('TEST 1');
        window.location="http://dev01.managed-solr.de";
    }
};

app.initialize();



document.addEventListener("deviceready", app.onDeviceReady, false);