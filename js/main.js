$(function () {
    $('.banner').unslider({
        speed: 1000,               //  The speed to animate each slide (in milliseconds)
        delay: 6000,              //  The delay between slide animations (in milliseconds)
        complete: function () { },  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: false              //  Support responsive design. May break non-responsive designs
    });
});

var slidey;
$(function () {
     slidey = $('.dataaeronave-banner').unslider({
        speed: 1000,               //  The speed to animate each slide (in milliseconds)
        delay: 6000,              //  The delay between slide animations (in milliseconds)
        complete: function () { },  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: false              //  Support responsive design. May break non-responsive designs
    });
});

var idElementoActivo = "";
function onClickRadio(val) {
    if (val.id !== idElementoActivo) {
        idElementoActivo = val.id;
    }
    else {
        val.checked = false;
        idElementoActivo = "";
    }
}

function loadTexto(file) {
    $("#mycustomhtml").load(file, function (response, status, xhr) {
        if (status === "error") {
            var msg = "Error: ";
            alert(msg + xhr.status + " " + xhr.statusText);
        }
    });
}

function onClickVerVideo() {
    if ($("#DataAeronaveVideo").is(":visible")) {
        $("#linkiado").text("Ver Video");
        $("#DataAeronaveVideo").hide();
        $("#DataAeronaveBanner").show();
    } else {
        $("#linkiado").text("Ver Fotos");
        $("#DataAeronaveVideo").show();
        $("#DataAeronaveBanner").hide();
    }
    return false;    
}

//$(document).ready(function () {
//    $('#linkiado').click(function () {
//        //$("#DataAeronaveBanner").hide("normal", function () {
//        //    var slidey = $('.dataaeronave-banner').unslider(), data = slidey.data('unslider');
//        //    $("#DataAeronaveVideo").css("display", "block")
//        //});

//        $("#DataAeronaveBanner").hide();
//        $("#DataAeronaveVideo").show();
//    });
//});
