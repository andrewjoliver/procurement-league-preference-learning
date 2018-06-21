var numClicksLeft = 0;
var numClicksRight = 0;
var numClicks = numClicksLeft + numClicksRight;
var masterArr = [];



function loadNextCompany(direction){
    if (numClicks == 97){
            printData();
            numClicksLeft = 0;
            numClicksRight = 0;
            numClicks = numClicksLeft + numClicksRight;
            return;
    }
    $.getJSON( "companies.json", function( data ) {        
        $("#internalHeader").replaceWith( '<p id="internalHeader"><u><b>Company Name: ' + data[numClicks+1].Company + '</b></u></p>');
        $("#cultureInfo").replaceWith( "<p id='cultureInfo'><i>" + data[numClicks+1].Culture + "</i></p>");
        $("#sizeInfo").replaceWith( "<p id='sizeInfo'><i>" + data[numClicks+1].Size + " employees </i></p>");
        $("#industryInfo").replaceWith( "<p id='industryInfo'><i>" + data[numClicks+1].Industry + "</i></p>");
        $("#advancementInfo").replaceWith( "<p id='advancementInfo'><i>" + data[numClicks+1].Advancement + "</i></p>");
        $("#salaryInfo").replaceWith( "<p id='salaryInfo'><i> $" + data[numClicks+1].Salary + " USD </i></p>");
        $("#benefitsInfo").replaceWith( "<p id='benefitsInfo'><i>" + data[numClicks+1].Benefits + "</i></p>");
        $("#vacationInfo").replaceWith( "<p id='vacationInfo'><i>" + data[numClicks+1].Vacation + " days</i></p>");
        $("#hourInfo").replaceWith( "<p id='hourInfo'><i>" + data[numClicks+1].Hours + " per week </i></p>");
        $("#typeInfo").replaceWith( "<p id='typeInfo'><i>" + data[numClicks+1].Type + "</i></p>");
        $("#functionInfo").replaceWith( "<p id='functionInfo'><i>" + data[numClicks+1].Function + "</i></p>");
        $("#commuteInfo").replaceWith( "<p id='commuteInfo'><i>" + data[numClicks+1].Commute + " minutes </i></p>");
        $("#personalSkillsInfo").replaceWith( "<p id='personalSkillsInfo'><i>" + data[numClicks+1].Personal + "</i></p>");
        $("#technicalSkillsInfo").replaceWith( "<p id='technicalSkillsInfo'><i>" + data[numClicks+1].Technical + "</i></p>");
        $("#yearsInfo").replaceWith( "<p id='yearsInfo'><i>" + data[numClicks+1].Experience + " years</i></p>");
    });
    
                
    cultureWFA(direction);
    sizeAnalysis(direction);
    industryWFA(direction);
    advancementWFA(direction);
    salaryAnalysis(direction);
    benefitsAnalysis(direction);
    vacationAnalysis(direction);
    hoursAnalysis(direction);
    typeWFA(direction);
    functionWFA(direction);
    commuteAnalysis(direction);
    personalWFA(direction);
    technicalWFA(direction);
    experienceAnalysis(direction);

    updateNum(direction); 
}
function initScreen(){

    $.getJSON( "companies.json", function( data ) {
        
        $("#internalHeader").replaceWith( '<p id="internalHeader"><u><b>Company Name: ' + data[0].Company + '</b></u></p>');
        $("#cultureInfo").replaceWith( "<p id='cultureInfo'><i>" + data[0].Culture + "</i></p>");
        $("#sizeInfo").replaceWith( "<p id='sizeInfo'><i>" + data[0].Size + " employees </i></p>");
        $("#industryInfo").replaceWith( "<p id='industryInfo'><i>" + data[0].Industry + "</i></p>");
        $("#advancementInfo").replaceWith( "<p id='advancementInfo'><i>" + data[0].Advancement + "</i></p>");
        $("#salaryInfo").replaceWith( "<p id='salaryInfo'><i> $" + data[0].Salary + " USD </i></p>");
        $("#benefitsInfo").replaceWith( "<p id='benefitsInfo'><i>" + data[0].Benefits + "</i></p>");
        $("#vacationInfo").replaceWith( "<p id='vacationInfo'><i>" + data[0].Vacation + " days</i></p>");
        $("#hourInfo").replaceWith( "<p id='hourInfo'><i>" + data[0].Hours + " per week </i></p>");
        $("#typeInfo").replaceWith( "<p id='typeInfo'><i>" + data[0].Type + "</i></p>");
        $("#functionInfo").replaceWith( "<p id='functionInfo'><i>" + data[0].Function + "</i></p>");
        $("#commuteInfo").replaceWith( "<p id='commuteInfo'><i>" + data[0].Commute + " minutes </i></p>");
        $("#personalSkillsInfo").replaceWith( "<p id='personalSkillsInfo'><i>" + data[0].Personal + "</i></p>");
        $("#technicalSkillsInfo").replaceWith( "<p id='technicalSkillsInfo'><i>" + data[0].Technical + "</i></p>");
        $("#yearsInfo").replaceWith( "<p id='yearsInfo'><i>" + data[0].Experience + " years</i></p>");
    });
}
initScreen();
function updateNum(direction){
        if (direction === "right"){
            numClicksRight++;
            numClicks = numClicksLeft + numClicksRight; 
        }
        if (direction === "left"){
            numClicksLeft++;
            numClicks = numClicksLeft + numClicksRight; 
        }
}





function WFAMain(numClicksSide, arr, map, idTags){
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

                                                        Math.round( (100*(map[key] / (numClicksSide) ) ) * 100) / 100 

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
function rangeAnalysisMain(numClicksSide, arr, currCompSize, idTagArr, sizeDescriptors, range0, range1, range2, range3, range4){    
    if (currCompSize < range0){
        arr[0]++
    }
    else if(currCompSize < range1){
         arr[1]++   
    }
    else if(currCompSize < range2){
         arr[2]++   
    }
    else if(currCompSize < range3){
         arr[3]++   
    }
    else if(currCompSize < range4){
         arr[4]++
    }
    else{
         arr[5]++   
    }
    for (var x = 0; x < idTagArr.length; x++){
                
        $("#" + idTagArr[x]).replaceWith( "<p id=" + idTagArr[x] + ">" + sizeDescriptors[x] + ": " + 

                                                        Math.round( (100*(arr[x] / (numClicksSide) ) ) * 100) / 100 

                                                        + "% </p>");
    }
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
            WFAMain(numClicksRight, arr, lfreqMap, lCultureTags);
        });
    }
    if (direction === "left"){
        $.getJSON( "companies.json", function( data ) {
            var arr = data[numClicks-1].Culture.split(",");
            WFAMain(numClicksLeft, arr, rfreqMap, rCultureTags);
        });
    }
}





//SIZE ANALYSIS
var lsizeArr = [0,0,0,0,0,0];
var lSizeIDs = ["lSizeOne", "lSizeTwo", "lSizeThree", "lSizeFour", "lSizeFive", "lSizeSix"];
var rsizeArr =[0,0,0,0,0,0];
var rSizeIDs = ["rSizeOne", "rSizeTwo", "rSizeThree", "rSizeFour", "rSizeFive", "rSizeSix"];
var companySizes = ["0 - 10", "10 - 50", "50 - 100", "100 - 500", "500 - 1000", "1000+"];
function sizeAnalysis(direction){  
    if (direction === "left"){
        $.getJSON( "companies.json", function( data ) {
            rangeAnalysisMain(numClicksLeft, lsizeArr, data[numClicks-1].Size, lSizeIDs, companySizes, 11, 51, 101, 501, 1001);
        });
    }
    if (direction === "right"){
        $.getJSON( "companies.json", function( data ) {
            rangeAnalysisMain(numClicksRight, rsizeArr, data[numClicks-1].Size, rSizeIDs, companySizes, 11, 51, 101, 501, 1001);
        });
    }
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
            WFAMain(numClicksLeft, arr, lfreqIndustryMap, lIndustryTags);
        });
    }
    if (direction === "right"){
        $.getJSON( "companies.json", function( data ) {
            var arr = data[numClicks-1].Industry.split(",");
            WFAMain(numClicksRight,arr, rfreqIndustryMap, rIndustryTags);
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
            WFAMain(numClicksLeft, arr, lfreqAdvMap, lAdvTags);
        });
    }
    if (direction === "right"){
        $.getJSON( "companies.json", function( data ) {
            var arr = data[numClicks-1].Advancement.split(",");
            WFAMain(numClicksRight, arr, rfreqAdvMap, rAdvTags);
        });
    }
}





//SIZE ANALYSIS
var lSalaryArr = [0,0,0,0,0,0];
var lSalaryIDs = ["lSalaryOne", "lSalaryTwo", "lSalaryThree", "lSalaryFour", "lSalaryFive", "lSalarySix"];
var rSalaryArr =[0,0,0,0,0,0];
var rSalaryIDs = ["rSalaryOne", "rSalaryTwo", "rSalaryThree", "rSalaryFour", "rSalaryFive", "rSalarySix"];
var salaryRange = ["25,000 - 50,000", "50,000 - 75,000", "75,000 - 100,000", "100,000 - 150,000", "150,000 - 200,000", "200,00+"];
function salaryAnalysis(direction){  
    if (direction === "left"){
        $.getJSON( "companies.json", function( data ) {
            rangeAnalysisMain(numClicksLeft, lSalaryArr, data[numClicks-1].Salary, lSalaryIDs, salaryRange, 50000, 75000, 100000, 150000, 200000);
        });
    }
    if (direction === "right"){
        $.getJSON( "companies.json", function( data ) {
            rangeAnalysisMain(numClicksRight, rSalaryArr, data[numClicks-1].Salary, rSalaryIDs, salaryRange, 50000, 75000, 100000, 150000, 200000);
        });
    }
}





//BENEFITS ANALYSIS
var lBenefitsTags = ["lBenefitsOne", "lBenefitsTwo", "lBenefitsThree", "lBenefitsFour", "lBenefitsFive"];
var lBenefitsArr = [0,0,0,0,0];
var rBenefitsTags = ["rBenefitsOne", "rBenefitsTwo", "rBenefitsThree", "rBenefitsFour", "rBenefitsFive"];
var rBenefitsArr = [0,0,0,0,0];
var benefitsDescriptors = ["Health", "Health, Dental", "Health, Dental, Family/Medical leave", "Health, Dental, Family/Medical leave, Workers Comp", "Health, Dental, Family/Medical leave, Workers Comp, Severance Pay"];
function benefitsAnalysis(direction){
    if (direction === "right"){
        $.getJSON( "companies.json", function( data ) {
            var benefitsLength = data[numClicks-1].Benefits.length;
            benefitsAnalysisMain(numClicksRight, rBenefitsArr, benefitsLength, benefitsDescriptors, rBenefitsTags);
        });
    }
    if (direction === "left"){
        $.getJSON( "companies.json", function( data ) {
            var benefitsLength = data[numClicks-1].Benefits.length;
            benefitsAnalysisMain(numClicksLeft, lBenefitsArr, benefitsLength, benefitsDescriptors, lBenefitsTags);
        });
    } 
}
function benefitsAnalysisMain(numClicksSide, arr, benefitsLength, idDescriptors, idTagArr){
    if (benefitsLength < 7){
        arr[0]++
    }
    else if(benefitsLength < 15){
         arr[1]++   
    }
    else if(benefitsLength < 37){
         arr[2]++   
    }
    else if(benefitsLength < 50){
         arr[3]++   
    }
    else{
         arr[4]++
    }

    for (var x = 0; x < idTagArr.length; x++){

        $("#" + idTagArr[x]).replaceWith( "<p id=" + idTagArr[x] + ">" + idDescriptors[x] + ": " + 

                                                        Math.round( (100*(arr[x] / (numClicksSide) ) ) * 100) / 100 

                                                        + "% </p>");
    }
}




//VACATION ANALYSIS
var lVacationTags = ["lVacationOne", "lVacationTwo", "lVacationThree", "lVacationFour", "lVacationFive"];
var lVacationArr = [0,0,0,0,0,0];
var rVacationTags = ["rVacationOne", "rVacationTwo", "rVacationThree", "rVacationFour", "rVacationFive"];
var rVacationArr = [0,0,0,0,0,0];
var vacationDescriptors = ["0 - 5 Days", "5 - 10 Days", "10 - 15 Days", "15 - 20 Days", "20 - 30 Days", "30+"];
function vacationAnalysis(direction){  
    if (direction === "left"){
        $.getJSON( "companies.json", function( data ) {
            rangeAnalysisMain(numClicksLeft, lVacationArr, data[numClicks-1].Vacation, lVacationTags, vacationDescriptors, 6, 11, 16, 21, 30);
        });
    }
    if (direction === "right"){
        $.getJSON( "companies.json", function( data ) {
            rangeAnalysisMain(numClicksRight, rVacationArr, data[numClicks-1].Vacation, rVacationTags, vacationDescriptors, 6, 11, 16, 21, 30);
        });
    }
}





//HOURS ANALYSIS
var lHoursArr = [0,0,0,0,0,0];
var lHoursIDs = ["lHoursOne", "lHoursTwo", "lHoursThree", "lHoursFour", "lHoursFive", "lHoursSix"];
var rHoursArr =[0,0,0,0,0,0];
var rHoursIDs = ["rHoursOne", "rHoursTwo", "rHoursThree", "rHoursFour", "rHoursFive", "rHoursSix"];
var companyHours = ["20 - 40", "40 - 50", "50 - 60", "60 - 70", "70 - 80", "80+"];
function hoursAnalysis(direction){ 
    if (direction === "left"){
        $.getJSON( "companies.json", function( data ) {
            rangeAnalysisMain(numClicksLeft, lHoursArr, data[numClicks-1].Hours, lHoursIDs, companyHours, 41, 51, 61, 71, 81);
        });
    }
    if (direction === "right"){
        $.getJSON( "companies.json", function( data ) {
            rangeAnalysisMain(numClicksRight, rHoursArr, data[numClicks-1].Hours, rHoursIDs, companyHours, 41, 51, 61, 71, 81);
        });
    }
}





//TYPE ANALYSIS
var lfreqTypeMap = {};
var lTypeTags = ["lTypeOne", "lTypeTwo", "lTypeThree", "lTypeFour", "lTypeFive", "lTypeSix"];
var rfreqTypeMap = {};
var rTypeTags = ["rTypeOne", "rTypeTwo", "rTypeThree", "rTypeFour", "rTypeFive", "rTypeSix"];
function typeWFA(direction){
    if (direction === "left"){
        $.getJSON( "companies.json", function( data ) {
            var arr = data[numClicks-1].Type.split(",");
            WFAMain(numClicksLeft, arr, lfreqTypeMap, lTypeTags);
        });
    }
    if (direction === "right"){
        $.getJSON( "companies.json", function( data ) {  
            var arr = data[numClicks-1].Type.split(",");
            WFAMain(numClicksRight, arr, rfreqTypeMap, rTypeTags);
        });
    }
}





//FUNCTION ANALYSIS
var lfunctionFunctionMap = {};
var lFunctionTags = ["lFunctionOne", "lFunctionTwo", "lFunctionThree", "lFunctionFour", "lFunctionFive", "lFunctionSix"];
var rfunctionFunctionMap = {};
var rFunctionTags = ["rFunctionOne", "rFunctionTwo", "rFunctionThree", "rFunctionFour", "rFunctionFive", "rFunctionSix"];
function functionWFA(direction){
    if (direction === "left"){
        $.getJSON( "companies.json", function( data ) {
            var arr = data[numClicks-1].Function.split(",");
            WFAMain(numClicksLeft, arr, lfunctionFunctionMap, lFunctionTags);
        });
    }
    if (direction === "right"){
        $.getJSON( "companies.json", function( data ) {  
            var arr = data[numClicks-1].Function.split(",");
            WFAMain(numClicksRight, arr, rfunctionFunctionMap, rFunctionTags);
        });
    }
}




//COMMUTE ANALYSIS
var lCommuteArr = [0,0,0,0,0,0];
var lCommuteIDs = ["lCommuteOne", "lCommuteTwo", "lCommuteThree", "lCommuteFour", "lCommuteFive", "lCommuteSix"];
var rCommuteArr =[0,0,0,0,0,0];
var rCommuteIDs = ["rCommuteOne", "rCommuteTwo", "rCommuteThree", "rCommuteFour", "rCommuteFive", "rCommuteSix"];
var companyCommute = ["0 - 20", "20 - 40", "40 - 60", "60 - 80", "80 - 100", "100+"];
function commuteAnalysis(direction){ 
    if (direction === "left"){
        $.getJSON( "companies.json", function( data ) {
            rangeAnalysisMain(numClicksLeft, lCommuteArr, data[numClicks-1].Commute, lCommuteIDs, companyCommute, 21, 41, 61, 81, 101);
        });
    }
    if (direction === "right"){
        $.getJSON( "companies.json", function( data ) {
            rangeAnalysisMain(numClicksRight, rCommuteArr, data[numClicks-1].Commute, rCommuteIDs, companyCommute, 21, 41, 61, 81, 91);
        });
    }
}





//PERSONAL SKILLS ANALYSIS
var lfreqPersonalMap = {};
var lPersonalTags = ["lPersonalOne", "lPersonalTwo", "lPersonalThree", "lPersonalFour", "lPersonalFive", "lPersonalSix", "lPersonalSeven", "lPersonalEight", "lPersonalNine", "lPersonalTen"];
var rfreqPersonalMap = {};
var rPersonalTags = ["rPersonalOne", "rPersonalTwo", "rPersonalThree", "rPersonalFour", "rPersonalFive", "rPersonalSix", "rPersonalSeven", "rPersonalEight", "rPersonalNine", "rPersonalTen"];
function personalWFA(direction){
    if (direction === "left"){
        $.getJSON( "companies.json", function( data ) {
            var arr = data[numClicks-1].Personal.split(",");
            WFAMain(numClicksLeft, arr, lfreqPersonalMap, lPersonalTags);
        });
    }
    if (direction === "right"){
        $.getJSON( "companies.json", function( data ) {
            var arr = data[numClicks-1].Personal.split(",");
            WFAMain(numClicksRight, arr, rfreqPersonalMap, rPersonalTags);
        });
    }
}






//TECHNICAL SKILLS ANALYSIS
var lfreqTechnicalMap = {};
var lTechnicalTags = ["lTechnicalOne", "lTechnicalTwo", "lTechnicalThree", "lTechnicalFour", "lTechnicalFive", "lTechnicalSix", "lTechnicalSeven", "lTechnicalEight", "lTechnicalNine", "lTechnicalTen"];
var rfreqTechnicalMap = {};
var rTechnicalTags = ["rTechnicalOne", "rTechnicalTwo", "rTechnicalThree", "rTechnicalFour", "rTechnicalFive", "rTechnicalSix", "rTechnicalSeven", "rTechnicalEight", "rTechnicalNine", "rTechnicalTen"];
function technicalWFA(direction){
    if (direction === "left"){
        $.getJSON( "companies.json", function( data ) {
            var arr = data[numClicks-1].Technical.split(",");
            WFAMain(numClicksLeft, arr, lfreqTechnicalMap, lTechnicalTags);
        });
    }
    if (direction === "right"){
        $.getJSON( "companies.json", function( data ) {
            var arr = data[numClicks-1].Technical.split(",");
            WFAMain(numClicksRight, arr, rfreqTechnicalMap, rTechnicalTags);
        });
    }
}




//EXPERIENCE ANALYSIS
var lExperienceArr = [0,0,0,0,0,0];
var lExperienceIDs = ["lExperienceOne", "lExperienceTwo", "lExperienceThree", "lExperienceFour", "lExperienceFive", "lExperienceSix"];
var rExperienceArr =[0,0,0,0,0,0];
var rExperienceIDs = ["rExperienceOne", "rExperienceTwo", "rExperienceThree", "rExperienceFour", "rExperienceFive", "rExperienceSix"];
var companyExperience = ["0 - 0.5","0.5 - 1", "1 - 3","3 - 5","5 - 8","8+"];
function experienceAnalysis(direction){ 
    if (direction === "left"){
        $.getJSON( "companies.json", function( data ) {
            rangeAnalysisMain(numClicksLeft, lExperienceArr, data[numClicks-1].Experience, lExperienceIDs, companyExperience, .6, 1.01, 3.01, 5.01, 8.01);
        });
    }
    if (direction === "right"){
        $.getJSON( "companies.json", function( data ) {
            rangeAnalysisMain(numClicksRight, rExperienceArr, data[numClicks-1].Experience, rExperienceIDs, companyExperience, .6, 1.01, 3.01, 5.01, 8.01);
        });
    }
}





document.addEventListener("keydown", keyDownHandler, false);
function keyDownHandler(e) {
    if(e.keyCode == 81){
        loadNextCompany("left");
    }
    if(e.keyCode == 80){
        loadNextCompany("right");
    }
    if(e.keyCode == 71){
        automatedSelection();
    }
    if(e.keyCode == 83){
        save();
    }
}





var output = "";
var output1 = "";
function printData(){
    var percentagesMaster = [];
    
    var excelMapTerms = ["Culture Rejected,,,,", "Culture Accepted,,,,", "Industry Rejected,,,,", "Industry Accepted,,,,", "Accepteddvancement Rejected,,,,", "Accepteddvancement Accepted,,,,", "Type Rejected,,,,", "Type Accepted,,,,", "Function Accepted,,,,", "Function Rejected,,,,", "Personal Skills Accepted,,,,","Personal Skills Rejected,,,,", "Technical Skills Accepted,,,,","Technical Skills Rejected,,,,", ]
    
    var masterMap = [lfreqMap, rfreqMap, lfreqIndustryMap, rfreqIndustryMap, lfreqAdvMap, rfreqAdvMap, lfreqTypeMap, rfreqTypeMap, lfunctionFunctionMap, rfunctionFunctionMap, lfreqPersonalMap, rfreqPersonalMap, lfreqTechnicalMap, rfreqTechnicalMap];
    
    output = "Company,,,,NEWLINE";
    
    for (var x = 0; x<masterMap.length; x++){
        var outputLineOne = "NEWLINE,Terms";
        var outputLineTwo = "NEWLINE,Occurence";
        
        for (var key in masterMap[x]) {
            if (masterMap[x].hasOwnProperty(key)) {
                outputLineOne += "," + key
                if ( x % 2 == 0 ){
                    outputLineTwo += "," + Math.round( (100*(masterMap[x][key] / (numClicksLeft) ) ) * 100) / 100;
                    percentagesMaster.push( Math.round( (100*(masterMap[x][key] / (numClicksLeft)))) );
                }
                else{
                    outputLineTwo += "," + Math.round( (100*(masterMap[x][key] / (numClicksRight) ) ) * 100) / 100;
                    percentagesMaster.push( Math.round( (100*(masterMap[x][key] / (numClicksRight)))) );
                }
            }
        }
        output += excelMapTerms[x] + outputLineOne + outputLineTwo + "NEWLINE";
    }
    
    
    var excelArrTerms = ["Size Rejected,,,,","Size Accepted,,,,", "Salary Rejected,,,,","Salary Accepted,,,,", "Benefits Rejected,,,,","Benefits Accepted,,,,", "Vacation Rejected,,,,","Vacation Accepted,,,,",  "Hours Rejected,,,,","Hours Accepted,,,,", "Commmute Rejected,,,,","Commmute Accepted,,,,", "Experience Rejected,,,,", "Experience Accepted,,,,"];
    
    var masterArr = [lsizeArr, rsizeArr, lSalaryArr, rSalaryArr, lBenefitsArr, rBenefitsArr, lVacationArr, rVacationArr, lHoursArr, rHoursArr, lCommuteArr, rCommuteArr, lExperienceArr, rExperienceArr];
    
    var sizeDescrip = ["0 - 10", "10 - 50", "50 - 100", "100 - 500", "500 - 1000", "1000+"];   
    var salaryDescrip = ["25000 - 50000", "50000 - 75000", "75000 - 100000", "100000 - 150000", "150000 - 200000", "20000+"];
    var benefitsDescrip= ["Health", "Health, Dental", "Health, Dental, Family/Medical leave", "Health, Dental, Family/Medical leave Workers Comp", "Health, Dental, Family/Medical leave, Workers Comp, Severance Pay"];
    var vacationDescrip = ["0 - 5 Days", "5 - 10 Days", "10 - 15 Days", "15 - 20 Days", "20 - 30 Days", "30+"];
    var hoursDescrip = ["20 - 40", "40 - 50", "50 - 60", "60 - 70", "70 - 80", "80+"];
    var commuteDescrip = ["0 - 20", "20 - 40", "40 - 60", "60 - 80", "80 - 100", "100+"];
    var experienceDescrip = ["0 - 0.5","0.5 - 1", "1 - 3","3 - 5","5 - 8","8+"];
    
    var descripArr = [sizeDescrip, sizeDescrip, salaryDescrip, salaryDescrip, benefitsDescrip, benefitsDescrip, vacationDescrip, vacationDescrip, hoursDescrip, hoursDescrip, commuteDescrip, commuteDescrip, experienceDescrip, experienceDescrip];
    
    for (var x = 0; x<descripArr.length; x++){
        
        outputLineOne = "NEWLINE,Terms";
        outputLineTwo = "NEWLINE,Occurence";
        
        for (var y =0 ; y<descripArr[x].length; y++){
            
                outputLineOne += "," + descripArr[x][y];
                if ( x % 2 == 0 ){
                    outputLineTwo += "," + Math.round( (100*(masterArr[x][y] / (numClicksLeft) ) ) * 100) / 100;
                    percentagesMaster.push( Math.round( (100*(masterArr[x][y] / (numClicksLeft)))) );
                }
                else{
                    outputLineTwo += "," + Math.round( (100*(masterArr[x][y] / (numClicksRight) ) ) * 100) / 100;
                    percentagesMaster.push( Math.round( (100*(masterArr[x][y] / (numClicksRight)))) );
                }
        }
        output += excelArrTerms[x] + outputLineOne + outputLineTwo + "NEWLINE";
    }
    output = output.replace("Health,Health, Dental,Health, Dental, Family/Medical leave,Health, Dental, Family/Medical leave Workers Comp,Health, Dental, Family/Medical leave, Workers Comp, Severance Pay", "Health,Health Dental,Health Dental Family/Medical leave,Health Dental Family/Medical leave Workers Comp,Health Dental Family/Medical leave Workers Comp Severance Pay")
    output = output.replace("Health,Health, Dental,Health, Dental, Family/Medical leave,Health, Dental, Family/Medical leave Workers Comp,Health, Dental, Family/Medical leave, Workers Comp, Severance Pay", "Health,Health Dental,Health Dental Family/Medical leave,Health Dental Family/Medical leave Workers Comp,Health Dental Family/Medical leave Workers Comp Severance Pay")
    //console.log(output);
    
    /*
    var freqPercentagesMap = {};
    percentagesMaster.forEach(function(w) {
        if (!freqPercentagesMap[w]) {
            freqPercentagesMap[w] = 0;
        }
        freqPercentagesMap[w] += 1;
    });
    var percentagesOutput = "";
    
    for (var key in freqPercentagesMap) {
            if (freqPercentagesMap.hasOwnProperty(key)) {
                percentagesOutput += key + "," + freqPercentagesMap[key] +",,";
            }
    }
    */
    
    output1 = percentagesMaster.toString() + ",";
}




var  i = 0;
function automatedSelection() {
    var randBool = Math.random() >= 0.5;
    if (randBool){
        loadNextCompany("right");
    }
    else{
        loadNextCompany("left");
    }
    
    if (i < 97){
      window.setTimeout(automatedSelection, 0);
    }
    else{        
        save(output, "firstoutput.csv");
        save(output1, "secondoutput.csv");
        location.reload();
    }
    i++
}


window.onload = automatedSelection();






function save(textString, fileName){
    var text = textString,
        blob = new Blob([text], { type: 'text/plain' }),
        anchor = document.createElement('a');

    anchor.download = fileName;
    anchor.href = (window.URL || window.URL).createObjectURL(blob);
    anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
    anchor.click();
}

