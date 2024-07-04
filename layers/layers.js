var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.650000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Ortofoto2022PMC_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto 2022 (PMC)",
                            opacity: 1.000000,
                            
maxResolution:70.0111653806549,

                            minResolution:0.28004466152261964,

                          });
              wms_layers.push([lyr_Ortofoto2022PMC_1, 1]);
var lyr_Ortofoto2017PMC_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto 2017 (PMC)",
                            opacity: 1.000000,
                            
maxResolution:84.0133984567859,

                            minResolution:0.28004466152261964,

                          });
              wms_layers.push([lyr_Ortofoto2017PMC_2, 1]);
var lyr_OrtofotoBDGEx25k2010_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://bdgex.eb.mil.br/mapcache",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortoimagem_scn25",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Ortofoto BDGEx 25k 2010",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofotoBDGEx25k2010_3, 0]);
var lyr_RMS_1998ConderBa_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.conder.ba.gov.br/arcgis/services/MOSAICO/Salvador_1998/ImageServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "RMS_1998 (Conder-Ba)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_RMS_1998ConderBa_4, 1]);
var lyr_SalvadorCamaari_1992ConderBa_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.conder.ba.gov.br/arcgis/services/MOSAICO/Salvador_1992/ImageServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Salvador/Camaçari_1992 (Conder-Ba)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SalvadorCamaari_1992ConderBa_5, 1]);

        var lyr_ESRITOPO_6 = new ol.layer.Tile({
            'title': 'ESRI TOPO',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_WazeWorld_7 = new ol.layer.Tile({
            'title': 'Waze (World)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_8 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_MapbiomasCollection2022_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://azure.solved.eco.br:8080/geoserver/solved/wms?%26transparent%3Dtrue%26tiled%3Dtrue%26version%3D1.1.1%26crs%3DEPSG%3A4326%26LAYERS%3Dmapbiomas_amazon_2022%2Cmapbiomas_atlantic_forest_2022%2Cmapbiomas_brazil_2022%2Cmapbiomas_chaco_2022%2Cmapbiomas_colombia_2022%2Cmapbiomas_ecuador_2022%2Cmapbiomas_indonesia_2022%2Cmapbiomas_pampa_2022%2Cmapbiomas_peru_2022%2Cmapbiomas_venezuela_2022%2Cmapbiomas_uruguay_2022%26exceptions%3Dapplication/vnd.ogc.se_inimage%26env%3Damazon_1%3A1f8d49%3Bamazon_1_o%3A1%3Bamazon_3%3A1f8d49%3Bamazon_3_o%3A1%3Bamazon_4%3A1f8d49%3Bamazon_4_o%3A1%3Bamazon_5%3A1f8d49%3Bamazon_5_o%3A1%3Bamazon_6%3A1f8d49%3Bamazon_6_o%3A1%3Bamazon_10%3Ad6bc74%3Bamazon_10_o%3A1%3Bamazon_11%3Ad6bc74%3Bamazon_11_o%3A1%3Bamazon_12%3Ad6bc74%3Bamazon_12_o%3A1%3Bamazon_29%3Ad6bc74%3Bamazon_29_o%3A1%3Bamazon_13%3Ad6bc74%3Bamazon_13_o%3A1%3Bamazon_14%3Affefc3%3Bamazon_14_o%3A1%3Bamazon_15%3Affefc3%3Bamazon_15_o%3A1%3Bamazon_18%3Affefc3%3Bamazon_18_o%3A1%3Bamazon_9%3Affefc3%3Bamazon_9_o%3A1%3Bamazon_35%3Affefc3%3Bamazon_35_o%3A1%3Bamazon_21%3Affefc3%3Bamazon_21_o%3A1%3Bamazon_22%3Ad4271e%3Bamazon_22_o%3A1%3Bamazon_23%3Ad4271e%3Bamazon_23_o%3A1%3Bamazon_24%3Ad4271e%3Bamazon_24_o%3A1%3Bamazon_30%3Ad4271e%3Bamazon_30_o%3A1%3Bamazon_25%3Ad4271e%3Bamazon_25_o%3A1%3Bamazon_26%3A2532e4%3Bamazon_26_o%3A1%3Bamazon_33%3A2532e4%3Bamazon_33_o%3A1%3Bamazon_34%3A2532e4%3Bamazon_34_o%3A1%3Bamazon_27%3Affffff%3Bamazon_27_o%3A1%3Batlantic_forest_1%3A1f8d49%3Batlantic_forest_1_o%3A1%3Batlantic_forest_3%3A1f8d49%3Batlantic_forest_3_o%3A1%3Batlantic_forest_4%3A1f8d49%3Batlantic_forest_4_o%3A1%3Batlantic_forest_5%3A1f8d49%3Batlantic_forest_5_o%3A1%3Batlantic_forest_49%3A1f8d49%3Batlantic_forest_49_o%3A1%3Batlantic_forest_10%3Ad6bc74%3Batlantic_forest_10_o%3A1%3Batlantic_forest_11%3Ad6bc74%3Batlantic_forest_11_o%3A1%3Batlantic_forest_12%3Ad6bc74%3Batlantic_forest_12_o%3A1%3Batlantic_forest_32%3Ad6bc74%3Batlantic_forest_32_o%3A1%3Batlantic_forest_29%3Ad6bc74%3Batlantic_forest_29_o%3A1%3Batlantic_forest_50%3Ad6bc74%3Batlantic_forest_50_o%3A1%3Batlantic_forest_13%3Ad6bc74%3Batlantic_forest_13_o%3A1%3Batlantic_forest_14%3Affefc3%3Batlantic_forest_14_o%3A1%3Batlantic_forest_15%3Affefc3%3Batlantic_forest_15_o%3A1%3Batlantic_forest_18%3Affefc3%3Batlantic_forest_18_o%3A1%3Batlantic_forest_19%3Affefc3%3Batlantic_forest_19_o%3A1%3Batlantic_forest_36%3Affefc3%3Batlantic_forest_36_o%3A1%3Batlantic_forest_65%3Affefc3%3Batlantic_forest_65_o%3A1%3Batlantic_forest_46%3Affefc3%3Batlantic_forest_46_o%3A1%3Batlantic_forest_48%3Affefc3%3Batlantic_forest_48_o%3A1%3Batlantic_forest_9%3Affefc3%3Batlantic_forest_9_o%3A1%3Batlantic_forest_21%3Affefc3%3Batlantic_forest_21_o%3A1%3Batlantic_forest_22%3Ad4271e%3Batlantic_forest_22_o%3A1%3Batlantic_forest_26%3A2532e4%3Batlantic_forest_26_o%3A1%3Batlantic_forest_33%3A2532e4%3Batlantic_forest_33_o%3A1%3Batlantic_forest_37%3A2532e4%3Batlantic_forest_37_o%3A1%3Batlantic_forest_27%3Affffff%3Batlantic_forest_27_o%3A1%3Bbrazil_1%3A32a65e%3Bbrazil_1_o%3A1%3Bbrazil_3%3A32a65e%3Bbrazil_3_o%3A1%3Bbrazil_4%3A32a65e%3Bbrazil_4_o%3A1%3Bbrazil_5%3A32a65e%3Bbrazil_5_o%3A1%3Bbrazil_6%3A32a65e%3Bbrazil_6_o%3A1%3Bbrazil_49%3A32a65e%3Bbrazil_49_o%3A1%3Bbrazil_10%3Aad975a%3Bbrazil_10_o%3A1%3Bbrazil_11%3Aad975a%3Bbrazil_11_o%3A1%3Bbrazil_12%3Aad975a%3Bbrazil_12_o%3A1%3Bbrazil_32%3Aad975a%3Bbrazil_32_o%3A1%3Bbrazil_29%3Aad975a%3Bbrazil_29_o%3A1%3Bbrazil_50%3Aad975a%3Bbrazil_50_o%3A1%3Bbrazil_13%3Aad975a%3Bbrazil_13_o%3A1%3Bbrazil_14%3AFFFFB2%3Bbrazil_14_o%3A1%3Bbrazil_15%3AFFFFB2%3Bbrazil_15_o%3A1%3Bbrazil_18%3AFFFFB2%3Bbrazil_18_o%3A1%3Bbrazil_19%3AFFFFB2%3Bbrazil_19_o%3A1%3Bbrazil_39%3AFFFFB2%3Bbrazil_39_o%3A1%3Bbrazil_20%3AFFFFB2%3Bbrazil_20_o%3A1%3Bbrazil_40%3AFFFFB2%3Bbrazil_40_o%3A1%3Bbrazil_62%3AFFFFB2%3Bbrazil_62_o%3A1%3Bbrazil_41%3AFFFFB2%3Bbrazil_41_o%3A1%3Bbrazil_36%3AFFFFB2%3Bbrazil_36_o%3A1%3Bbrazil_46%3AFFFFB2%3Bbrazil_46_o%3A1%3Bbrazil_47%3AFFFFB2%3Bbrazil_47_o%3A1%3Bbrazil_35%3AFFFFB2%3Bbrazil_35_o%3A1%3Bbrazil_48%3AFFFFB2%3Bbrazil_48_o%3A1%3Bbrazil_9%3AFFFFB2%3Bbrazil_9_o%3A1%3Bbrazil_21%3AFFFFB2%3Bbrazil_21_o%3A1%3Bbrazil_22%3Ad4271e%3Bbrazil_22_o%3A1%3Bbrazil_23%3Ad4271e%3Bbrazil_23_o%3A1%3Bbrazil_24%3Ad4271e%3Bbrazil_24_o%3A1%3Bbrazil_30%3Ad4271e%3Bbrazil_30_o%3A1%3Bbrazil_25%3Ad4271e%3Bbrazil_25_o%3A1%3Bbrazil_26%3A0000FF%3Bbrazil_26_o%3A1%3Bbrazil_33%3A0000FF%3Bbrazil_33_o%3A1%3Bbrazil_31%3A0000FF%3Bbrazil_31_o%3A1%3Bbrazil_27%3Affffff%3Bbrazil_27_o%3A1%3Bchaco_1%3A1F4423%3Bchaco_1_o%3A1%3Bchaco_3%3A1F4423%3Bchaco_3_o%3A1%3Bchaco_4%3A1F4423%3Bchaco_4_o%3A1%3Bchaco_45%3A1F4423%3Bchaco_45_o%3A1%3Bchaco_6%3A1F4423%3Bchaco_6_o%3A1%3Bchaco_10%3ABBFCAC%3Bchaco_10_o%3A1%3Bchaco_12%3ABBFCAC%3Bchaco_12_o%3A1%3Bchaco_42%3ABBFCAC%3Bchaco_42_o%3A1%3Bchaco_43%3ABBFCAC%3Bchaco_43_o%3A1%3Bchaco_44%3ABBFCAC%3Bchaco_44_o%3A1%3Bchaco_11%3ABBFCAC%3Bchaco_11_o%3A1%3Bchaco_14%3AFFFFB2%3Bchaco_14_o%3A1%3Bchaco_15%3AFFFFB2%3Bchaco_15_o%3A1%3Bchaco_18%3AFFFFB2%3Bchaco_18_o%3A1%3Bchaco_19%3AFFFFB2%3Bchaco_19_o%3A1%3Bchaco_57%3AFFFFB2%3Bchaco_57_o%3A1%3Bchaco_58%3AFFFFB2%3Bchaco_58_o%3A1%3Bchaco_36%3AFFFFB2%3Bchaco_36_o%3A1%3Bchaco_9%3AFFFFB2%3Bchaco_9_o%3A1%3Bchaco_22%3AEA9999%3Bchaco_22_o%3A1%3Bchaco_26%3A0000FF%3Bchaco_26_o%3A1%3Bchaco_27%3AD5D5E5%3Bchaco_27_o%3A1%3Bcolombia_1%3A1f8d49%3Bcolombia_1_o%3A1%3Bcolombia_3%3A1f8d49%3Bcolombia_3_o%3A1%3Bcolombia_5%3A1f8d49%3Bcolombia_5_o%3A1%3Bcolombia_6%3A1f8d49%3Bcolombia_6_o%3A1%3Bcolombia_49%3A1f8d49%3Bcolombia_49_o%3A1%3Bcolombia_10%3Ad6bc74%3Bcolombia_10_o%3A1%3Bcolombia_11%3Ad6bc74%3Bcolombia_11_o%3A1%3Bcolombia_12%3Ad6bc74%3Bcolombia_12_o%3A1%3Bcolombia_32%3Ad6bc74%3Bcolombia_32_o%3A1%3Bcolombia_29%3Ad6bc74%3Bcolombia_29_o%3A1%3Bcolombia_50%3Ad6bc74%3Bcolombia_50_o%3A1%3Bcolombia_13%3Ad6bc74%3Bcolombia_13_o%3A1%3Bcolombia_14%3AffefB2%3Bcolombia_14_o%3A1%3Bcolombia_9%3AffefB2%3Bcolombia_9_o%3A1%3Bcolombia_35%3AffefB2%3Bcolombia_35_o%3A1%3Bcolombia_21%3AffefB2%3Bcolombia_21_o%3A1%3Bcolombia_22%3Ad4271e%3Bcolombia_22_o%3A1%3Bcolombia_23%3Ad4271e%3Bcolombia_23_o%3A1%3Bcolombia_24%3Ad4271e%3Bcolombia_24_o%3A1%3Bcolombia_30%3Ad4271e%3Bcolombia_30_o%3A1%3Bcolombia_25%3Ad4271e%3Bcolombia_25_o%3A1%3Bcolombia_26%3A2532e4%3Bcolombia_26_o%3A1%3Bcolombia_33%3A2532e4%3Bcolombia_33_o%3A1%3Bcolombia_31%3A2532e4%3Bcolombia_31_o%3A1%3Bcolombia_34%3A2532e4%3Bcolombia_34_o%3A1%3Bcolombia_27%3Affffff%3Bcolombia_27_o%3A1%3Becuador_1%3A32a65e%3Becuador_1_o%3A1%3Becuador_3%3A32a65e%3Becuador_3_o%3A1%3Becuador_4%3A32a65e%3Becuador_4_o%3A1%3Becuador_5%3A32a65e%3Becuador_5_o%3A1%3Becuador_6%3A32a65e%3Becuador_6_o%3A1%3Becuador_10%3Aad975a%3Becuador_10_o%3A1%3Becuador_11%3Aad975a%3Becuador_11_o%3A1%3Becuador_12%3Aad975a%3Becuador_12_o%3A1%3Becuador_29%3Aad975a%3Becuador_29_o%3A1%3Becuador_13%3Aad975a%3Becuador_13_o%3A1%3Becuador_14%3AFFFFB2%3Becuador_14_o%3A1%3Becuador_9%3AFFFFB2%3Becuador_9_o%3A1%3Becuador_21%3AFFFFB2%3Becuador_21_o%3A1%3Becuador_22%3Ad4271e%3Becuador_22_o%3A1%3Becuador_30%3Ad4271e%3Becuador_30_o%3A1%3Becuador_25%3Ad4271e%3Becuador_25_o%3A1%3Becuador_26%3A0000FF%3Becuador_26_o%3A1%3Becuador_33%3A0000FF%3Becuador_33_o%3A1%3Becuador_34%3A0000FF%3Becuador_34_o%3A1%3Becuador_31%3A0000FF%3Becuador_31_o%3A1%3Becuador_27%3Affffff%3Becuador_27_o%3A1%3Bindonesia_1%3A1f8d49%3Bindonesia_1_o%3A1%3Bindonesia_3%3A1f8d49%3Bindonesia_3_o%3A1%3Bindonesia_5%3A1f8d49%3Bindonesia_5_o%3A1%3Bindonesia_10%3Ad6bc74%3Bindonesia_10_o%3A1%3Bindonesia_13%3Ad6bc74%3Bindonesia_13_o%3A1%3Bindonesia_18%3AE974ED%3Bindonesia_18_o%3A1%3Bindonesia_40%3AE974ED%3Bindonesia_40_o%3A1%3Bindonesia_35%3AE974ED%3Bindonesia_35_o%3A1%3Bindonesia_9%3AE974ED%3Bindonesia_9_o%3A1%3Bindonesia_21%3AE974ED%3Bindonesia_21_o%3A1%3Bindonesia_22%3Ad4271e%3Bindonesia_22_o%3A1%3Bindonesia_30%3Ad4271e%3Bindonesia_30_o%3A1%3Bindonesia_25%3Ad4271e%3Bindonesia_25_o%3A1%3Bindonesia_26%3A2532e4%3Bindonesia_26_o%3A1%3Bindonesia_31%3A2532e4%3Bindonesia_31_o%3A1%3Bindonesia_33%3A2532e4%3Bindonesia_33_o%3A1%3Bindonesia_27%3Affffff%3Bindonesia_27_o%3A1%3Bpampa_1%3A1f8d49%3Bpampa_1_o%3A1%3Bpampa_3%3A1f8d49%3Bpampa_3_o%3A1%3Bpampa_4%3A1f8d49%3Bpampa_4_o%3A1%3Bpampa_10%3Ad6bc74%3Bpampa_10_o%3A1%3Bpampa_11%3Ad6bc74%3Bpampa_11_o%3A1%3Bpampa_12%3Ad6bc74%3Bpampa_12_o%3A1%3Bpampa_14%3Affefc3%3Bpampa_14_o%3A1%3Bpampa_15%3Affefc3%3Bpampa_15_o%3A1%3Bpampa_9%3Affefc3%3Bpampa_9_o%3A1%3Bpampa_22%3Ad4271e%3Bpampa_22_o%3A1%3Bpampa_26%3A2532e4%3Bpampa_26_o%3A1%3Bpampa_33%3A2532e4%3Bpampa_33_o%3A1%3Bpampa_27%3Affffff%3Bpampa_27_o%3A1%3Bperu_1%3A129912%3Bperu_1_o%3A1%3Bperu_3%3A129912%3Bperu_3_o%3A1%3Bperu_4%3A129912%3Bperu_4_o%3A1%3Bperu_5%3A129912%3Bperu_5_o%3A1%3Bperu_6%3A129912%3Bperu_6_o%3A1%3Bperu_10%3Abbfcac%3Bperu_10_o%3A1%3Bperu_11%3Abbfcac%3Bperu_11_o%3A1%3Bperu_12%3Abbfcac%3Bperu_12_o%3A1%3Bperu_13%3Abbfcac%3Bperu_13_o%3A1%3Bperu_14%3AFFFFB2%3Bperu_14_o%3A1%3Bperu_15%3AFFFFB2%3Bperu_15_o%3A1%3Bperu_18%3AFFFFB2%3Bperu_18_o%3A1%3Bperu_22%3AEA9999%3Bperu_22_o%3A1%3Bperu_24%3AEA9999%3Bperu_24_o%3A1%3Bperu_30%3AEA9999%3Bperu_30_o%3A1%3Bperu_25%3AEA9999%3Bperu_25_o%3A1%3Bperu_26%3A0000FF%3Bperu_26_o%3A1%3Bperu_33%3A0000FF%3Bperu_33_o%3A1%3Bperu_34%3A0000FF%3Bperu_34_o%3A1%3Bperu_27%3Ad5d5e5%3Bperu_27_o%3A1%3Bvenezuela_1%3A1f8d49%3Bvenezuela_1_o%3A1%3Bvenezuela_3%3A1f8d49%3Bvenezuela_3_o%3A1%3Bvenezuela_4%3A1f8d49%3Bvenezuela_4_o%3A1%3Bvenezuela_5%3A1f8d49%3Bvenezuela_5_o%3A1%3Bvenezuela_6%3A1f8d49%3Bvenezuela_6_o%3A1%3Bvenezuela_10%3Ad6bc74%3Bvenezuela_10_o%3A1%3Bvenezuela_11%3Ad6bc74%3Bvenezuela_11_o%3A1%3Bvenezuela_12%3Ad6bc74%3Bvenezuela_12_o%3A1%3Bvenezuela_29%3Ad6bc74%3Bvenezuela_29_o%3A1%3Bvenezuela_32%3Ad6bc74%3Bvenezuela_32_o%3A1%3Bvenezuela_50%3Ad6bc74%3Bvenezuela_50_o%3A1%3Bvenezuela_13%3Ad6bc74%3Bvenezuela_13_o%3A1%3Bvenezuela_14%3Affefc3%3Bvenezuela_14_o%3A1%3Bvenezuela_15%3Affefc3%3Bvenezuela_15_o%3A1%3Bvenezuela_18%3Affefc3%3Bvenezuela_18_o%3A1%3Bvenezuela_9%3Affefc3%3Bvenezuela_9_o%3A1%3Bvenezuela_21%3Affefc3%3Bvenezuela_21_o%3A1%3Bvenezuela_22%3Ad4271e%3Bvenezuela_22_o%3A1%3Bvenezuela_23%3Ad4271e%3Bvenezuela_23_o%3A1%3Bvenezuela_24%3Ad4271e%3Bvenezuela_24_o%3A1%3Bvenezuela_30%3Ad4271e%3Bvenezuela_30_o%3A1%3Bvenezuela_25%3Ad4271e%3Bvenezuela_25_o%3A1%3Bvenezuela_26%3A2532e4%3Bvenezuela_26_o%3A1%3Bvenezuela_33%3A2532e4%3Bvenezuela_33_o%3A1%3Bvenezuela_31%3A2532e4%3Bvenezuela_31_o%3A1%3Bvenezuela_27%3Affffff%3Bvenezuela_27_o%3A1%3Buruguay_1%3A1f8d49%3Buruguay_1_o%3A1%3Buruguay_3%3A1f8d49%3Buruguay_3_o%3A1%3Buruguay_10%3Ad6bc74%3Buruguay_10_o%3A1%3Buruguay_11%3Ad6bc74%3Buruguay_11_o%3A1%3Buruguay_12%3Ad6bc74%3Buruguay_12_o%3A1%3Buruguay_14%3Affefc3%3Buruguay_14_o%3A1%3Buruguay_15%3Affefc3%3Buruguay_15_o%3A1%3Buruguay_9%3Affefc3%3Buruguay_9_o%3A1%3Buruguay_22%3Ad4271e%3Buruguay_22_o%3A1%3Buruguay_26%3A2532e4%3Buruguay_26_o%3A1%3Buruguay_33%3A2532e4%3Buruguay_33_o%3A1%3Buruguay_27%3Affffff%3Buruguay_27_o%3A1%3B",
    attributions: ' ',
                              params: {
                                "LAYERS": "mapbiomas_amazon_2022",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Mapbiomas Collection - 2022",
                            opacity: 0.700000,
                            
                            
                          });
              wms_layers.push([lyr_MapbiomasCollection2022_9, 1]);
var lyr_MapaBDGExSEIBa25k_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://bdgex.eb.mil.br/mapcache",
    attributions: ' ',
                              params: {
                                "LAYERS": "ctm25",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Mapa BDGEx / SEI-Ba 25k",
                            opacity: 0.700000,
                            
maxResolution:84.0133984567859,

                            minResolution:0.5600893230452393,

                          });
              wms_layers.push([lyr_MapaBDGExSEIBa25k_10, 1]);
var lyr_MalhadeLotesGeomais_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "lote_inscricao_geometria",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Malha de Lotes (Geomais)",
                            opacity: 0.500000,
                            
maxResolution:70.0111653806549,

                            minResolution:0.28004466152261964,

                          });
              wms_layers.push([lyr_MalhadeLotesGeomais_11, 1]);
var lyr_UnidadesImobiliriasGeomais_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "unidade_inscricao_geometria",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Unidades Imobiliárias (Geomais)",
                            opacity: 0.500000,
                            
maxResolution:70.0111653806549,

                            minResolution:0.28004466152261964,

                          });
              wms_layers.push([lyr_UnidadesImobiliriasGeomais_12, 1]);
var lyr_reasdeQuilombolasInemaINCRA_13 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserver.inema.ba.gov.br/Vetor_Recursos_Ambientais/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "quilomb_incra_2020",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Áreas de Quilombolas (Inema/INCRA)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_reasdeQuilombolasInemaINCRA_13, 1]);
var lyr_ImvelRuralLimitesInemaINCRA_14 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserver.inema.ba.gov.br/wms?version%3D1.1.1%26layers%3DVetor_Recursos_Ambientais:uc_inema_2023%26transparent%3Dtrue%26tiled%3Dtrue",
    attributions: ' ',
                              params: {
                                "LAYERS": "Vetor_Recortes_Tematicos:cefir_imovel_rural_limite_inema",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Imóvel Rural - Limites (Inema/INCRA)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ImvelRuralLimitesInemaINCRA_14, 1]);
var lyr_LimitesdeAssentamentosInemaINCRA_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserver.inema.ba.gov.br/wms?version%3D1.1.1%26layers%3DVetor_Recursos_Ambientais:uc_inema_2023%26transparent%3Dtrue%26tiled%3Dtrue",
    attributions: ' ',
                              params: {
                                "LAYERS": "Vetor_Recortes_Tematicos:cefir_assentamento_limite_inema",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Limites de Assentamentos (Inema/INCRA)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LimitesdeAssentamentosInemaINCRA_15, 1]);
var lyr_ProcessosminerriosativosANM_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geo.anm.gov.br/arcgis/services/SIGMINE/dados_anm/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "4",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Processos minerários ativos (ANM)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ProcessosminerriosativosANM_16, 1]);

        var lyr_EsriBoundariesandPlaces_17 = new ol.layer.Tile({
            'title': 'Esri Boundaries and Places',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleTraffic_18 = new ol.layer.Tile({
            'title': 'Google Traffic',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_19 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var lyr_Curvas_de_nivel_intermediariaGeomais_20 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "st_curvas_de_nivel_intermediaria",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Curvas_de_nivel_intermediaria (Geomais)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Curvas_de_nivel_intermediariaGeomais_20, 1]);
var lyr_Curvas_de_nivel_mestraGeomais_21 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "st_curvas_de_nivel_mestra",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Curvas_de_nivel_mestra (Geomais)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Curvas_de_nivel_mestraGeomais_21, 1]);
var format_reasmidasVeredasPMSBCamaari_22 = new ol.format.GeoJSON();
var features_reasmidasVeredasPMSBCamaari_22 = format_reasmidasVeredasPMSBCamaari_22.readFeatures(json_reasmidasVeredasPMSBCamaari_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasmidasVeredasPMSBCamaari_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasmidasVeredasPMSBCamaari_22.addFeatures(features_reasmidasVeredasPMSBCamaari_22);
var lyr_reasmidasVeredasPMSBCamaari_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasmidasVeredasPMSBCamaari_22,
maxResolution:56.00893230452392,
 minResolution:0.5600893230452393,

                style: style_reasmidasVeredasPMSBCamaari_22,
                popuplayertitle: "Áreas Úmidas/Veredas (PMSB - Camaçari)",
                interactive: true,
                title: '<img src="styles/legend/reasmidasVeredasPMSBCamaari_22.png" /> Áreas Úmidas/Veredas (PMSB - Camaçari)'
            });
var format_Trecho_Massa_DaguaConder2010_23 = new ol.format.GeoJSON();
var features_Trecho_Massa_DaguaConder2010_23 = format_Trecho_Massa_DaguaConder2010_23.readFeatures(json_Trecho_Massa_DaguaConder2010_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trecho_Massa_DaguaConder2010_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trecho_Massa_DaguaConder2010_23.addFeatures(features_Trecho_Massa_DaguaConder2010_23);
var lyr_Trecho_Massa_DaguaConder2010_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trecho_Massa_DaguaConder2010_23,
maxResolution:84.0133984567859,
 minResolution:0.5600893230452393,

                style: style_Trecho_Massa_DaguaConder2010_23,
                popuplayertitle: "Trecho_Massa_Dagua (Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/Trecho_Massa_DaguaConder2010_23.png" /> Trecho_Massa_Dagua (Conder 2010)'
            });
var format_Massa_DaguaConder2010_24 = new ol.format.GeoJSON();
var features_Massa_DaguaConder2010_24 = format_Massa_DaguaConder2010_24.readFeatures(json_Massa_DaguaConder2010_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Massa_DaguaConder2010_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Massa_DaguaConder2010_24.addFeatures(features_Massa_DaguaConder2010_24);
var lyr_Massa_DaguaConder2010_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Massa_DaguaConder2010_24,
maxResolution:84.0133984567859,
 minResolution:0.5600893230452393,

                style: style_Massa_DaguaConder2010_24,
                popuplayertitle: "Massa_Dagua (Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/Massa_DaguaConder2010_24.png" /> Massa_Dagua (Conder 2010)'
            });
var format_LogradourosOficializadoseouCepeados_25 = new ol.format.GeoJSON();
var features_LogradourosOficializadoseouCepeados_25 = format_LogradourosOficializadoseouCepeados_25.readFeatures(json_LogradourosOficializadoseouCepeados_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LogradourosOficializadoseouCepeados_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LogradourosOficializadoseouCepeados_25.addFeatures(features_LogradourosOficializadoseouCepeados_25);
var lyr_LogradourosOficializadoseouCepeados_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LogradourosOficializadoseouCepeados_25,
maxResolution:56.00893230452392,
 minResolution:0.42006699228392946,

                style: style_LogradourosOficializadoseouCepeados_25,
                popuplayertitle: "Logradouros Oficializados e/ou Cepeados",
                interactive: true,
                title: '<img src="styles/legend/LogradourosOficializadoseouCepeados_25.png" /> Logradouros Oficializados e/ou Cepeados'
            });
var format_LinhaFrreaFCA_26 = new ol.format.GeoJSON();
var features_LinhaFrreaFCA_26 = format_LinhaFrreaFCA_26.readFeatures(json_LinhaFrreaFCA_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaFrreaFCA_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaFrreaFCA_26.addFeatures(features_LinhaFrreaFCA_26);
var lyr_LinhaFrreaFCA_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaFrreaFCA_26, 
                style: style_LinhaFrreaFCA_26,
                popuplayertitle: "Linha Férrea (FCA)",
                interactive: true,
                title: '<img src="styles/legend/LinhaFrreaFCA_26.png" /> Linha Férrea (FCA)'
            });
var format_EixosRodEstSEINFRABa2021_27 = new ol.format.GeoJSON();
var features_EixosRodEstSEINFRABa2021_27 = format_EixosRodEstSEINFRABa2021_27.readFeatures(json_EixosRodEstSEINFRABa2021_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EixosRodEstSEINFRABa2021_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EixosRodEstSEINFRABa2021_27.addFeatures(features_EixosRodEstSEINFRABa2021_27);
var lyr_EixosRodEstSEINFRABa2021_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EixosRodEstSEINFRABa2021_27, 
                style: style_EixosRodEstSEINFRABa2021_27,
                popuplayertitle: "Eixos Rod. Est. (SEINFRA-Ba/2021)",
                interactive: true,
                title: '<img src="styles/legend/EixosRodEstSEINFRABa2021_27.png" /> Eixos Rod. Est. (SEINFRA-Ba/2021)'
            });
var format_PontosdeRefernciadiversos2023_28 = new ol.format.GeoJSON();
var features_PontosdeRefernciadiversos2023_28 = format_PontosdeRefernciadiversos2023_28.readFeatures(json_PontosdeRefernciadiversos2023_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosdeRefernciadiversos2023_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosdeRefernciadiversos2023_28.addFeatures(features_PontosdeRefernciadiversos2023_28);cluster_PontosdeRefernciadiversos2023_28 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PontosdeRefernciadiversos2023_28
});
var lyr_PontosdeRefernciadiversos2023_28 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PontosdeRefernciadiversos2023_28,
maxResolution:14.00223307613098,
 minResolution:0.28004466152261964,

                style: style_PontosdeRefernciadiversos2023_28,
                popuplayertitle: "Pontos de Referência diversos (2023)",
                interactive: true,
                title: '<img src="styles/legend/PontosdeRefernciadiversos2023_28.png" /> Pontos de Referência diversos (2023)'
            });
var format_Localidadesdiversas2023_29 = new ol.format.GeoJSON();
var features_Localidadesdiversas2023_29 = format_Localidadesdiversas2023_29.readFeatures(json_Localidadesdiversas2023_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidadesdiversas2023_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidadesdiversas2023_29.addFeatures(features_Localidadesdiversas2023_29);
var lyr_Localidadesdiversas2023_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidadesdiversas2023_29,
maxResolution:28.00446615226196,
 minResolution:0.5600893230452393,

                style: style_Localidadesdiversas2023_29,
                popuplayertitle: "Localidades diversas (2023)",
                interactive: true,
                title: '<img src="styles/legend/Localidadesdiversas2023_29.png" /> Localidades diversas (2023)'
            });
var format_DistritosMunicipais2020_30 = new ol.format.GeoJSON();
var features_DistritosMunicipais2020_30 = format_DistritosMunicipais2020_30.readFeatures(json_DistritosMunicipais2020_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosMunicipais2020_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosMunicipais2020_30.addFeatures(features_DistritosMunicipais2020_30);
var lyr_DistritosMunicipais2020_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistritosMunicipais2020_30,
maxResolution:84.0133984567859,
 minResolution:14.00223307613098,

                style: style_DistritosMunicipais2020_30,
                popuplayertitle: "Distritos Municipais (2020)",
                interactive: true,
                title: '<img src="styles/legend/DistritosMunicipais2020_30.png" /> Distritos Municipais (2020)'
            });
var format_LimitesMunicipais2020_31 = new ol.format.GeoJSON();
var features_LimitesMunicipais2020_31 = format_LimitesMunicipais2020_31.readFeatures(json_LimitesMunicipais2020_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMunicipais2020_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicipais2020_31.addFeatures(features_LimitesMunicipais2020_31);
var lyr_LimitesMunicipais2020_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicipais2020_31, 
                style: style_LimitesMunicipais2020_31,
                popuplayertitle: "Limites Municipais (2020)",
                interactive: true,
                title: '<img src="styles/legend/LimitesMunicipais2020_31.png" /> Limites Municipais (2020)'
            });
var format_LimitesMunicpiosRMS2020_32 = new ol.format.GeoJSON();
var features_LimitesMunicpiosRMS2020_32 = format_LimitesMunicpiosRMS2020_32.readFeatures(json_LimitesMunicpiosRMS2020_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMunicpiosRMS2020_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicpiosRMS2020_32.addFeatures(features_LimitesMunicpiosRMS2020_32);
var lyr_LimitesMunicpiosRMS2020_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicpiosRMS2020_32, 
                style: style_LimitesMunicpiosRMS2020_32,
                popuplayertitle: "Limites Municípios/RMS (2020)",
                interactive: true,
                title: '<img src="styles/legend/LimitesMunicpiosRMS2020_32.png" /> Limites Municípios/RMS (2020)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Ortofoto2022PMC_1.setVisible(false);lyr_Ortofoto2017PMC_2.setVisible(false);lyr_OrtofotoBDGEx25k2010_3.setVisible(false);lyr_RMS_1998ConderBa_4.setVisible(false);lyr_SalvadorCamaari_1992ConderBa_5.setVisible(false);lyr_ESRITOPO_6.setVisible(false);lyr_WazeWorld_7.setVisible(false);lyr_OSMStandard_8.setVisible(false);lyr_MapbiomasCollection2022_9.setVisible(false);lyr_MapaBDGExSEIBa25k_10.setVisible(false);lyr_MalhadeLotesGeomais_11.setVisible(false);lyr_UnidadesImobiliriasGeomais_12.setVisible(false);lyr_reasdeQuilombolasInemaINCRA_13.setVisible(false);lyr_ImvelRuralLimitesInemaINCRA_14.setVisible(false);lyr_LimitesdeAssentamentosInemaINCRA_15.setVisible(false);lyr_ProcessosminerriosativosANM_16.setVisible(false);lyr_EsriBoundariesandPlaces_17.setVisible(true);lyr_GoogleTraffic_18.setVisible(false);lyr_GoogleLabels_19.setVisible(false);lyr_Curvas_de_nivel_intermediariaGeomais_20.setVisible(false);lyr_Curvas_de_nivel_mestraGeomais_21.setVisible(false);lyr_reasmidasVeredasPMSBCamaari_22.setVisible(false);lyr_Trecho_Massa_DaguaConder2010_23.setVisible(true);lyr_Massa_DaguaConder2010_24.setVisible(true);lyr_LogradourosOficializadoseouCepeados_25.setVisible(false);lyr_LinhaFrreaFCA_26.setVisible(true);lyr_EixosRodEstSEINFRABa2021_27.setVisible(true);lyr_PontosdeRefernciadiversos2023_28.setVisible(false);lyr_Localidadesdiversas2023_29.setVisible(true);lyr_DistritosMunicipais2020_30.setVisible(false);lyr_LimitesMunicipais2020_31.setVisible(false);lyr_LimitesMunicpiosRMS2020_32.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Ortofoto2022PMC_1,lyr_Ortofoto2017PMC_2,lyr_OrtofotoBDGEx25k2010_3,lyr_RMS_1998ConderBa_4,lyr_SalvadorCamaari_1992ConderBa_5,lyr_ESRITOPO_6,lyr_WazeWorld_7,lyr_OSMStandard_8,lyr_MapbiomasCollection2022_9,lyr_MapaBDGExSEIBa25k_10,lyr_MalhadeLotesGeomais_11,lyr_UnidadesImobiliriasGeomais_12,lyr_reasdeQuilombolasInemaINCRA_13,lyr_ImvelRuralLimitesInemaINCRA_14,lyr_LimitesdeAssentamentosInemaINCRA_15,lyr_ProcessosminerriosativosANM_16,lyr_EsriBoundariesandPlaces_17,lyr_GoogleTraffic_18,lyr_GoogleLabels_19,lyr_Curvas_de_nivel_intermediariaGeomais_20,lyr_Curvas_de_nivel_mestraGeomais_21,lyr_reasmidasVeredasPMSBCamaari_22,lyr_Trecho_Massa_DaguaConder2010_23,lyr_Massa_DaguaConder2010_24,lyr_LogradourosOficializadoseouCepeados_25,lyr_LinhaFrreaFCA_26,lyr_EixosRodEstSEINFRABa2021_27,lyr_PontosdeRefernciadiversos2023_28,lyr_Localidadesdiversas2023_29,lyr_DistritosMunicipais2020_30,lyr_LimitesMunicipais2020_31,lyr_LimitesMunicpiosRMS2020_32];
lyr_reasmidasVeredasPMSBCamaari_22.set('fieldAliases', {'Id': 'Id', 'Descricao': 'Descricao', 'Coef__Defl': 'Coef__Defl', 'Categorias': 'Categorias', 'AREA': 'AREA', });
lyr_Trecho_Massa_DaguaConder2010_23.set('fieldAliases', {'FID_HID_Tr': 'FID_HID_Tr', 'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'ID_Trecho_': 'ID_Trecho_', 'tipoTrecho': 'tipoTrecho', 'salinidade': 'salinidade', 'FID_Articu': 'FID_Articu', 'OBJECTID_1': 'OBJECTID_1', 'MI': 'MI', 'Escala': 'Escala', 'Nome_Carta': 'Nome_Carta', 'Ano_Aquisi': 'Ano_Aquisi', 'Shape_Leng': 'Shape_Leng', 'BLOCO': 'BLOCO', 'Equidistan': 'Equidistan', 'Ano_Aqui_1': 'Ano_Aqui_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'SHAPE_Le_2': 'SHAPE_Le_2', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Massa_DaguaConder2010_24.set('fieldAliases', {'FID_HID_Ma': 'FID_HID_Ma', 'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'tipoMassaD': 'tipoMassaD', 'salinidade': 'salinidade', 'FID_Articu': 'FID_Articu', 'OBJECTID_1': 'OBJECTID_1', 'MI': 'MI', 'Escala': 'Escala', 'Nome_Carta': 'Nome_Carta', 'Ano_Aquisi': 'Ano_Aquisi', 'Shape_Leng': 'Shape_Leng', 'BLOCO': 'BLOCO', 'Equidistan': 'Equidistan', 'Ano_Aqui_1': 'Ano_Aqui_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_LogradourosOficializadoseouCepeados_25.set('fieldAliases', {'id': 'id', 'codlog_': 'codlog_', 'logradour_': 'logradour_', 'parcelame_': 'parcelame_', 'bairro_': 'bairro_', 'distrito_': 'distrito_', 'cep_': 'cep_', 'obs_1': 'obs_1', 'obs_2': 'obs_2', 'webmap': 'webmap', 'compriment': 'compriment', });
lyr_LinhaFrreaFCA_26.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'nomeabrev': 'nomeabrev', 'geometriaa': 'geometriaa', 'codtrechof': 'codtrechof', 'posicaorel': 'posicaorel', 'tipotrecho': 'tipotrecho', 'bitola': 'bitola', 'eletrifica': 'eletrifica', 'nrlinhas': 'nrlinhas', 'emarruamen': 'emarruamen', 'jurisdicao': 'jurisdicao', 'administra': 'administra', 'concession': 'concession', 'operaciona': 'operaciona', 'situacaofi': 'situacaofi', 'cargasupor': 'cargasupor', });
lyr_EixosRodEstSEINFRABa2021_27.set('fieldAliases', {'Name': 'Name', 'fid': 'fid', 'Codigo SRE': 'Codigo SRE', 'UF': 'UF', 'Rodovia': 'Rodovia', 'Local Iní': 'Local Iní', 'Km Inicial': 'Km Inicial', 'Km Final': 'Km Final', 'Extensão': 'Extensão', 'Situação': 'Situação', 'Descriçã': 'Descriçã', 'Tipo de Re': 'Tipo de Re', 'Descriç_1': 'Descriç_1', 'Coincide_3': 'Coincide_3', 'Identifica': 'Identifica', 'Extensã_1': 'Extensã_1', 'Status': 'Status', });
lyr_PontosdeRefernciadiversos2023_28.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_Localidadesdiversas2023_29.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_DistritosMunicipais2020_30.set('fieldAliases', {'id': 'id', 'cd_mun': 'cd_mun', 'cd_dist': 'cd_dist', 'nm_dist': 'nm_dist', 'Perímetro': 'Perímetro', 'Área': 'Área', 'percentual': 'percentual', 'cg_majorit': 'cg_majorit', 'cb_heigh': 'cb_heigh', });
lyr_LimitesMunicipais2020_31.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', 'Est_P_2021': 'Est_P_2021', 'Dens_2021': 'Dens_2021', 'Pop_2010': 'Pop_2010', 'Dom_2010': 'Dom_2010', 'Dens_2010': 'Dens_2010', 'IDH-m_2010': 'IDH-m_2010', 'cg_majorit': 'cg_majorit', 'cg_major_1': 'cg_major_1', 'cg_major_2': 'cg_major_2', 'cg_major_3': 'cg_major_3', 'cb_heigh': 'cb_heigh', 'cg_major_4': 'cg_major_4', });
lyr_LimitesMunicpiosRMS2020_32.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_reasmidasVeredasPMSBCamaari_22.set('fieldImages', {'Id': 'Range', 'Descricao': 'TextEdit', 'Coef__Defl': 'TextEdit', 'Categorias': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Trecho_Massa_DaguaConder2010_23.set('fieldImages', {'FID_HID_Tr': 'Range', 'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'ID_Trecho_': 'Range', 'tipoTrecho': 'Range', 'salinidade': 'Range', 'FID_Articu': 'Range', 'OBJECTID_1': 'Range', 'MI': 'TextEdit', 'Escala': 'Range', 'Nome_Carta': 'TextEdit', 'Ano_Aquisi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BLOCO': 'TextEdit', 'Equidistan': 'Range', 'Ano_Aqui_1': 'Range', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'SHAPE_Le_2': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Massa_DaguaConder2010_24.set('fieldImages', {'FID_HID_Ma': 'Range', 'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'tipoMassaD': 'Range', 'salinidade': 'Range', 'FID_Articu': 'Range', 'OBJECTID_1': 'Range', 'MI': 'TextEdit', 'Escala': 'Range', 'Nome_Carta': 'TextEdit', 'Ano_Aquisi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BLOCO': 'TextEdit', 'Equidistan': 'Range', 'Ano_Aqui_1': 'Range', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LogradourosOficializadoseouCepeados_25.set('fieldImages', {'id': 'TextEdit', 'codlog_': 'TextEdit', 'logradour_': 'TextEdit', 'parcelame_': 'TextEdit', 'bairro_': 'TextEdit', 'distrito_': 'TextEdit', 'cep_': 'TextEdit', 'obs_1': 'TextEdit', 'obs_2': 'TextEdit', 'webmap': 'TextEdit', 'compriment': 'TextEdit', });
lyr_LinhaFrreaFCA_26.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'nomeabrev': 'TextEdit', 'geometriaa': 'TextEdit', 'codtrechof': 'TextEdit', 'posicaorel': 'TextEdit', 'tipotrecho': 'TextEdit', 'bitola': 'TextEdit', 'eletrifica': 'TextEdit', 'nrlinhas': 'TextEdit', 'emarruamen': 'TextEdit', 'jurisdicao': 'TextEdit', 'administra': 'TextEdit', 'concession': 'TextEdit', 'operaciona': 'TextEdit', 'situacaofi': 'TextEdit', 'cargasupor': 'TextEdit', });
lyr_EixosRodEstSEINFRABa2021_27.set('fieldImages', {'Name': 'TextEdit', 'fid': 'TextEdit', 'Codigo SRE': 'TextEdit', 'UF': 'TextEdit', 'Rodovia': 'TextEdit', 'Local Iní': 'TextEdit', 'Km Inicial': 'TextEdit', 'Km Final': 'TextEdit', 'Extensão': 'TextEdit', 'Situação': 'TextEdit', 'Descriçã': 'TextEdit', 'Tipo de Re': 'TextEdit', 'Descriç_1': 'TextEdit', 'Coincide_3': 'TextEdit', 'Identifica': 'TextEdit', 'Extensã_1': 'TextEdit', 'Status': 'TextEdit', });
lyr_PontosdeRefernciadiversos2023_28.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_Localidadesdiversas2023_29.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_DistritosMunicipais2020_30.set('fieldImages', {'id': 'TextEdit', 'cd_mun': 'TextEdit', 'cd_dist': 'TextEdit', 'nm_dist': 'TextEdit', 'Perímetro': 'TextEdit', 'Área': 'TextEdit', 'percentual': 'TextEdit', 'cg_majorit': 'TextEdit', 'cb_heigh': 'TextEdit', });
lyr_LimitesMunicipais2020_31.set('fieldImages', {'CD_MUN': '', 'NM_MUN': '', 'SIGLA_UF': '', 'AREA_KM2': '', 'Est_P_2021': '', 'Dens_2021': '', 'Pop_2010': '', 'Dom_2010': '', 'Dens_2010': '', 'IDH-m_2010': '', 'cg_majorit': '', 'cg_major_1': '', 'cg_major_2': '', 'cg_major_3': '', 'cb_heigh': '', 'cg_major_4': '', });
lyr_LimitesMunicpiosRMS2020_32.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_reasmidasVeredasPMSBCamaari_22.set('fieldLabels', {'Id': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', 'Coef__Defl': 'inline label - visible with data', 'Categorias': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_Trecho_Massa_DaguaConder2010_23.set('fieldLabels', {'FID_HID_Tr': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'geometriaA': 'inline label - visible with data', 'regime': 'inline label - visible with data', 'nomeAbrev': 'inline label - visible with data', 'ID_Trecho_': 'inline label - visible with data', 'tipoTrecho': 'inline label - visible with data', 'salinidade': 'inline label - visible with data', 'FID_Articu': 'inline label - visible with data', 'OBJECTID_1': 'inline label - visible with data', 'MI': 'inline label - visible with data', 'Escala': 'inline label - visible with data', 'Nome_Carta': 'inline label - visible with data', 'Ano_Aquisi': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'BLOCO': 'inline label - visible with data', 'Equidistan': 'inline label - visible with data', 'Ano_Aqui_1': 'inline label - visible with data', 'Shape_Le_1': 'inline label - visible with data', 'Shape_Ar_1': 'inline label - visible with data', 'SHAPE_Le_2': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', });
lyr_Massa_DaguaConder2010_24.set('fieldLabels', {'FID_HID_Ma': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'geometriaA': 'inline label - visible with data', 'regime': 'inline label - visible with data', 'nomeAbrev': 'inline label - visible with data', 'tipoMassaD': 'inline label - visible with data', 'salinidade': 'inline label - visible with data', 'FID_Articu': 'inline label - visible with data', 'OBJECTID_1': 'inline label - visible with data', 'MI': 'inline label - visible with data', 'Escala': 'inline label - visible with data', 'Nome_Carta': 'inline label - visible with data', 'Ano_Aquisi': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'BLOCO': 'inline label - visible with data', 'Equidistan': 'inline label - visible with data', 'Ano_Aqui_1': 'inline label - visible with data', 'Shape_Le_1': 'inline label - visible with data', 'Shape_Ar_1': 'inline label - visible with data', 'Shape_Le_2': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_LogradourosOficializadoseouCepeados_25.set('fieldLabels', {'id': 'inline label - visible with data', 'codlog_': 'inline label - visible with data', 'logradour_': 'inline label - visible with data', 'parcelame_': 'inline label - visible with data', 'bairro_': 'inline label - visible with data', 'distrito_': 'inline label - visible with data', 'cep_': 'inline label - visible with data', 'obs_1': 'inline label - visible with data', 'obs_2': 'inline label - visible with data', 'webmap': 'inline label - visible with data', 'compriment': 'inline label - visible with data', });
lyr_LinhaFrreaFCA_26.set('fieldLabels', {'id': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'nomeabrev': 'inline label - visible with data', 'geometriaa': 'inline label - visible with data', 'codtrechof': 'inline label - visible with data', 'posicaorel': 'inline label - visible with data', 'tipotrecho': 'inline label - visible with data', 'bitola': 'inline label - visible with data', 'eletrifica': 'inline label - visible with data', 'nrlinhas': 'inline label - visible with data', 'emarruamen': 'inline label - visible with data', 'jurisdicao': 'inline label - visible with data', 'administra': 'inline label - visible with data', 'concession': 'inline label - visible with data', 'operaciona': 'inline label - visible with data', 'situacaofi': 'inline label - visible with data', 'cargasupor': 'inline label - visible with data', });
lyr_EixosRodEstSEINFRABa2021_27.set('fieldLabels', {'Name': 'inline label - visible with data', 'fid': 'inline label - visible with data', 'Codigo SRE': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', 'Local Iní': 'inline label - visible with data', 'Km Inicial': 'inline label - visible with data', 'Km Final': 'inline label - visible with data', 'Extensão': 'inline label - visible with data', 'Situação': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'Tipo de Re': 'inline label - visible with data', 'Descriç_1': 'inline label - visible with data', 'Coincide_3': 'inline label - visible with data', 'Identifica': 'inline label - visible with data', 'Extensã_1': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_PontosdeRefernciadiversos2023_28.set('fieldLabels', {'id': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'bairro': 'inline label - visible with data', 'distrito': 'inline label - visible with data', 'base': 'inline label - visible with data', 'fonte': 'inline label - visible with data', });
lyr_Localidadesdiversas2023_29.set('fieldLabels', {'id': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'bairro': 'inline label - visible with data', 'distrito': 'inline label - visible with data', 'base': 'inline label - visible with data', 'fonte': 'inline label - visible with data', });
lyr_DistritosMunicipais2020_30.set('fieldLabels', {'id': 'inline label - visible with data', 'cd_mun': 'inline label - visible with data', 'cd_dist': 'inline label - visible with data', 'nm_dist': 'inline label - visible with data', 'Perímetro': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'percentual': 'inline label - visible with data', 'cg_majorit': 'inline label - visible with data', 'cb_heigh': 'inline label - visible with data', });
lyr_LimitesMunicipais2020_31.set('fieldLabels', {'CD_MUN': 'inline label - visible with data', 'NM_MUN': 'inline label - visible with data', 'SIGLA_UF': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', 'Est_P_2021': 'inline label - visible with data', 'Dens_2021': 'inline label - visible with data', 'Pop_2010': 'inline label - visible with data', 'Dom_2010': 'inline label - visible with data', 'Dens_2010': 'inline label - visible with data', 'IDH-m_2010': 'inline label - visible with data', 'cg_majorit': 'inline label - visible with data', 'cg_major_1': 'inline label - visible with data', 'cg_major_2': 'inline label - visible with data', 'cg_major_3': 'inline label - visible with data', 'cb_heigh': 'inline label - visible with data', 'cg_major_4': 'inline label - visible with data', });
lyr_LimitesMunicpiosRMS2020_32.set('fieldLabels', {'CD_MUN': 'inline label - visible with data', 'NM_MUN': 'inline label - visible with data', 'SIGLA_UF': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', });
lyr_LimitesMunicpiosRMS2020_32.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});