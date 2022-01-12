#target photoshop
(function colorConvertFolder(){
    folderObj = Folder.selectDialog("select folder");
    fileList = folderObj.getFiles("*.psd");
    for (i=0,imax= fileList.length; i<imax;i++ ){
        fileObj = new File(fileList[i]);
        open(fileObj);
        activeDocument.printOneCopy(); 
        activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }
})();
