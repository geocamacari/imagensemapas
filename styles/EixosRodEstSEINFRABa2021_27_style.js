var size = 0;
var placement = 'point';

var style_EixosRodEstSEINFRABa2021_27 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "11.700000000000001px \'Arial Black\', sans-serif";
    var labelFill = "#900092";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Rodovia") !== null) {
        labelText = String(feature.get("Rodovia"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(115,0,192,0.611764705882353)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.4079999999999995}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
