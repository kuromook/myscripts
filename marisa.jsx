// 出力先ディレクトリ指定
var export_dir = "~/tmp/";
// 顔パーツの差分、それぞれを出力する
var faces = ["怒", "乗っ取り", "困惑", "欲情", "通常"];
// オプション差分、それそれ有り無しバージョンを出力する
var options = ["back hair","boots"];

docObj = activeDocument;

function export_file(export_path){
    fileObj = new File(export_path + ".jpg");
    jpegOpt = new JPEGSaveOptions();
    jpegOpt.embedColorProfile = true;
    jpegOpt.quality = 10;
    jpegOpt.formatOptions = FormatOptions.PROGRESSIVE;
    jpegOpt.scans = 3;
    jpegOpt.matte = MatteType.NONE;
    activeDocument.saveAs(fileObj, jpegOpt, true, Extension.LOWERCASE);
}

function export_options(option_name){
    for(var i=0; i < faces.length; i++){
        for(var j=0; j < faces.length; j++){
             docObj.layerSets["character"].layerSets["Face"].layers[faces[j]].visible = false;
            }
        docObj.layerSets["character"].layerSets["Face"].layers[faces[i]].visible = true;
        export_file(export_dir + option_name + faces[i]);
    }        
}


    docObj.layerSets["character"].layers[options[0]].visible = true;
    docObj.layerSets["character"].layers[options[1]].visible = true;
    export_options("hair-boots");

    docObj.layerSets["character"].layers[options[0]].visible = true;
    docObj.layerSets["character"].layers[options[1]].visible = false;
    export_options("hair-noboots");
 
    docObj.layerSets["character"].layers[options[0]].visible = false;
    docObj.layerSets["character"].layers[options[1]].visible = true;
    export_options("nohair-boots");

    docObj.layerSets["character"].layers[options[0]].visible = false;
    docObj.layerSets["character"].layers[options[1]].visible = false;
    export_options("nohair-noboots");

