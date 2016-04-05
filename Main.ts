///<reference path="MyUser.ts"/>
//declare var $: any;
///<reference path="typings/browser.d.ts"/>

var user = new MyUser('Devlogger');
document.getElementById("greet").innerHTML = user.greet();

//Usando Jquery
$(document).ready(function(){
    $('#greet').hide();
    $( 'button' ).on( 'click', function( event ) {
        $('#greet').show();
    });
});
