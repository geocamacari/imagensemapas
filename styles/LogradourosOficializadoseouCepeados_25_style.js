var size = 0;
var placement = 'point';

var style_LogradourosOficializadoseouCepeados_25 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "11.700000000000001px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#fff701";
    var bufferColor = "#000000";
    var bufferWidth = 0.6;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("logradour_") !== null) {
        labelText = String(feature.get("logradour_"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.8)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
