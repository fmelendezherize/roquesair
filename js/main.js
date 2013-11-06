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