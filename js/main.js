/** Main Scripts **/

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
        $("#carousel-datos-aeronave").show();
    } else {
        $("#linkiado").text("Ver Fotos");
        $("#DataAeronaveVideo").show();
        $("#carousel-datos-aeronave").hide();
    }
    return false;
}

function activarDataAeronaveBanner() {
    var slidey = $('.dataaeronave-banner').unslider({
        speed: 1000,               //  The speed to animate each slide (in milliseconds)
        delay: 6000,              //  The delay between slide animations (in milliseconds)
        complete: function () { },  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: false              //  Support responsive design. May break non-responsive designs
    });
}