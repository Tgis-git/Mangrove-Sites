var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Untitledpolygon_3 = new ol.format.GeoJSON();
var features_Untitledpolygon_3 = format_Untitledpolygon_3.readFeatures(json_Untitledpolygon_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Untitledpolygon_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Untitledpolygon_3.addFeatures(features_Untitledpolygon_3);
var lyr_Untitledpolygon_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Untitledpolygon_3, 
                style: style_Untitledpolygon_3,
                popuplayertitle: 'Untitled polygon',
                interactive: false,
                title: '<img src="styles/legend/Untitledpolygon_3.png" /> Untitled polygon'
            });
var format_BARADIMATACREEK_4 = new ol.format.GeoJSON();
var features_BARADIMATACREEK_4 = format_BARADIMATACREEK_4.readFeatures(json_BARADIMATACREEK_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BARADIMATACREEK_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARADIMATACREEK_4.addFeatures(features_BARADIMATACREEK_4);
var lyr_BARADIMATACREEK_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BARADIMATACREEK_4, 
                style: style_BARADIMATACREEK_4,
                popuplayertitle: 'BARADI MATA CREEK',
                interactive: true,
                title: '<img src="styles/legend/BARADIMATACREEK_4.png" /> BARADI MATA CREEK'
            });
var format_BochaCreek_5 = new ol.format.GeoJSON();
var features_BochaCreek_5 = format_BochaCreek_5.readFeatures(json_BochaCreek_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BochaCreek_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BochaCreek_5.addFeatures(features_BochaCreek_5);
var lyr_BochaCreek_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BochaCreek_5, 
                style: style_BochaCreek_5,
                popuplayertitle: 'Bocha Creek',
                interactive: true,
                title: '<img src="styles/legend/BochaCreek_5.png" /> Bocha Creek'
            });
var format_Dandi85Hac200607_6 = new ol.format.GeoJSON();
var features_Dandi85Hac200607_6 = format_Dandi85Hac200607_6.readFeatures(json_Dandi85Hac200607_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dandi85Hac200607_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dandi85Hac200607_6.addFeatures(features_Dandi85Hac200607_6);
var lyr_Dandi85Hac200607_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dandi85Hac200607_6, 
                style: style_Dandi85Hac200607_6,
                popuplayertitle: 'Dandi- 85 Hac. (2006-07)',
                interactive: true,
                title: '<img src="styles/legend/Dandi85Hac200607_6.png" /> Dandi- 85 Hac. (2006-07)'
            });
var format_Dandi115Hac200607_7 = new ol.format.GeoJSON();
var features_Dandi115Hac200607_7 = format_Dandi115Hac200607_7.readFeatures(json_Dandi115Hac200607_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dandi115Hac200607_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dandi115Hac200607_7.addFeatures(features_Dandi115Hac200607_7);
var lyr_Dandi115Hac200607_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dandi115Hac200607_7, 
                style: style_Dandi115Hac200607_7,
                popuplayertitle: 'Dandi- 115 Hac. (2006-07)',
                interactive: true,
                title: '<img src="styles/legend/Dandi115Hac200607_7.png" /> Dandi- 115 Hac. (2006-07)'
            });
var format_Dandi100HaDahejsite_8 = new ol.format.GeoJSON();
var features_Dandi100HaDahejsite_8 = format_Dandi100HaDahejsite_8.readFeatures(json_Dandi100HaDahejsite_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dandi100HaDahejsite_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dandi100HaDahejsite_8.addFeatures(features_Dandi100HaDahejsite_8);
var lyr_Dandi100HaDahejsite_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dandi100HaDahejsite_8, 
                style: style_Dandi100HaDahejsite_8,
                popuplayertitle: 'Dandi-100 Ha. (Dahej site)',
                interactive: true,
                title: '<img src="styles/legend/Dandi100HaDahejsite_8.png" /> Dandi-100 Ha. (Dahej site)'
            });
var format_Devjagan50HAC_9 = new ol.format.GeoJSON();
var features_Devjagan50HAC_9 = format_Devjagan50HAC_9.readFeatures(json_Devjagan50HAC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Devjagan50HAC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Devjagan50HAC_9.addFeatures(features_Devjagan50HAC_9);
var lyr_Devjagan50HAC_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Devjagan50HAC_9, 
                style: style_Devjagan50HAC_9,
                popuplayertitle: 'Devjagan (50 HAC.)',
                interactive: true,
                title: '<img src="styles/legend/Devjagan50HAC_9.png" /> Devjagan (50 HAC.)'
            });
var format_JAKHAU2HAC_10 = new ol.format.GeoJSON();
var features_JAKHAU2HAC_10 = format_JAKHAU2HAC_10.readFeatures(json_JAKHAU2HAC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAU2HAC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAU2HAC_10.addFeatures(features_JAKHAU2HAC_10);
var lyr_JAKHAU2HAC_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAU2HAC_10, 
                style: style_JAKHAU2HAC_10,
                popuplayertitle: 'JAKHAU-2 HAC.',
                interactive: true,
                title: '<img src="styles/legend/JAKHAU2HAC_10.png" /> JAKHAU-2 HAC.'
            });
var format_JAKHAU5HAC_11 = new ol.format.GeoJSON();
var features_JAKHAU5HAC_11 = format_JAKHAU5HAC_11.readFeatures(json_JAKHAU5HAC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAU5HAC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAU5HAC_11.addFeatures(features_JAKHAU5HAC_11);
var lyr_JAKHAU5HAC_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAU5HAC_11, 
                style: style_JAKHAU5HAC_11,
                popuplayertitle: 'JAKHAU-5 HAC.',
                interactive: true,
                title: '<img src="styles/legend/JAKHAU5HAC_11.png" /> JAKHAU-5 HAC.'
            });
var format_JAKHAU15HAC_12 = new ol.format.GeoJSON();
var features_JAKHAU15HAC_12 = format_JAKHAU15HAC_12.readFeatures(json_JAKHAU15HAC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAU15HAC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAU15HAC_12.addFeatures(features_JAKHAU15HAC_12);
var lyr_JAKHAU15HAC_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAU15HAC_12, 
                style: style_JAKHAU15HAC_12,
                popuplayertitle: 'JAKHAU-15 HAC.',
                interactive: true,
                title: '<img src="styles/legend/JAKHAU15HAC_12.png" /> JAKHAU-15 HAC.'
            });
var format_JAKHAU40HAC_13 = new ol.format.GeoJSON();
var features_JAKHAU40HAC_13 = format_JAKHAU40HAC_13.readFeatures(json_JAKHAU40HAC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAU40HAC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAU40HAC_13.addFeatures(features_JAKHAU40HAC_13);
var lyr_JAKHAU40HAC_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAU40HAC_13, 
                style: style_JAKHAU40HAC_13,
                popuplayertitle: 'JAKHAU-40HAC.',
                interactive: true,
                title: '<img src="styles/legend/JAKHAU40HAC_13.png" /> JAKHAU-40HAC.'
            });
var format_JAKHAU220HACFY201213_14 = new ol.format.GeoJSON();
var features_JAKHAU220HACFY201213_14 = format_JAKHAU220HACFY201213_14.readFeatures(json_JAKHAU220HACFY201213_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAU220HACFY201213_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAU220HACFY201213_14.addFeatures(features_JAKHAU220HACFY201213_14);
var lyr_JAKHAU220HACFY201213_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAU220HACFY201213_14, 
                style: style_JAKHAU220HACFY201213_14,
                popuplayertitle: 'JAKHAU-220 HAC.(FY 2012-13)',
                interactive: true,
                title: '<img src="styles/legend/JAKHAU220HACFY201213_14.png" /> JAKHAU-220 HAC.(FY 2012-13)'
            });
var format_JAKHAUBUDIA1_15 = new ol.format.GeoJSON();
var features_JAKHAUBUDIA1_15 = format_JAKHAUBUDIA1_15.readFeatures(json_JAKHAUBUDIA1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAUBUDIA1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAUBUDIA1_15.addFeatures(features_JAKHAUBUDIA1_15);
var lyr_JAKHAUBUDIA1_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAUBUDIA1_15, 
                style: style_JAKHAUBUDIA1_15,
                popuplayertitle: 'JAKHAU-BUDIA 1',
                interactive: true,
                title: '<img src="styles/legend/JAKHAUBUDIA1_15.png" /> JAKHAU-BUDIA 1'
            });
var format_JAKHAUBUDIA2_16 = new ol.format.GeoJSON();
var features_JAKHAUBUDIA2_16 = format_JAKHAUBUDIA2_16.readFeatures(json_JAKHAUBUDIA2_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAUBUDIA2_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAUBUDIA2_16.addFeatures(features_JAKHAUBUDIA2_16);
var lyr_JAKHAUBUDIA2_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAUBUDIA2_16, 
                style: style_JAKHAUBUDIA2_16,
                popuplayertitle: 'JAKHAU-BUDIA 2',
                interactive: true,
                title: '<img src="styles/legend/JAKHAUBUDIA2_16.png" /> JAKHAU-BUDIA 2'
            });
var format_JAKHAUBUDIA3_17 = new ol.format.GeoJSON();
var features_JAKHAUBUDIA3_17 = format_JAKHAUBUDIA3_17.readFeatures(json_JAKHAUBUDIA3_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAUBUDIA3_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAUBUDIA3_17.addFeatures(features_JAKHAUBUDIA3_17);
var lyr_JAKHAUBUDIA3_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAUBUDIA3_17, 
                style: style_JAKHAUBUDIA3_17,
                popuplayertitle: 'JAKHAU-BUDIA 3',
                interactive: true,
                title: '<img src="styles/legend/JAKHAUBUDIA3_17.png" /> JAKHAU-BUDIA 3'
            });
var format_JAKHAUBUDIA4_18 = new ol.format.GeoJSON();
var features_JAKHAUBUDIA4_18 = format_JAKHAUBUDIA4_18.readFeatures(json_JAKHAUBUDIA4_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAUBUDIA4_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAUBUDIA4_18.addFeatures(features_JAKHAUBUDIA4_18);
var lyr_JAKHAUBUDIA4_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAUBUDIA4_18, 
                style: style_JAKHAUBUDIA4_18,
                popuplayertitle: 'JAKHAU-BUDIA 4',
                interactive: true,
                title: '<img src="styles/legend/JAKHAUBUDIA4_18.png" /> JAKHAU-BUDIA 4'
            });
var format_Jangi50Hac_19 = new ol.format.GeoJSON();
var features_Jangi50Hac_19 = format_Jangi50Hac_19.readFeatures(json_Jangi50Hac_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jangi50Hac_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jangi50Hac_19.addFeatures(features_Jangi50Hac_19);
var lyr_Jangi50Hac_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jangi50Hac_19, 
                style: style_Jangi50Hac_19,
                popuplayertitle: 'Jangi-50 Hac.',
                interactive: true,
                title: '<img src="styles/legend/Jangi50Hac_19.png" /> Jangi-50 Hac.'
            });
var format_K14HAC_20 = new ol.format.GeoJSON();
var features_K14HAC_20 = format_K14HAC_20.readFeatures(json_K14HAC_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K14HAC_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K14HAC_20.addFeatures(features_K14HAC_20);
var lyr_K14HAC_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_K14HAC_20, 
                style: style_K14HAC_20,
                popuplayertitle: 'K1-4 HAC.',
                interactive: true,
                title: '<img src="styles/legend/K14HAC_20.png" /> K1-4 HAC.'
            });
var format_K2_6085HAC_21 = new ol.format.GeoJSON();
var features_K2_6085HAC_21 = format_K2_6085HAC_21.readFeatures(json_K2_6085HAC_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K2_6085HAC_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K2_6085HAC_21.addFeatures(features_K2_6085HAC_21);
var lyr_K2_6085HAC_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_K2_6085HAC_21, 
                style: style_K2_6085HAC_21,
                popuplayertitle: 'K2_60.85 HAC.',
                interactive: true,
                title: '<img src="styles/legend/K2_6085HAC_21.png" /> K2_60.85 HAC.'
            });
var format_Kantiyajal20HAC_22 = new ol.format.GeoJSON();
var features_Kantiyajal20HAC_22 = format_Kantiyajal20HAC_22.readFeatures(json_Kantiyajal20HAC_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kantiyajal20HAC_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kantiyajal20HAC_22.addFeatures(features_Kantiyajal20HAC_22);
var lyr_Kantiyajal20HAC_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kantiyajal20HAC_22, 
                style: style_Kantiyajal20HAC_22,
                popuplayertitle: 'Kantiyajal-20 HAC.',
                interactive: true,
                title: '<img src="styles/legend/Kantiyajal20HAC_22.png" /> Kantiyajal-20 HAC.'
            });
var format_KhariCreek_23 = new ol.format.GeoJSON();
var features_KhariCreek_23 = format_KhariCreek_23.readFeatures(json_KhariCreek_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KhariCreek_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KhariCreek_23.addFeatures(features_KhariCreek_23);
var lyr_KhariCreek_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KhariCreek_23, 
                style: style_KhariCreek_23,
                popuplayertitle: 'Khari Creek',
                interactive: true,
                title: '<img src="styles/legend/KhariCreek_23.png" /> Khari Creek'
            });
var format_KhariCreek2_24 = new ol.format.GeoJSON();
var features_KhariCreek2_24 = format_KhariCreek2_24.readFeatures(json_KhariCreek2_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KhariCreek2_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KhariCreek2_24.addFeatures(features_KhariCreek2_24);
var lyr_KhariCreek2_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KhariCreek2_24, 
                style: style_KhariCreek2_24,
                popuplayertitle: 'Khari Creek-2',
                interactive: true,
                title: '<img src="styles/legend/KhariCreek2_24.png" /> Khari Creek-2'
            });
var format_KotadiCreek_25 = new ol.format.GeoJSON();
var features_KotadiCreek_25 = format_KotadiCreek_25.readFeatures(json_KotadiCreek_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotadiCreek_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotadiCreek_25.addFeatures(features_KotadiCreek_25);
var lyr_KotadiCreek_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotadiCreek_25, 
                style: style_KotadiCreek_25,
                popuplayertitle: 'Kotadi Creek',
                interactive: true,
                title: '<img src="styles/legend/KotadiCreek_25.png" /> Kotadi Creek'
            });
var format_LUNI286HAC_26 = new ol.format.GeoJSON();
var features_LUNI286HAC_26 = format_LUNI286HAC_26.readFeatures(json_LUNI286HAC_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUNI286HAC_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUNI286HAC_26.addFeatures(features_LUNI286HAC_26);
var lyr_LUNI286HAC_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUNI286HAC_26, 
                style: style_LUNI286HAC_26,
                popuplayertitle: 'LUNI 28.6 HAC.',
                interactive: true,
                title: '<img src="styles/legend/LUNI286HAC_26.png" /> LUNI 28.6 HAC.'
            });
var format_LUNI10HAC_27 = new ol.format.GeoJSON();
var features_LUNI10HAC_27 = format_LUNI10HAC_27.readFeatures(json_LUNI10HAC_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUNI10HAC_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUNI10HAC_27.addFeatures(features_LUNI10HAC_27);
var lyr_LUNI10HAC_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUNI10HAC_27, 
                style: style_LUNI10HAC_27,
                popuplayertitle: 'LUNI-10 HAC.',
                interactive: true,
                title: '<img src="styles/legend/LUNI10HAC_27.png" /> LUNI-10 HAC.'
            });
var format_LUNI154HAC_28 = new ol.format.GeoJSON();
var features_LUNI154HAC_28 = format_LUNI154HAC_28.readFeatures(json_LUNI154HAC_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUNI154HAC_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUNI154HAC_28.addFeatures(features_LUNI154HAC_28);
var lyr_LUNI154HAC_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUNI154HAC_28, 
                style: style_LUNI154HAC_28,
                popuplayertitle: 'LUNI-15.4 HAC.',
                interactive: true,
                title: '<img src="styles/legend/LUNI154HAC_28.png" /> LUNI-15.4 HAC.'
            });
var format_LUNI1089HAC_29 = new ol.format.GeoJSON();
var features_LUNI1089HAC_29 = format_LUNI1089HAC_29.readFeatures(json_LUNI1089HAC_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUNI1089HAC_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUNI1089HAC_29.addFeatures(features_LUNI1089HAC_29);
var lyr_LUNI1089HAC_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUNI1089HAC_29, 
                style: style_LUNI1089HAC_29,
                popuplayertitle: 'LUNI-108.9 HAC',
                interactive: true,
                title: '<img src="styles/legend/LUNI1089HAC_29.png" /> LUNI-108.9 HAC'
            });
var format_MALPUR100HAC_30 = new ol.format.GeoJSON();
var features_MALPUR100HAC_30 = format_MALPUR100HAC_30.readFeatures(json_MALPUR100HAC_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MALPUR100HAC_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MALPUR100HAC_30.addFeatures(features_MALPUR100HAC_30);
var lyr_MALPUR100HAC_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MALPUR100HAC_30, 
                style: style_MALPUR100HAC_30,
                popuplayertitle: 'MALPUR 100 HAC.',
                interactive: true,
                title: '<img src="styles/legend/MALPUR100HAC_30.png" /> MALPUR 100 HAC.'
            });
var format_Nada180HAC_31 = new ol.format.GeoJSON();
var features_Nada180HAC_31 = format_Nada180HAC_31.readFeatures(json_Nada180HAC_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nada180HAC_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nada180HAC_31.addFeatures(features_Nada180HAC_31);
var lyr_Nada180HAC_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nada180HAC_31, 
                style: style_Nada180HAC_31,
                popuplayertitle: 'Nada- 180 HAC.',
                interactive: true,
                title: '<img src="styles/legend/Nada180HAC_31.png" /> Nada- 180 HAC.'
            });
var format_TALAJA50HAC_32 = new ol.format.GeoJSON();
var features_TALAJA50HAC_32 = format_TALAJA50HAC_32.readFeatures(json_TALAJA50HAC_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TALAJA50HAC_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TALAJA50HAC_32.addFeatures(features_TALAJA50HAC_32);
var lyr_TALAJA50HAC_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TALAJA50HAC_32, 
                style: style_TALAJA50HAC_32,
                popuplayertitle: 'TALAJA 50 HAC.',
                interactive: true,
                title: '<img src="styles/legend/TALAJA50HAC_32.png" /> TALAJA 50 HAC.'
            });
var group_MangroveSites = new ol.layer.Group({
                                layers: [lyr_Untitledpolygon_3,lyr_BARADIMATACREEK_4,lyr_BochaCreek_5,lyr_Dandi85Hac200607_6,lyr_Dandi115Hac200607_7,lyr_Dandi100HaDahejsite_8,lyr_Devjagan50HAC_9,lyr_JAKHAU2HAC_10,lyr_JAKHAU5HAC_11,lyr_JAKHAU15HAC_12,lyr_JAKHAU40HAC_13,lyr_JAKHAU220HACFY201213_14,lyr_JAKHAUBUDIA1_15,lyr_JAKHAUBUDIA2_16,lyr_JAKHAUBUDIA3_17,lyr_JAKHAUBUDIA4_18,lyr_Jangi50Hac_19,lyr_K14HAC_20,lyr_K2_6085HAC_21,lyr_Kantiyajal20HAC_22,lyr_KhariCreek_23,lyr_KhariCreek2_24,lyr_KotadiCreek_25,lyr_LUNI286HAC_26,lyr_LUNI10HAC_27,lyr_LUNI154HAC_28,lyr_LUNI1089HAC_29,lyr_MALPUR100HAC_30,lyr_Nada180HAC_31,lyr_TALAJA50HAC_32,],
                                fold: 'close',
                                title: 'Mangrove Sites'});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_Untitledpolygon_3.setVisible(true);lyr_BARADIMATACREEK_4.setVisible(true);lyr_BochaCreek_5.setVisible(true);lyr_Dandi85Hac200607_6.setVisible(true);lyr_Dandi115Hac200607_7.setVisible(true);lyr_Dandi100HaDahejsite_8.setVisible(true);lyr_Devjagan50HAC_9.setVisible(true);lyr_JAKHAU2HAC_10.setVisible(true);lyr_JAKHAU5HAC_11.setVisible(true);lyr_JAKHAU15HAC_12.setVisible(true);lyr_JAKHAU40HAC_13.setVisible(true);lyr_JAKHAU220HACFY201213_14.setVisible(true);lyr_JAKHAUBUDIA1_15.setVisible(true);lyr_JAKHAUBUDIA2_16.setVisible(true);lyr_JAKHAUBUDIA3_17.setVisible(true);lyr_JAKHAUBUDIA4_18.setVisible(true);lyr_Jangi50Hac_19.setVisible(true);lyr_K14HAC_20.setVisible(true);lyr_K2_6085HAC_21.setVisible(true);lyr_Kantiyajal20HAC_22.setVisible(true);lyr_KhariCreek_23.setVisible(true);lyr_KhariCreek2_24.setVisible(true);lyr_KotadiCreek_25.setVisible(true);lyr_LUNI286HAC_26.setVisible(true);lyr_LUNI10HAC_27.setVisible(true);lyr_LUNI154HAC_28.setVisible(true);lyr_LUNI1089HAC_29.setVisible(true);lyr_MALPUR100HAC_30.setVisible(true);lyr_Nada180HAC_31.setVisible(true);lyr_TALAJA50HAC_32.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_GoogleHybrid_2,group_MangroveSites];
lyr_Untitledpolygon_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BARADIMATACREEK_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BochaCreek_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Dandi85Hac200607_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Dandi115Hac200607_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Dandi100HaDahejsite_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Devjagan50HAC_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JAKHAU2HAC_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JAKHAU5HAC_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JAKHAU15HAC_12.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JAKHAU40HAC_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JAKHAU220HACFY201213_14.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JAKHAUBUDIA1_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JAKHAUBUDIA2_16.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JAKHAUBUDIA3_17.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JAKHAUBUDIA4_18.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Jangi50Hac_19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_K14HAC_20.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_K2_6085HAC_21.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kantiyajal20HAC_22.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KhariCreek_23.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KhariCreek2_24.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KotadiCreek_25.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LUNI286HAC_26.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LUNI10HAC_27.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LUNI154HAC_28.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LUNI1089HAC_29.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MALPUR100HAC_30.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Nada180HAC_31.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TALAJA50HAC_32.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Untitledpolygon_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_BARADIMATACREEK_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_BochaCreek_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Dandi85Hac200607_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Dandi115Hac200607_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Dandi100HaDahejsite_8.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Devjagan50HAC_9.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_JAKHAU2HAC_10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_JAKHAU5HAC_11.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_JAKHAU15HAC_12.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_JAKHAU40HAC_13.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_JAKHAU220HACFY201213_14.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_JAKHAUBUDIA1_15.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_JAKHAUBUDIA2_16.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_JAKHAUBUDIA3_17.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_JAKHAUBUDIA4_18.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Jangi50Hac_19.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_K14HAC_20.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_K2_6085HAC_21.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Kantiyajal20HAC_22.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_KhariCreek_23.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_KhariCreek2_24.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_KotadiCreek_25.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_LUNI286HAC_26.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_LUNI10HAC_27.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_LUNI154HAC_28.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_LUNI1089HAC_29.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_MALPUR100HAC_30.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Nada180HAC_31.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_TALAJA50HAC_32.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Untitledpolygon_3.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_BARADIMATACREEK_4.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_BochaCreek_5.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Dandi85Hac200607_6.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Dandi115Hac200607_7.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Dandi100HaDahejsite_8.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Devjagan50HAC_9.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_JAKHAU2HAC_10.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_JAKHAU5HAC_11.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_JAKHAU15HAC_12.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_JAKHAU40HAC_13.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_JAKHAU220HACFY201213_14.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_JAKHAUBUDIA1_15.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_JAKHAUBUDIA2_16.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_JAKHAUBUDIA3_17.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_JAKHAUBUDIA4_18.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Jangi50Hac_19.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_K14HAC_20.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_K2_6085HAC_21.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Kantiyajal20HAC_22.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_KhariCreek_23.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_KhariCreek2_24.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_KotadiCreek_25.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_LUNI286HAC_26.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_LUNI10HAC_27.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_LUNI154HAC_28.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_LUNI1089HAC_29.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_MALPUR100HAC_30.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Nada180HAC_31.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_TALAJA50HAC_32.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_TALAJA50HAC_32.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});