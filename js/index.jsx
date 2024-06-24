//***date function***
function currentDate(){
    var date = new Date()
    var year = date.getFullYear().toString();
    var month = (date.getMonth() +1).toString();
    var day = date.getDate().toString();
    if (month.length == 1){ month = '0' + month}
    if (day.length == 1){ day = '0' + day}
    return year + month + day
};
//***function triggered by apply button, function cooperate with resizeAply function in js*** TODO:: test dpi/dpcm
function resizeButton(){
  preferences.rulerUnits = Units.CM;
  var doc = app.activeDocument;
  doc.resizeImage(undefined, undefined, resizAply.reDpi, ResampleMethod.NONE)
}
//***main function cooperate with directory f.***
  function saveDocument(){
//var docCopy = app.activeDocument.duplicate();
//var doc = docCopy;
//
var info = app.systemInformation
    var infon = info.slice(447,453);
    var infonn = Number(infon)===49042?true:false;
    if (infonn=false){
      console.log("a")
    }
//
i=0
do{
if(fabric.saveAll==="true"){
  var doc = documents[i];
  app.activeDocument=doc;
}else{
  var doc = app.activeDocument;
};
var orginalRulerUnits = preferences.rulerUnits; // has to be in the function
//preferences.rulerUnits = Units.PIXELS;
preferences.rulerUnits = Units.CM;
var doc = app.activeDocument;
var name = fabric.newName.length>0? fabric.newName:doc.name;// when input is filled name = value of the input if not name = origin name of the file
var repetition = fabric.repetition//from radio buttons

var nameArr = name.split("-"); //array from name
var docRes = doc.resolution.toFixed(0);

if(fabric.closeF=="true"){
  fabric.reDpi = nameArr[4]
}
//var six = nameArr[6].includes('(');



//if(nameArr[3]!=docRes){
//  alert("incorrect dpi")
//}

doc.flatten(); //flats whole file 

if (fabric.fabric==='silk satin'|| fabric.fabric==='silk twill'|| fabric.fabric==='silk crepe'){
  doc.changeMode(ChangeMode.RGB);
  doc.colorProfileName='sRGB IEC61966-2.1';
  doc.bitsPerChannel=BitsPerChannelType.EIGHT
  //var aaa = doc.bitsPerChannel;
  //doc.colorProfileName='sRGB IEC61966-2.1';
}else if (fabric.fabric==='REA J200'|| fabric.fabric==='REA P250'){
  doc.changeMode(ChangeMode.RGB);
  doc.colorProfileName='Adobe RGB (1998)';
}
else{
doc.changeMode(ChangeMode.CMYK); //converts to cmyk
doc.colorProfileName='U.S. Web Coated (SWOP) v2';}//printing profile 
//doc.changeMode(ChangeMode.CMYK); //converts to cmyk
//doc.colorProfileName='U.S. Web Coated (SWOP) v2';//printing profile 
//var subfolder = fabric.newPath
//true DRUK else WYCENA
if(fabric.printingItem === "true"){
//if(i == 0){
doc.resizeImage(undefined, undefined, fabric.reDpi, ResampleMethod.NONE)//resize by dpi
//doc.resizeImage(undefined, undefined, 10, ResampleMethod.NONE)//resize by dpi
//var res = doc.resolution.toFixed(0)//needed to name
//here try resampling to 300dpi
//var fileName = 'DRUK-' + currentDate() + '-' + name +'-'+res+'-'+repetition ;//name for DRUK
var fileName = name;//name for DRUK
if (fabric.fabric == 'kreton') {var path = "Y:\\_pliki-zamowienia\\!KRETON";
} else if(fabric.fabric == 'satyna') {var path = "Y:\\_pliki-zamowienia\\!SATYNA";
} else if(fabric.fabric == 'woal') {var path = "Y:\\_pliki-zamowienia\\!WOAL";
} else if(fabric.fabric == 'half panama') {var path = "Y:\\_pliki-zamowienia\\!ORGANIC HALF-PANAMA";
} else if(fabric.fabric == 'panama') {var path = "Y:\\_pliki-zamowienia\\!PANAMA";
} else if(fabric.fabric == 'gabardyna') {var path = "Y:\\_pliki-zamowienia\\!GABARDYNA";
} else if(fabric.fabric == 'jersey 170') {var path = "Y:\\_pliki-zamowienia\\!JERSEY 170";
} else if(fabric.fabric == 'jersey 200') {var path = "Y:\\_pliki-zamowienia\\!JERSEY 200";
} else if(fabric.fabric == 'jersey 230') {var path = "Y:\\_pliki-zamowienia\\!JERSEY 230";
} else if(fabric.fabric == 'interlock') {var path = "Y:\\_pliki-zamowienia\\!INTERLOCK";
} else if(fabric.fabric == 'pętelka 250') {var path = "Y:\\_pliki-zamowienia\\!PĘTELKA 250";
} else if(fabric.fabric == 'pętelka 300') {var path = "Y:\\_pliki-zamowienia\\!PĘTELKA 300";
} else if(fabric.fabric == 'BIO satyna') {var path = "Y:\\_pliki-zamowienia\\!ORGANIC SATYNA";
} else if(fabric.fabric == 'BIO jersey 200') {var path = "Y:\\_pliki-zamowienia\\!ORGANIC JERSEY 200";
} else if(fabric.fabric == 'MRC Satyna') {var path = "Y:\\_pliki-zamowienia\\!SATYNA MERCERYZOWANA";
} else if(fabric.fabric == 'BIO popelina') {var path = "Y:\\_pliki-zamowienia\\!ORGANIC POPELINA";
} else if(fabric.fabric == 'ORG Canvas') {var path = "Y:\\_pliki-zamowienia\\!ORGANIC CANVAS";
} else if(fabric.fabric == 'ORG Perkal') {var path = "Y:\\_pliki-zamowienia\\!ORGANIC PERKAL";
} else if(fabric.fabric == 'BIO pętelka 250') {var path = "Y:\\_pliki-zamowienia\\!ORGANIC PĘTELKA 250";
} else if(fabric.fabric == 'ORGDRILL') {var path = "Y:\\_pliki-zamowienia\\!ORGANIC DRILL";
} else if(fabric.fabric == 'ORGŚCIAGACZ') {var path = "Y:\\_pliki-zamowienia\\!ORGANIC ŚCIĄGACZ";
} else if(fabric.fabric == 'Wafel') {var path = "Y:\\_pliki-zamowienia\\!WAFEL";
} else if(fabric.fabric == 'SOFTSHELL') {var path = "Y:\\_pliki-zamowienia\\!SOFTSHELL WODOODPORNY";
} else if(fabric.fabric == 'sport lycra') {var path = "Y:\\_pliki-zamowienia\\!SPORT LYCRA JERSEY";
} else if(fabric.fabric == 'ortalion') {var path = "Y:\\_pliki-zamowienia\\!ORTALION WODOODPORNY";
} else if(fabric.fabric == 'ortalion') {var path = "Y:\\_pliki-zamowienia\\!ORTALION WODOODPORNY";
} else if(fabric.fabric == 'welur') {var path = "Y:\\_pliki-zamowienia\\!WELUR";
} else if(fabric.fabric == 'pumka') {var path = "Y:\\_pliki-zamowienia\\!MESH SOFT";
} else if(fabric.fabric == 'kodura') {var path = "Y:\\_pliki-zamowienia\\!KODURA OUTDOOR";
} else if(fabric.fabric == 'Push Up Dres 300') {var path = "Y:\\_pliki-zamowienia\\!LEGGINS LYCRA JERSEY";
} else if(fabric.fabric == 'Elanka') {var path = "Y:\\_pliki-zamowienia\\!ELANA";
} else if(fabric.fabric == 'Łezka S-14') {var path = "Y:\\_pliki-zamowienia\\!MESH ŁEZKA";
} else if(fabric.fabric == 'Mesh') {var path = "Y:\\_pliki-zamowienia\\!MESH STRETCH";
} else if(fabric.fabric == 'Super Fit') {var path = "Y:\\_pliki-zamowienia\\!SWIMWEAR LYCRA JERSEY";
} else if(fabric.fabric == 'Podszewka matowa') {var path = "Y:\\_pliki-zamowienia\\!PODSZEWSKA MATOWA";
} else if(fabric.fabric == 'Podszewka satynowa') {var path = "Y:\\_pliki-zamowienia\\!PODSZEWSKA SATYNOWA";
} else if(fabric.fabric == 'szyfon') {var path = "Y:\\_pliki-zamowienia\\!SZYFON";
} else if(fabric.fabric == 'modern jersey') {var path = "Y:\\_pliki-zamowienia\\!MODERN JERSEY";
} else if(fabric.fabric == 'tkanina sukienkowa') {var path = "Y:\\_pliki-zamowienia\\!DRESS FABRIC";
} else if(fabric.fabric == 'birdseye') {var path = "Y:\\_pliki-zamowienia\\!PAWIE OKO";
} else if(fabric.fabric == 'viscose') {var path = "Y:\\_pliki-zamowienia\\!WISKOZA";
} else if(fabric.fabric == 'muślin double') {var path = "Y:\\_pliki-zamowienia\\!MUŚLIN";
} else if(fabric.fabric == 'silk satin') {var path = "Y:\\_pliki-zamowienia\\!JEDWAB SATYNA";
} else if(fabric.fabric == 'silk twill') {var path = "Y:\\_pliki-zamowienia\\!JEDWAB TWILL";
} else if(fabric.fabric == 'silk crepe') {var path = "Y:\\_pliki-zamowienia\\!JEDWAB KREPA";
} else if(fabric.fabric == 'popelina') {var path = "Y:\\_pliki-zamowienia\\!POPELINA";
} else if(fabric.fabric == 'REA J200') {var path = "Y:\\_pliki-zamowienia\\!REAKTYWNA J200";
} else if(fabric.fabric == 'REA P250') {var path = "Y:\\_pliki-zamowienia\\!REAKTYWNA P250";
} else if(fabric.fabric == 'sherpa fleece') {var path = "Y:\\_pliki-zamowienia\\!SHERPA FLEECE";
} else if(fabric.fabric == 'velvet stretch') {var path = "Y:\\_pliki-zamowienia\\!VELVET STRETCH";

} else if(fabric.fabric == 'test') {var path = "Y:\\_pliki-zamowienia\\!TEST";
//Y:\_pliki-zamowienia\single_org_200\82860-268516-standard-single_org_200-300-m-12_0.tif
//var widthpp = doc.width*(1+0.5)
//var heightpp= doc.height*(1+0.5)
//doc.resizeImage(doc.width*(1+0.005) , doc.height*(1+0.005))
}
//doc.resizeImage( 5, 5 , undefined, ResampleMethod.NONE)
//alert("true" + path + fileName);
var f = new Folder( path + '/'+ fabric.newPath ); //***creates subfolder 
if (fabric.newPath.length>0 && !f.exists) { f.create()};// if newPath exist and folder doesn't exist, creats folder 
var subfolder = fabric.newPath.length>0? path + '/'+ fabric.newPath:path;//if for path
var file = new File(subfolder + '/' + fileName); //new file 
                opts = new TiffSaveOptions();
                opts.imageCompression = TIFFEncoding.TIFFLZW;//save options
                doc.saveAs(file, opts, false);//true save as copy false save as original PROBABLY
}else{
var fileName = name; //name for WYCENA

if (fabric.fabric == 'kreton') {var path = "Y:\\_pliki-zamowienia\\!KRETON\\wycena"; 
} else if(fabric.fabric == 'satyna') {var path = "Y:\\_pliki-zamowienia\\!SATYNA\\wycena";
} else if(fabric.fabric == 'woal') {var path = "Y:\\_pliki-zamowienia\\!WOAL\\wycena";
} else if(fabric.fabric == 'sofia') {var path = "Y:\\_pliki-zamowienia\\!SOFIA\\wycena";
} else if(fabric.fabric == 'panama') {var path = "Y:\\_pliki-zamowienia\\!ORGANIC HALF-PANAMA\\wycena";
} else if(fabric.fabric == 'gabardyna') {var path = "Y:\\_pliki-zamowienia\\!GABARDYNA\\wycena";
} else if(fabric.fabric == 'jersey 170') {var path = "Y:\\_pliki-zamowienia\\!JERSEY 170\\wycena";
} else if(fabric.fabric == 'jersey 200') {var path = "Y:\\_pliki-zamowienia\\!JERSEY 200\\wycena";
} else if(fabric.fabric == 'jersey 230') {var path = "Y:\\_pliki-zamowienia\\!JERSEY 230\\wycena";
} else if(fabric.fabric == 'interlock') {var path = "Y:\\_pliki-zamowienia\\!INTERLOCK\\wycena";
} else if(fabric.fabric == 'pętelka 250') {var path = "Y:\\_pliki-zamowienia\\!PĘTELKA 250\\wycena";
} else if(fabric.fabric == 'pętelka 300') {var path = "Y:\\_pliki-zamowienia\\!PĘTELKA 300\\wycena";
} else if(fabric.fabric == 'BIO satyna') {var path = "Y:\\_pliki-zamowienia\\!ORGANIC SATYNA\\wycena";
} else if(fabric.fabric == 'BIO jersey 200') {var path = "Y:\\_pliki-zamowienia\\!ORGANIC JERSEY 200\\wycena";
} else if(fabric.fabric == 'BIO pętelka 250') {var path = "Y:\\_pliki-zamowienia\\!!ORGANIC PĘTELKA 250\\wycena";

}
var f = new Folder( path + '/'+currentDate()+ '/'+ fabric.newPath ); //***needed for subfolder name
if (!f.exists) { f.create()};
var file = new File(f + '/' + fileName);
                opts = new TiffSaveOptions();
                opts.imageCompression = TIFFEncoding.TIFFLZW; //save options
                doc.saveAs(file, opts, false);}//true save as copy false save as original PROBABLY
//references.rulerUnits = Units.PIXELS
alert('The file has been saved.' + 
'\n name: '+ fileName + //One file name for DRUK and WYCENA
'\n dpi: '+doc.resolution + 
'\n size: '+ Number(doc.width).toFixed(2)+' cm' +' x '+ Number(doc.height).toFixed(2)+' cm'+
'\n path: '+doc.path);
  beep();
  i++;
}while(fabric.saveAll==="true" && i<app.documents.length)
//var doc = docCopy;

//if(fabric.closeFile === "true"){doc.close(SaveOptions.DONOTSAVECHANGES)}; ***needed for closeFile
  }
  //***function to retrieve data from file and insert along panel, collaborate with inner function from js*** TODO: add ale directorys and exceptions
  function getDocData(){
    preferences.rulerUnits = Units.PIXELS;//to retrieve pixel dimension of file
    var width = app.activeDocument.width;//to retrieve pixel dimension of file
    var height = app.activeDocument.height;//to retrieve pixel dimension of file
    preferences.rulerUnits = Units.CM;//dimension in cm
    var widthCM = app.activeDocument.width;//dimension in cm
    var heightCM = app.activeDocument.height;//dimension in cm
    var name = app.activeDocument.name;//change variable name
    try{//fabric.fabric only available after trigger the directory function// only for WYCENA
      if (fabric.fabric == 'kreton') {var mat = "Z:\\_pliki-zamowienia\\!KRETON\\wycena"; 
} else if(fabric.fabric == 'satyna') {var mat = "Z:\\_pliki-zamowienia\\!SATYNA\\wycena";
} else if(fabric.fabric == 'woal') {var mat = "Z:\\_pliki-zamowienia\\!WOAL\\wycena";
} else if(fabric.fabric == 'sofia') {var mat = "Z:\\_pliki-zamowienia\\!ORGANIC HALF-PANAMA\\wycena";
} else if(fabric.fabric == 'panama') {var mat = "Z:\\_pliki-zamowienia\\!PANAMA\\wycena";
} else if(fabric.fabric == 'gabardyna') {var mat = "Z:\\_pliki-zamowienia\\!GABARDYNA\\wycena";
} else if(fabric.fabric == 'jersey 170') {var mat = "Z:\\_pliki-zamowienia\\!JERSEY 170\\wycena";
} else if(fabric.fabric == 'jersey 200') {var mat = "Z:\\_pliki-zamowienia\\!JERSEY 200\\wycena";
} else if(fabric.fabric == 'jersey 230') {var mat = "Z:\\_pliki-zamowienia\\!JERSEY 230\\wycena";
} else if(fabric.fabric == 'interlock') {var mat = "Z\\_pliki-zamowienia\\!INTERLOCK\\wycena";
} else if(fabric.fabric == 'pętelka 250') {var mat = "Z:\\_pliki-zamowienia\\!PĘTELKA 250\\wycena";
} else if(fabric.fabric == 'pętelka 330') {var mat = "Z:\\_pliki-zamowienia\\!PĘTELKA 330\\wycena";
} else if(fabric.fabric == 'BIO satyna') {var mat = "Z:\\_pliki-zamowienia\\!ORGANIC SATYNA\\wycena";
} else if(fabric.fabric == 'BIO jersey 200') {var mat = "Z:\\_pliki-zamowienia\\!ORGANIC JERSEY 200\\wycena";
} else if(fabric.fabric == 'BIO pętelka 250') {var mat = "Z:\\_pliki-zamowienia\\!!ORGANIC PĘTELKA 250\\wycena";
};
  } catch(e) {
    var mat = 'first save the world'; //instead path for original file
  };
    try{//when not embedded throws error
      var printingProfile = app.activeDocument.colorProfileName;  
  } catch(e) {  
      var printingProfile = "not embedded";  
  };
    var colorType = app.activeDocument.mode;//cmyk/other
    var reso= app.activeDocument.resolution;
    var pathto = app.activeDocument.path;
    var allOpen= app.documents.length;

    var sender= (''+width+'§'+height+'§'+reso+'§'+printingProfile+'§'+colorType+'§'+name+'§'+currentDate()+'§'+mat+'§'+widthCM+'§'+heightCM+'§'+pathto+'§'+allOpen+'');
    return sender //sender changes at array in the inner function
    };
//preferences.rulerUnits = Units.CM