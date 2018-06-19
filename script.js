var numClicks = 0; 

function loadNextCompany(direction){

    $.getJSON( "companies.json", function( data ) {
        
        $("#cultureInfo").replaceWith( "<p id='cultureInfo'><i>" + data[numClicks].Culture + "</i></p>");
        $("#sizeInfo").replaceWith( "<p id='sizeInfo'><i>" + data[numClicks].Size + " employees </i></p>");
        $("#industryInfo").replaceWith( "<p id='industryInfo'><i>" + data[numClicks].Industry + "</i></p>");
        $("#advancementInfo").replaceWith( "<p id='advancementInfo'><i>" + data[numClicks].Advancement + "</i></p>");
        $("#salaryInfo").replaceWith( "<p id='salaryInfo'><i> $" + data[numClicks].Salary + " USD </i></p>");
        $("#benefitsInfo").replaceWith( "<p id='benefitsInfo'><i>" + data[numClicks].Benefits + "</i></p>");
        $("#vacationInfo").replaceWith( "<p id='vacationInfo'><i>" + data[numClicks].Vacation + " days</i></p>");
        $("#hourInfo").replaceWith( "<p id='hourInfo'><i>" + data[numClicks].Hours + " per week </i></p>");
        $("#typeInfo").replaceWith( "<p id='typeInfo'><i>" + data[numClicks].Type + "</i></p>");
        $("#functionInfo").replaceWith( "<p id='functionInfo'><i>" + data[numClicks].Function + "</i></p>");
        $("#commuteInfo").replaceWith( "<p id='commuteInfo'><i>" + data[numClicks].Commute + " minutes </i></p>");
        $("#personalSkillsInfo").replaceWith( "<p id='personalSkillsInfo'><i>" + data[numClicks].Personal + "</i></p>");
        $("#technicalSkillsInfo").replaceWith( "<p id='technicalSkillsInfo'><i>" + data[numClicks].Technical + "</i></p>");
        $("#yearsInfo").replaceWith( "<p id='yearsInfo'><i>" + data[numClicks].Experience + " years</i></p>");
        
        cultureWFA(direction);
        sizeAnalysis(direction);
        industryWFA(direction);
        advancementWFA(direction);
        
        numClicks++;
        
    });
}




function WFAMain(arr, map, idTags){
        arr.forEach(function(w) {
            if (!map[w]) {
                map[w] = 0;
            }
            map[w] += 1;
        });

        map = sortMapByValue(map);

        var idTagNum = 0;

        for (var key in map) {
            if (map.hasOwnProperty(key)) {
                $("#" + idTags[idTagNum]).replaceWith( "<p id=" + idTags[idTagNum] + ">" + key + ":   " + 

                                                        Math.round( (100*(map[key] / (numClicks) ) ) * 100) / 100 

                                                        + "% </p>");
            }
            idTagNum++
        }


}
//Used from https://gist.github.com/danyaljj/59e225db86b29c6762c1
function sortMapByValue(map) {
    var tupleArray = [];
    for (var key in map) tupleArray.push([key, map[key]]);
    tupleArray.sort(function (a, b) {
        return b[1] - a[1]
    });
    var sortedMap = {};
    tupleArray.forEach(function (el) {
        sortedMap[el[0]] = el[1]
    });
    return sortedMap;
}



//CULTURE TERMS ANALYSIS
var lfreqMap = {};
var lCultureTags = ["aWordOne", "aWordTwo", "aWordThree", "aWordFour", "aWordFive", "aWordSix", "aWordSeven", "aWordEight", "aWordNine", "aWordTen"];

var rfreqMap = {};
var rCultureTags = ["rWordOne", "rWordTwo", "rWordThree", "rWordFour", "rWordFive", "rWordSix", "rWordSeven", "rWordEight", "rWordNine", "rWordTen"];

function cultureWFA(direction){
    if (direction === "right"){
        $.getJSON( "companies.json", function( data ) {
            var arr = data[numClicks-1].Culture.split(",");
            WFAMain(arr, lfreqMap, lCultureTags);
        });
    }
    if (direction === "left"){
        $.getJSON( "companies.json", function( data ) {
            var arr = data[numClicks-1].Culture.split(",");
            WFAMain(arr, rfreqMap, rCultureTags);
        });
    }
    
}


//SIZE ANALYSIS
var lsizeArr = [0,0,0,0,0,0];
var rsizeArr =[0,0,0,0,0,0];
function sizeAnalysis(direction){
    
    $.getJSON( "companies.json", function( data ) {
        var currSize = data[numClicks-1].Size;
        
        if (direction === "left"){
            if (currSize < 11){
                lsizeArr[0]++
            }
            else if(currSize < 51){
                 lsizeArr[1]++   
            }
            else if(currSize < 101){
                 lsizeArr[2]++   
            }
            else if(currSize < 501){
                 lsizeArr[3]++   
            }
            else if(currSize < 1001){
                 lsizeArr[4]++
            }
            else{
                 lsizeArr[5]++   
            } 
            
            var idTags = ["lSizeOne", "lSizeTwo", "lSizeThree", "lSizeFour", "lSizeFive", "lSizeSix"];
            var companySizes = ["0 - 10", "10 - 50", "50 - 100", "100 - 500", "500 - 1000", "1000+"];
            
            for (var x = 0; x < idTags.length; x++){
                
                $("#" + idTags[x]).replaceWith( "<p id=" + idTags[x] + ">" + companySizes[x] + ": " + 

                                                                Math.round( (100*(lsizeArr[x] / (numClicks) ) ) * 100) / 100 

                                                                + "% </p>");
            }
        }
        if (direction === "right"){
            var currSize = data[numClicks-1].Size;
            
            if (currSize < 11){
                rsizeArr[0]++
            }
            else if(currSize < 51){
                 rsizeArr[1]++   
            }
            else if(currSize < 101){
                 rsizeArr[2]++   
            }
            else if(currSize < 501){
                 rsizeArr[3]++   
            }
            else if(currSize < 1001){
                 rsizeArr[4]++
            }
            else{
                 rsizeArr[5]++   
            } 
            
            var idTags = ["rSizeOne", "rSizeTwo", "rSizeThree", "rSizeFour", "rSizeFive", "rSizeSix"];
            var companySizes = ["0 - 10", "10 - 50", "50 - 100", "100 - 500", "500 - 1000", "1000+"];

            for (var x = 0; x < idTags.length; x++){
                
                $("#" + idTags[x]).replaceWith( "<p id=" + idTags[x] + ">" + companySizes[x] + ": " + 

                                                                Math.round( (100*(rsizeArr[x] / (numClicks) ) ) * 100) / 100 

                                                                + "% </p>");
            }
        }
        

    });
}



//INDUSTRY ANALYSIS
var lfreqIndustryMap = {};
var lIndustryTags = ["iOne", "iTwo", "iThree", "iFour", "iFive", "iSix"];

var rfreqIndustryMap = {};
var rIndustryTags = ["irOne", "irTwo", "irThree", "irFour", "irFive", "irSix"];

function industryWFA(direction){
    if (direction === "left"){
        $.getJSON( "companies.json", function( data ) {
            var arr = data[numClicks-1].Industry.split(",");
            WFAMain(arr, lfreqIndustryMap, lIndustryTags);
        });
    }
    if (direction === "right"){
        $.getJSON( "companies.json", function( data ) {
            var arr = data[numClicks-1].Industry.split(",");
            WFAMain(arr, rfreqIndustryMap, rIndustryTags);
        });
    }
}



//Advancement Analysis
var lfreqAdvMap = {};
var lAdvTags = ["advOne", "advTwo", "advThree", "advFour", "advFive", "advSix"];

var rfreqAdvMap = {};
var rAdvTags = ["advrOne", "advrTwo", "advrThree", "advrFour", "advrFive", "advrSix"];

function advancementWFA(direction){
    if (direction === "left"){
        $.getJSON( "companies.json", function( data ) {
            var arr = data[numClicks-1].Advancement.split(",");
            WFAMain(arr, lfreqAdvMap, lAdvTags);
        });
    }
    if (direction === "right"){
        $.getJSON( "companies.json", function( data ) {
            var arr = data[numClicks-1].Advancement.split(",");
            WFAMain(arr, rfreqAdvMap, rAdvTags);
        });
    }
}
