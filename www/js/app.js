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
        
    }
};

app.initialize();


function onDeviceReady()
{
    if (navigator.connection.type == Connection.NONE)
    {
        navigator.notification.alert('An internet connection is required to continue');
    }
    else
    {
        window.location="http://dev01.managed-solr.de";
    }
}

document.addEventListener("deviceready", onDeviceReady, false);