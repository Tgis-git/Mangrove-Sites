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
var format_BARADIMATACREEK112024HAC_3 = new ol.format.GeoJSON();
var features_BARADIMATACREEK112024HAC_3 = format_BARADIMATACREEK112024HAC_3.readFeatures(json_BARADIMATACREEK112024HAC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BARADIMATACREEK112024HAC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARADIMATACREEK112024HAC_3.addFeatures(features_BARADIMATACREEK112024HAC_3);
var lyr_BARADIMATACREEK112024HAC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BARADIMATACREEK112024HAC_3, 
                style: style_BARADIMATACREEK112024HAC_3,
                popuplayertitle: 'BARADI MATA CREEK- 1120.24 HAC.',
                interactive: true,
                title: '<img src="styles/legend/BARADIMATACREEK112024HAC_3.png" /> BARADI MATA CREEK- 1120.24 HAC.'
            });
var format_BHADRESWAR250HAC_4 = new ol.format.GeoJSON();
var features_BHADRESWAR250HAC_4 = format_BHADRESWAR250HAC_4.readFeatures(json_BHADRESWAR250HAC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BHADRESWAR250HAC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BHADRESWAR250HAC_4.addFeatures(features_BHADRESWAR250HAC_4);
var lyr_BHADRESWAR250HAC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BHADRESWAR250HAC_4, 
                style: style_BHADRESWAR250HAC_4,
                popuplayertitle: 'BHADRESWAR- 250 HAC.',
                interactive: true,
                title: '<img src="styles/legend/BHADRESWAR250HAC_4.png" /> BHADRESWAR- 250 HAC.'
            });
var format_BHADRESWAR250HAC_5 = new ol.format.GeoJSON();
var features_BHADRESWAR250HAC_5 = format_BHADRESWAR250HAC_5.readFeatures(json_BHADRESWAR250HAC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BHADRESWAR250HAC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BHADRESWAR250HAC_5.addFeatures(features_BHADRESWAR250HAC_5);
var lyr_BHADRESWAR250HAC_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BHADRESWAR250HAC_5, 
                style: style_BHADRESWAR250HAC_5,
                popuplayertitle: 'BHADRESWAR-250 HAC.',
                interactive: true,
                title: '<img src="styles/legend/BHADRESWAR250HAC_5.png" /> BHADRESWAR-250 HAC.'
            });
var format_BHADRESWAR750HAC_6 = new ol.format.GeoJSON();
var features_BHADRESWAR750HAC_6 = format_BHADRESWAR750HAC_6.readFeatures(json_BHADRESWAR750HAC_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BHADRESWAR750HAC_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BHADRESWAR750HAC_6.addFeatures(features_BHADRESWAR750HAC_6);
var lyr_BHADRESWAR750HAC_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BHADRESWAR750HAC_6, 
                style: style_BHADRESWAR750HAC_6,
                popuplayertitle: 'BHADRESWAR-750 HAC.',
                interactive: true,
                title: '<img src="styles/legend/BHADRESWAR750HAC_6.png" /> BHADRESWAR-750 HAC.'
            });
var format_BOCHACREEK52811_7 = new ol.format.GeoJSON();
var features_BOCHACREEK52811_7 = format_BOCHACREEK52811_7.readFeatures(json_BOCHACREEK52811_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOCHACREEK52811_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOCHACREEK52811_7.addFeatures(features_BOCHACREEK52811_7);
var lyr_BOCHACREEK52811_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOCHACREEK52811_7, 
                style: style_BOCHACREEK52811_7,
                popuplayertitle: 'BOCHA CREEK- 528.11',
                interactive: true,
                title: '<img src="styles/legend/BOCHACREEK52811_7.png" /> BOCHA CREEK- 528.11'
            });
var format_DANDI85Hac200607_8 = new ol.format.GeoJSON();
var features_DANDI85Hac200607_8 = format_DANDI85Hac200607_8.readFeatures(json_DANDI85Hac200607_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANDI85Hac200607_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANDI85Hac200607_8.addFeatures(features_DANDI85Hac200607_8);
var lyr_DANDI85Hac200607_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DANDI85Hac200607_8, 
                style: style_DANDI85Hac200607_8,
                popuplayertitle: 'DANDI- 85 Hac. (2006-07)',
                interactive: true,
                title: '<img src="styles/legend/DANDI85Hac200607_8.png" /> DANDI- 85 Hac. (2006-07)'
            });
var format_DANDI100HACMUNDRAPORTSITE_9 = new ol.format.GeoJSON();
var features_DANDI100HACMUNDRAPORTSITE_9 = format_DANDI100HACMUNDRAPORTSITE_9.readFeatures(json_DANDI100HACMUNDRAPORTSITE_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANDI100HACMUNDRAPORTSITE_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANDI100HACMUNDRAPORTSITE_9.addFeatures(features_DANDI100HACMUNDRAPORTSITE_9);
var lyr_DANDI100HACMUNDRAPORTSITE_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DANDI100HACMUNDRAPORTSITE_9, 
                style: style_DANDI100HACMUNDRAPORTSITE_9,
                popuplayertitle: 'DANDI- 100 HAC. (MUNDRA PORT SITE)',
                interactive: true,
                title: '<img src="styles/legend/DANDI100HACMUNDRAPORTSITE_9.png" /> DANDI- 100 HAC. (MUNDRA PORT SITE)'
            });
var format_DANDI115Hac200607_10 = new ol.format.GeoJSON();
var features_DANDI115Hac200607_10 = format_DANDI115Hac200607_10.readFeatures(json_DANDI115Hac200607_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANDI115Hac200607_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANDI115Hac200607_10.addFeatures(features_DANDI115Hac200607_10);
var lyr_DANDI115Hac200607_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DANDI115Hac200607_10, 
                style: style_DANDI115Hac200607_10,
                popuplayertitle: 'DANDI- 115 Hac. (2006-07)',
                interactive: true,
                title: '<img src="styles/legend/DANDI115Hac200607_10.png" /> DANDI- 115 Hac. (2006-07)'
            });
var format_DANDI100HaDahejsite_11 = new ol.format.GeoJSON();
var features_DANDI100HaDahejsite_11 = format_DANDI100HaDahejsite_11.readFeatures(json_DANDI100HaDahejsite_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANDI100HaDahejsite_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANDI100HaDahejsite_11.addFeatures(features_DANDI100HaDahejsite_11);
var lyr_DANDI100HaDahejsite_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DANDI100HaDahejsite_11, 
                style: style_DANDI100HaDahejsite_11,
                popuplayertitle: 'DANDI-100 Ha. (Dahej site)',
                interactive: true,
                title: '<img src="styles/legend/DANDI100HaDahejsite_11.png" /> DANDI-100 Ha. (Dahej site)'
            });
var format_DEVJAGAN50HAC_12 = new ol.format.GeoJSON();
var features_DEVJAGAN50HAC_12 = format_DEVJAGAN50HAC_12.readFeatures(json_DEVJAGAN50HAC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEVJAGAN50HAC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEVJAGAN50HAC_12.addFeatures(features_DEVJAGAN50HAC_12);
var lyr_DEVJAGAN50HAC_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEVJAGAN50HAC_12, 
                style: style_DEVJAGAN50HAC_12,
                popuplayertitle: 'DEVJAGAN-50 HAC.',
                interactive: true,
                title: '<img src="styles/legend/DEVJAGAN50HAC_12.png" /> DEVJAGAN-50 HAC.'
            });
var format_JAKHAU2HAC_13 = new ol.format.GeoJSON();
var features_JAKHAU2HAC_13 = format_JAKHAU2HAC_13.readFeatures(json_JAKHAU2HAC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAU2HAC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAU2HAC_13.addFeatures(features_JAKHAU2HAC_13);
var lyr_JAKHAU2HAC_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAU2HAC_13, 
                style: style_JAKHAU2HAC_13,
                popuplayertitle: 'JAKHAU-2 HAC.',
                interactive: true,
                title: '<img src="styles/legend/JAKHAU2HAC_13.png" /> JAKHAU-2 HAC.'
            });
var format_JAKHAU5HAC_14 = new ol.format.GeoJSON();
var features_JAKHAU5HAC_14 = format_JAKHAU5HAC_14.readFeatures(json_JAKHAU5HAC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAU5HAC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAU5HAC_14.addFeatures(features_JAKHAU5HAC_14);
var lyr_JAKHAU5HAC_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAU5HAC_14, 
                style: style_JAKHAU5HAC_14,
                popuplayertitle: 'JAKHAU-5 HAC.',
                interactive: true,
                title: '<img src="styles/legend/JAKHAU5HAC_14.png" /> JAKHAU-5 HAC.'
            });
var format_JAKHAU15HAC_15 = new ol.format.GeoJSON();
var features_JAKHAU15HAC_15 = format_JAKHAU15HAC_15.readFeatures(json_JAKHAU15HAC_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAU15HAC_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAU15HAC_15.addFeatures(features_JAKHAU15HAC_15);
var lyr_JAKHAU15HAC_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAU15HAC_15, 
                style: style_JAKHAU15HAC_15,
                popuplayertitle: 'JAKHAU-15 HAC.',
                interactive: true,
                title: '<img src="styles/legend/JAKHAU15HAC_15.png" /> JAKHAU-15 HAC.'
            });
var format_JAKHAU40HAC_16 = new ol.format.GeoJSON();
var features_JAKHAU40HAC_16 = format_JAKHAU40HAC_16.readFeatures(json_JAKHAU40HAC_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAU40HAC_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAU40HAC_16.addFeatures(features_JAKHAU40HAC_16);
var lyr_JAKHAU40HAC_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAU40HAC_16, 
                style: style_JAKHAU40HAC_16,
                popuplayertitle: 'JAKHAU-40HAC.',
                interactive: true,
                title: '<img src="styles/legend/JAKHAU40HAC_16.png" /> JAKHAU-40HAC.'
            });
var format_JAKHAU220HAC_17 = new ol.format.GeoJSON();
var features_JAKHAU220HAC_17 = format_JAKHAU220HAC_17.readFeatures(json_JAKHAU220HAC_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAU220HAC_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAU220HAC_17.addFeatures(features_JAKHAU220HAC_17);
var lyr_JAKHAU220HAC_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAU220HAC_17, 
                style: style_JAKHAU220HAC_17,
                popuplayertitle: 'JAKHAU-220 HAC.',
                interactive: true,
                title: '<img src="styles/legend/JAKHAU220HAC_17.png" /> JAKHAU-220 HAC.'
            });
var format_JAKHAUBUDIA14HAC_18 = new ol.format.GeoJSON();
var features_JAKHAUBUDIA14HAC_18 = format_JAKHAUBUDIA14HAC_18.readFeatures(json_JAKHAUBUDIA14HAC_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAUBUDIA14HAC_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAUBUDIA14HAC_18.addFeatures(features_JAKHAUBUDIA14HAC_18);
var lyr_JAKHAUBUDIA14HAC_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAUBUDIA14HAC_18, 
                style: style_JAKHAUBUDIA14HAC_18,
                popuplayertitle: 'JAKHAU-BUDIA 1- 4 HAC.',
                interactive: true,
                title: '<img src="styles/legend/JAKHAUBUDIA14HAC_18.png" /> JAKHAU-BUDIA 1- 4 HAC.'
            });
var format_JAKHAUBUDIA210HAC_19 = new ol.format.GeoJSON();
var features_JAKHAUBUDIA210HAC_19 = format_JAKHAUBUDIA210HAC_19.readFeatures(json_JAKHAUBUDIA210HAC_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAUBUDIA210HAC_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAUBUDIA210HAC_19.addFeatures(features_JAKHAUBUDIA210HAC_19);
var lyr_JAKHAUBUDIA210HAC_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAUBUDIA210HAC_19, 
                style: style_JAKHAUBUDIA210HAC_19,
                popuplayertitle: 'JAKHAU-BUDIA 2- 10 HAC.',
                interactive: true,
                title: '<img src="styles/legend/JAKHAUBUDIA210HAC_19.png" /> JAKHAU-BUDIA 2- 10 HAC.'
            });
var format_JAKHAUBUDIA328HAC_20 = new ol.format.GeoJSON();
var features_JAKHAUBUDIA328HAC_20 = format_JAKHAUBUDIA328HAC_20.readFeatures(json_JAKHAUBUDIA328HAC_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAUBUDIA328HAC_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAUBUDIA328HAC_20.addFeatures(features_JAKHAUBUDIA328HAC_20);
var lyr_JAKHAUBUDIA328HAC_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAUBUDIA328HAC_20, 
                style: style_JAKHAUBUDIA328HAC_20,
                popuplayertitle: 'JAKHAU-BUDIA 3- 28 HAC.',
                interactive: true,
                title: '<img src="styles/legend/JAKHAUBUDIA328HAC_20.png" /> JAKHAU-BUDIA 3- 28 HAC.'
            });
var format_JAKHAUBUDIA48HAC_21 = new ol.format.GeoJSON();
var features_JAKHAUBUDIA48HAC_21 = format_JAKHAUBUDIA48HAC_21.readFeatures(json_JAKHAUBUDIA48HAC_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKHAUBUDIA48HAC_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKHAUBUDIA48HAC_21.addFeatures(features_JAKHAUBUDIA48HAC_21);
var lyr_JAKHAUBUDIA48HAC_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKHAUBUDIA48HAC_21, 
                style: style_JAKHAUBUDIA48HAC_21,
                popuplayertitle: 'JAKHAU-BUDIA 4- 8 HAC.',
                interactive: true,
                title: '<img src="styles/legend/JAKHAUBUDIA48HAC_21.png" /> JAKHAU-BUDIA 4- 8 HAC.'
            });
var format_JANGI50Hac_22 = new ol.format.GeoJSON();
var features_JANGI50Hac_22 = format_JANGI50Hac_22.readFeatures(json_JANGI50Hac_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGI50Hac_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGI50Hac_22.addFeatures(features_JANGI50Hac_22);
var lyr_JANGI50Hac_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JANGI50Hac_22, 
                style: style_JANGI50Hac_22,
                popuplayertitle: 'JANGI-50 Hac.',
                interactive: true,
                title: '<img src="styles/legend/JANGI50Hac_22.png" /> JANGI-50 Hac.'
            });
var format_KANTIYAJAL20HAC_23 = new ol.format.GeoJSON();
var features_KANTIYAJAL20HAC_23 = format_KANTIYAJAL20HAC_23.readFeatures(json_KANTIYAJAL20HAC_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KANTIYAJAL20HAC_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANTIYAJAL20HAC_23.addFeatures(features_KANTIYAJAL20HAC_23);
var lyr_KANTIYAJAL20HAC_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KANTIYAJAL20HAC_23, 
                style: style_KANTIYAJAL20HAC_23,
                popuplayertitle: 'KANTIYAJAL-20 HAC.',
                interactive: true,
                title: '<img src="styles/legend/KANTIYAJAL20HAC_23.png" /> KANTIYAJAL-20 HAC.'
            });
var format_KHARICREEK145HAC_24 = new ol.format.GeoJSON();
var features_KHARICREEK145HAC_24 = format_KHARICREEK145HAC_24.readFeatures(json_KHARICREEK145HAC_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHARICREEK145HAC_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHARICREEK145HAC_24.addFeatures(features_KHARICREEK145HAC_24);
var lyr_KHARICREEK145HAC_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHARICREEK145HAC_24, 
                style: style_KHARICREEK145HAC_24,
                popuplayertitle: 'KHARI CREEK- 145 HAC.',
                interactive: true,
                title: '<img src="styles/legend/KHARICREEK145HAC_24.png" /> KHARI CREEK- 145 HAC.'
            });
var format_KHARICREEK2155HAC_25 = new ol.format.GeoJSON();
var features_KHARICREEK2155HAC_25 = format_KHARICREEK2155HAC_25.readFeatures(json_KHARICREEK2155HAC_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHARICREEK2155HAC_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHARICREEK2155HAC_25.addFeatures(features_KHARICREEK2155HAC_25);
var lyr_KHARICREEK2155HAC_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHARICREEK2155HAC_25, 
                style: style_KHARICREEK2155HAC_25,
                popuplayertitle: 'KHARI CREEK-2 155 HAC.',
                interactive: true,
                title: '<img src="styles/legend/KHARICREEK2155HAC_25.png" /> KHARI CREEK-2 155 HAC.'
            });
var format_KOTADICREEK55260HAC_26 = new ol.format.GeoJSON();
var features_KOTADICREEK55260HAC_26 = format_KOTADICREEK55260HAC_26.readFeatures(json_KOTADICREEK55260HAC_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOTADICREEK55260HAC_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOTADICREEK55260HAC_26.addFeatures(features_KOTADICREEK55260HAC_26);
var lyr_KOTADICREEK55260HAC_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOTADICREEK55260HAC_26, 
                style: style_KOTADICREEK55260HAC_26,
                popuplayertitle: 'KOTADI CREEK- 552.60 HAC.',
                interactive: true,
                title: '<img src="styles/legend/KOTADICREEK55260HAC_26.png" /> KOTADI CREEK- 552.60 HAC.'
            });
var format_KUKADSAR_6085HAC_27 = new ol.format.GeoJSON();
var features_KUKADSAR_6085HAC_27 = format_KUKADSAR_6085HAC_27.readFeatures(json_KUKADSAR_6085HAC_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KUKADSAR_6085HAC_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KUKADSAR_6085HAC_27.addFeatures(features_KUKADSAR_6085HAC_27);
var lyr_KUKADSAR_6085HAC_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KUKADSAR_6085HAC_27, 
                style: style_KUKADSAR_6085HAC_27,
                popuplayertitle: 'KUKADSAR_ 60.85 HAC.',
                interactive: true,
                title: '<img src="styles/legend/KUKADSAR_6085HAC_27.png" /> KUKADSAR_ 60.85 HAC.'
            });
var format_KUKADSAR4HAC_28 = new ol.format.GeoJSON();
var features_KUKADSAR4HAC_28 = format_KUKADSAR4HAC_28.readFeatures(json_KUKADSAR4HAC_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KUKADSAR4HAC_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KUKADSAR4HAC_28.addFeatures(features_KUKADSAR4HAC_28);
var lyr_KUKADSAR4HAC_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KUKADSAR4HAC_28, 
                style: style_KUKADSAR4HAC_28,
                popuplayertitle: 'KUKADSAR-4 HAC.',
                interactive: true,
                title: '<img src="styles/legend/KUKADSAR4HAC_28.png" /> KUKADSAR-4 HAC.'
            });
var format_LUNI286HAC_29 = new ol.format.GeoJSON();
var features_LUNI286HAC_29 = format_LUNI286HAC_29.readFeatures(json_LUNI286HAC_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUNI286HAC_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUNI286HAC_29.addFeatures(features_LUNI286HAC_29);
var lyr_LUNI286HAC_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUNI286HAC_29, 
                style: style_LUNI286HAC_29,
                popuplayertitle: 'LUNI 28.6 HAC.',
                interactive: true,
                title: '<img src="styles/legend/LUNI286HAC_29.png" /> LUNI 28.6 HAC.'
            });
var format_LUNI10HAC_30 = new ol.format.GeoJSON();
var features_LUNI10HAC_30 = format_LUNI10HAC_30.readFeatures(json_LUNI10HAC_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUNI10HAC_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUNI10HAC_30.addFeatures(features_LUNI10HAC_30);
var lyr_LUNI10HAC_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUNI10HAC_30, 
                style: style_LUNI10HAC_30,
                popuplayertitle: 'LUNI-10 HAC.',
                interactive: true,
                title: '<img src="styles/legend/LUNI10HAC_30.png" /> LUNI-10 HAC.'
            });
var format_LUNI154HAC_31 = new ol.format.GeoJSON();
var features_LUNI154HAC_31 = format_LUNI154HAC_31.readFeatures(json_LUNI154HAC_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUNI154HAC_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUNI154HAC_31.addFeatures(features_LUNI154HAC_31);
var lyr_LUNI154HAC_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUNI154HAC_31, 
                style: style_LUNI154HAC_31,
                popuplayertitle: 'LUNI-15.4 HAC.',
                interactive: true,
                title: '<img src="styles/legend/LUNI154HAC_31.png" /> LUNI-15.4 HAC.'
            });
var format_LUNI1089HAC_32 = new ol.format.GeoJSON();
var features_LUNI1089HAC_32 = format_LUNI1089HAC_32.readFeatures(json_LUNI1089HAC_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUNI1089HAC_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUNI1089HAC_32.addFeatures(features_LUNI1089HAC_32);
var lyr_LUNI1089HAC_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUNI1089HAC_32, 
                style: style_LUNI1089HAC_32,
                popuplayertitle: 'LUNI-108.9 HAC',
                interactive: true,
                title: '<img src="styles/legend/LUNI1089HAC_32.png" /> LUNI-108.9 HAC'
            });
var format_MALPUR100HAC_33 = new ol.format.GeoJSON();
var features_MALPUR100HAC_33 = format_MALPUR100HAC_33.readFeatures(json_MALPUR100HAC_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MALPUR100HAC_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MALPUR100HAC_33.addFeatures(features_MALPUR100HAC_33);
var lyr_MALPUR100HAC_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MALPUR100HAC_33, 
                style: style_MALPUR100HAC_33,
                popuplayertitle: 'MALPUR 100 HAC.',
                interactive: true,
                title: '<img src="styles/legend/MALPUR100HAC_33.png" /> MALPUR 100 HAC.'
            });
var format_NADADEVLA180HAC_34 = new ol.format.GeoJSON();
var features_NADADEVLA180HAC_34 = format_NADADEVLA180HAC_34.readFeatures(json_NADADEVLA180HAC_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NADADEVLA180HAC_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NADADEVLA180HAC_34.addFeatures(features_NADADEVLA180HAC_34);
var lyr_NADADEVLA180HAC_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NADADEVLA180HAC_34, 
                style: style_NADADEVLA180HAC_34,
                popuplayertitle: 'NADA-DEVLA- 180 HAC.',
                interactive: true,
                title: '<img src="styles/legend/NADADEVLA180HAC_34.png" /> NADA-DEVLA- 180 HAC.'
            });
var format_TALAJA50HAC_35 = new ol.format.GeoJSON();
var features_TALAJA50HAC_35 = format_TALAJA50HAC_35.readFeatures(json_TALAJA50HAC_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TALAJA50HAC_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TALAJA50HAC_35.addFeatures(features_TALAJA50HAC_35);
var lyr_TALAJA50HAC_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TALAJA50HAC_35, 
                style: style_TALAJA50HAC_35,
                popuplayertitle: 'TALAJA- 50 HAC.',
                interactive: true,
                title: '<img src="styles/legend/TALAJA50HAC_35.png" /> TALAJA- 50 HAC.'
            });
var group_MangroveSites = new ol.layer.Group({
                                layers: [lyr_BARADIMATACREEK112024HAC_3,lyr_BHADRESWAR250HAC_4,lyr_BHADRESWAR250HAC_5,lyr_BHADRESWAR750HAC_6,lyr_BOCHACREEK52811_7,lyr_DANDI85Hac200607_8,lyr_DANDI100HACMUNDRAPORTSITE_9,lyr_DANDI115Hac200607_10,lyr_DANDI100HaDahejsite_11,lyr_DEVJAGAN50HAC_12,lyr_JAKHAU2HAC_13,lyr_JAKHAU5HAC_14,lyr_JAKHAU15HAC_15,lyr_JAKHAU40HAC_16,lyr_JAKHAU220HAC_17,lyr_JAKHAUBUDIA14HAC_18,lyr_JAKHAUBUDIA210HAC_19,lyr_JAKHAUBUDIA328HAC_20,lyr_JAKHAUBUDIA48HAC_21,lyr_JANGI50Hac_22,lyr_KANTIYAJAL20HAC_23,lyr_KHARICREEK145HAC_24,lyr_KHARICREEK2155HAC_25,lyr_KOTADICREEK55260HAC_26,lyr_KUKADSAR_6085HAC_27,lyr_KUKADSAR4HAC_28,lyr_LUNI286HAC_29,lyr_LUNI10HAC_30,lyr_LUNI154HAC_31,lyr_LUNI1089HAC_32,lyr_MALPUR100HAC_33,lyr_NADADEVLA180HAC_34,lyr_TALAJA50HAC_35,],
                                fold: 'open',
                                title: 'Mangrove Sites'});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_BARADIMATACREEK112024HAC_3.setVisible(true);lyr_BHADRESWAR250HAC_4.setVisible(true);lyr_BHADRESWAR250HAC_5.setVisible(true);lyr_BHADRESWAR750HAC_6.setVisible(true);lyr_BOCHACREEK52811_7.setVisible(true);lyr_DANDI85Hac200607_8.setVisible(true);lyr_DANDI100HACMUNDRAPORTSITE_9.setVisible(true);lyr_DANDI115Hac200607_10.setVisible(true);lyr_DANDI100HaDahejsite_11.setVisible(true);lyr_DEVJAGAN50HAC_12.setVisible(true);lyr_JAKHAU2HAC_13.setVisible(true);lyr_JAKHAU5HAC_14.setVisible(true);lyr_JAKHAU15HAC_15.setVisible(true);lyr_JAKHAU40HAC_16.setVisible(true);lyr_JAKHAU220HAC_17.setVisible(true);lyr_JAKHAUBUDIA14HAC_18.setVisible(true);lyr_JAKHAUBUDIA210HAC_19.setVisible(true);lyr_JAKHAUBUDIA328HAC_20.setVisible(true);lyr_JAKHAUBUDIA48HAC_21.setVisible(true);lyr_JANGI50Hac_22.setVisible(true);lyr_KANTIYAJAL20HAC_23.setVisible(true);lyr_KHARICREEK145HAC_24.setVisible(true);lyr_KHARICREEK2155HAC_25.setVisible(true);lyr_KOTADICREEK55260HAC_26.setVisible(true);lyr_KUKADSAR_6085HAC_27.setVisible(true);lyr_KUKADSAR4HAC_28.setVisible(true);lyr_LUNI286HAC_29.setVisible(true);lyr_LUNI10HAC_30.setVisible(true);lyr_LUNI154HAC_31.setVisible(true);lyr_LUNI1089HAC_32.setVisible(true);lyr_MALPUR100HAC_33.setVisible(true);lyr_NADADEVLA180HAC_34.setVisible(true);lyr_TALAJA50HAC_35.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_GoogleHybrid_2,group_MangroveSites];
lyr_BARADIMATACREEK112024HAC_3.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_BHADRESWAR250HAC_4.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_BHADRESWAR250HAC_5.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_BHADRESWAR750HAC_6.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_BOCHACREEK52811_7.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_DANDI85Hac200607_8.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_DANDI100HACMUNDRAPORTSITE_9.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_DANDI115Hac200607_10.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_DANDI100HaDahejsite_11.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_DEVJAGAN50HAC_12.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_JAKHAU2HAC_13.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_JAKHAU5HAC_14.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_JAKHAU15HAC_15.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_JAKHAU40HAC_16.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_JAKHAU220HAC_17.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_JAKHAUBUDIA14HAC_18.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_JAKHAUBUDIA210HAC_19.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_JAKHAUBUDIA328HAC_20.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_JAKHAUBUDIA48HAC_21.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_JANGI50Hac_22.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_KANTIYAJAL20HAC_23.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_KHARICREEK145HAC_24.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_KHARICREEK2155HAC_25.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_KOTADICREEK55260HAC_26.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_KUKADSAR_6085HAC_27.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_KUKADSAR4HAC_28.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_LUNI286HAC_29.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_LUNI10HAC_30.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_LUNI154HAC_31.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_LUNI1089HAC_32.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_MALPUR100HAC_33.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_NADADEVLA180HAC_34.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_TALAJA50HAC_35.set('fieldAliases', {'Name': 'Name', 'Sr': 'Sr', 'Location': 'Location', 'Area': 'Area', });
lyr_BARADIMATACREEK112024HAC_3.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_BHADRESWAR250HAC_4.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_BHADRESWAR250HAC_5.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_BHADRESWAR750HAC_6.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_BOCHACREEK52811_7.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_DANDI85Hac200607_8.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_DANDI100HACMUNDRAPORTSITE_9.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_DANDI115Hac200607_10.set('fieldImages', {'Name': 'TextEdit', 'Sr': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', });
lyr_DANDI100HaDahejsite_11.set('fieldImages', {'Name': 'TextEdit', 'Sr': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', });
lyr_DEVJAGAN50HAC_12.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_JAKHAU2HAC_13.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_JAKHAU5HAC_14.set('fieldImages', {'Name': 'TextEdit', 'Sr': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', });
lyr_JAKHAU15HAC_15.set('fieldImages', {'Name': 'TextEdit', 'Sr': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', });
lyr_JAKHAU40HAC_16.set('fieldImages', {'Name': 'TextEdit', 'Sr': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', });
lyr_JAKHAU220HAC_17.set('fieldImages', {'Name': 'TextEdit', 'Sr': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', });
lyr_JAKHAUBUDIA14HAC_18.set('fieldImages', {'Name': 'TextEdit', 'Sr': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', });
lyr_JAKHAUBUDIA210HAC_19.set('fieldImages', {'Name': 'TextEdit', 'Sr': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', });
lyr_JAKHAUBUDIA328HAC_20.set('fieldImages', {'Name': 'TextEdit', 'Sr': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', });
lyr_JAKHAUBUDIA48HAC_21.set('fieldImages', {'Name': 'TextEdit', 'Sr': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', });
lyr_JANGI50Hac_22.set('fieldImages', {'Name': 'TextEdit', 'Sr': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', });
lyr_KANTIYAJAL20HAC_23.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_KHARICREEK145HAC_24.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_KHARICREEK2155HAC_25.set('fieldImages', {'Name': 'TextEdit', 'Sr': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', });
lyr_KOTADICREEK55260HAC_26.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_KUKADSAR_6085HAC_27.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_KUKADSAR4HAC_28.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_LUNI286HAC_29.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_LUNI10HAC_30.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_LUNI154HAC_31.set('fieldImages', {'Name': '', 'Sr': '', 'Location': '', 'Area': '', });
lyr_LUNI1089HAC_32.set('fieldImages', {'Name': 'TextEdit', 'Sr': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', });
lyr_MALPUR100HAC_33.set('fieldImages', {'Name': 'TextEdit', 'Sr': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', });
lyr_NADADEVLA180HAC_34.set('fieldImages', {'Name': 'TextEdit', 'Sr': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', });
lyr_TALAJA50HAC_35.set('fieldImages', {'Name': 'TextEdit', 'Sr': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', });
lyr_BARADIMATACREEK112024HAC_3.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_BHADRESWAR250HAC_4.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_BHADRESWAR250HAC_5.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_BHADRESWAR750HAC_6.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_BOCHACREEK52811_7.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_DANDI85Hac200607_8.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_DANDI100HACMUNDRAPORTSITE_9.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_DANDI115Hac200607_10.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_DANDI100HaDahejsite_11.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_DEVJAGAN50HAC_12.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_JAKHAU2HAC_13.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_JAKHAU5HAC_14.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_JAKHAU15HAC_15.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_JAKHAU40HAC_16.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_JAKHAU220HAC_17.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_JAKHAUBUDIA14HAC_18.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_JAKHAUBUDIA210HAC_19.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_JAKHAUBUDIA328HAC_20.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_JAKHAUBUDIA48HAC_21.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_JANGI50Hac_22.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_KANTIYAJAL20HAC_23.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_KHARICREEK145HAC_24.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_KHARICREEK2155HAC_25.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_KOTADICREEK55260HAC_26.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_KUKADSAR_6085HAC_27.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_KUKADSAR4HAC_28.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_LUNI286HAC_29.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_LUNI10HAC_30.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_LUNI154HAC_31.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_LUNI1089HAC_32.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_MALPUR100HAC_33.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_NADADEVLA180HAC_34.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_TALAJA50HAC_35.set('fieldLabels', {'Name': 'hidden field', 'Sr': 'hidden field', 'Location': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_TALAJA50HAC_35.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});