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
        //window.alert(window.location.href);
        //cordova.InAppBrowser.open('http://dev01.managed-solr.de', '_self', 'location=no,zoom=no');
        //window.alert(window.location.href);
        //window.location="https://www.edv-peuker.de";
        window.location.href = 'http://dev01.managed-solr.de';
    }
};

app.initialize();



document.addEventListener("deviceready", app.onDeviceReady, false);