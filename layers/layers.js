var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Regions_APCA_1 = new ol.format.GeoJSON();
var features_Regions_APCA_1 = format_Regions_APCA_1.readFeatures(json_Regions_APCA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regions_APCA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regions_APCA_1.addFeatures(features_Regions_APCA_1);
var lyr_Regions_APCA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Regions_APCA_1, 
                style: style_Regions_APCA_1,
                interactive: true,
    title: 'Regions_APCA<br />\
    <img src="styles/legend/Regions_APCA_1_0.png" /> Antelope Valley<br />\
    <img src="styles/legend/Regions_APCA_1_1.png" /> Central LA<br />\
    <img src="styles/legend/Regions_APCA_1_2.png" /> Eastside/East LA<br />\
    <img src="styles/legend/Regions_APCA_1_3.png" /> Long Beach<br />\
    <img src="styles/legend/Regions_APCA_1_4.png" /> Pomona Valley<br />\
    <img src="styles/legend/Regions_APCA_1_5.png" /> San Fernando Valley<br />\
    <img src="styles/legend/Regions_APCA_1_6.png" /> San Gabriel Valley East<br />\
    <img src="styles/legend/Regions_APCA_1_7.png" /> San Gabriel Valley West<br />\
    <img src="styles/legend/Regions_APCA_1_8.png" /> Santa Clarita<br />\
    <img src="styles/legend/Regions_APCA_1_9.png" /> South Bay East<br />\
    <img src="styles/legend/Regions_APCA_1_10.png" /> South Bay West<br />\
    <img src="styles/legend/Regions_APCA_1_11.png" /> South LA<br />\
    <img src="styles/legend/Regions_APCA_1_12.png" /> Southeast LA<br />\
    <img src="styles/legend/Regions_APCA_1_13.png" /> West LA<br />\
    <img src="styles/legend/Regions_APCA_1_14.png" /> <br />'
        });

lyr_ESRIStandard_0.setVisible(true);lyr_Regions_APCA_1.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_Regions_APCA_1];
lyr_Regions_APCA_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAME': 'NAME', 'GEOID_1': 'GEOID_1', 'Pct_vacant': 'Pct_vacant', 'Pct_threeo': 'Pct_threeo', 'Pct_renter': 'Pct_renter', 'Pct_crowde': 'Pct_crowde', 'Pct_nonfam': 'Pct_nonfam', 'Pct_foreig': 'Pct_foreig', 'Pct_not_HS': 'Pct_not_HS', 'Pct_150pov': 'Pct_150pov', 'Pct_assist': 'Pct_assist', 'Pct_civili': 'Pct_civili', 'Pct_langua': 'Pct_langua', 'Pct_moved_': 'Pct_moved_', 'Pct_childr': 'Pct_childr', 'CAHTCI_202': 'CAHTCI_202', 'bb_descrip': 'bb_descrip', 'County_nam': 'County_nam', 'Mail_Retur': 'Mail_Retur', 'Low_Respon': 'Low_Respon', 'pop_densit': 'pop_densit', 'occ_hsng_u': 'occ_hsng_u', 'total_popu': 'total_popu', 'Hispanic_L': 'Hispanic_L', 'White': 'White', 'Black_or_A': 'Black_or_A', 'AIAN': 'AIAN', 'Asian': 'Asian', 'NHPI': 'NHPI', 'SOR': 'SOR', 'Two_or_mor': 'Two_or_mor', 'Overlapped': 'Overlapped', 'AD_overlap': 'AD_overlap', 'SD_overlap': 'SD_overlap', 'CD_overlap': 'CD_overlap', 'PCT_HU_TEA': 'PCT_HU_TEA', 'PCT_HU_T_1': 'PCT_HU_T_1', 'INTERNET': 'INTERNET', 'LANGUAGE_': 'LANGUAGE_', 'top1': 'top1', 'top2': 'top2', 'top3': 'top3', 'county_fip': 'county_fip', 'Region_no': 'Region_no', 'fact_sheet': 'fact_sheet', 'region': 'region', 'region_ap': 'region_ap', 'regname_ap': 'regname_ap', });
lyr_Regions_APCA_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'NAME': 'TextEdit', 'GEOID_1': 'TextEdit', 'Pct_vacant': 'TextEdit', 'Pct_threeo': 'TextEdit', 'Pct_renter': 'TextEdit', 'Pct_crowde': 'TextEdit', 'Pct_nonfam': 'TextEdit', 'Pct_foreig': 'TextEdit', 'Pct_not_HS': 'TextEdit', 'Pct_150pov': 'TextEdit', 'Pct_assist': 'TextEdit', 'Pct_civili': 'TextEdit', 'Pct_langua': 'TextEdit', 'Pct_moved_': 'TextEdit', 'Pct_childr': 'TextEdit', 'CAHTCI_202': 'TextEdit', 'bb_descrip': 'TextEdit', 'County_nam': 'TextEdit', 'Mail_Retur': 'TextEdit', 'Low_Respon': 'TextEdit', 'pop_densit': 'TextEdit', 'occ_hsng_u': 'TextEdit', 'total_popu': 'TextEdit', 'Hispanic_L': 'TextEdit', 'White': 'TextEdit', 'Black_or_A': 'TextEdit', 'AIAN': 'TextEdit', 'Asian': 'TextEdit', 'NHPI': 'TextEdit', 'SOR': 'TextEdit', 'Two_or_mor': 'TextEdit', 'Overlapped': 'TextEdit', 'AD_overlap': 'TextEdit', 'SD_overlap': 'TextEdit', 'CD_overlap': 'TextEdit', 'PCT_HU_TEA': 'TextEdit', 'PCT_HU_T_1': 'TextEdit', 'INTERNET': 'TextEdit', 'LANGUAGE_': 'TextEdit', 'top1': 'TextEdit', 'top2': 'TextEdit', 'top3': 'TextEdit', 'county_fip': 'TextEdit', 'Region_no': 'TextEdit', 'fact_sheet': 'TextEdit', 'region': 'TextEdit', 'region_ap': 'TextEdit', 'regname_ap': 'TextEdit', });
lyr_Regions_APCA_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'NAME': 'no label', 'GEOID_1': 'no label', 'Pct_vacant': 'no label', 'Pct_threeo': 'no label', 'Pct_renter': 'no label', 'Pct_crowde': 'no label', 'Pct_nonfam': 'no label', 'Pct_foreig': 'no label', 'Pct_not_HS': 'no label', 'Pct_150pov': 'no label', 'Pct_assist': 'no label', 'Pct_civili': 'no label', 'Pct_langua': 'no label', 'Pct_moved_': 'no label', 'Pct_childr': 'no label', 'CAHTCI_202': 'no label', 'bb_descrip': 'no label', 'County_nam': 'no label', 'Mail_Retur': 'no label', 'Low_Respon': 'no label', 'pop_densit': 'no label', 'occ_hsng_u': 'no label', 'total_popu': 'no label', 'Hispanic_L': 'no label', 'White': 'no label', 'Black_or_A': 'no label', 'AIAN': 'no label', 'Asian': 'no label', 'NHPI': 'no label', 'SOR': 'no label', 'Two_or_mor': 'no label', 'Overlapped': 'no label', 'AD_overlap': 'no label', 'SD_overlap': 'no label', 'CD_overlap': 'no label', 'PCT_HU_TEA': 'no label', 'PCT_HU_T_1': 'no label', 'INTERNET': 'no label', 'LANGUAGE_': 'no label', 'top1': 'no label', 'top2': 'no label', 'top3': 'no label', 'county_fip': 'no label', 'Region_no': 'no label', 'fact_sheet': 'no label', 'region': 'no label', 'region_ap': 'no label', 'regname_ap': 'header label', });
lyr_Regions_APCA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});