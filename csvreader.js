const fs = require('fs');
const Papa = require('papaparse');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
let sdf;
let errorPec = [];

function createCSV(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    let yyyy = today.getFullYear();
    let minutes = today.getMinutes();

    today = mm + dd  + yyyy + minutes;

    let todayString = today.toString();
    const csvWriter = createCsvWriter({
        path: 'csvdata/' + todayString + '.csv',
        header: [
            {id: 'ParticipantID', title: 'ParticipantID'},
            {id: 'TrialNum', title: 'TrialNum'},
            {id: 'Vis', title: 'Vis'},
            {id: 'TruePercent', title: 'TruePercent'},
            {id: 'ReportedPercent', title: 'ReportedPercent'},
        ]
    });


    //replace data with csv dump
    data = [ { "ParticipantID": "Test21", "TrialNum": 0, "Vis": "barchart_vert", "TruePercent": "5", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 1, "Vis": "barchart_vert", "TruePercent": "1.3157894736842106", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 2, "Vis": "barchart_vert", "TruePercent": "1.8333333333333333", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 3, "Vis": "barchart_vert", "TruePercent": "1.1136363636363635", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 4, "Vis": "barchart_vert", "TruePercent": "1.0344827586206897", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 5, "Vis": "barchart_vert", "TruePercent": "4", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 6, "Vis": "barchart_vert", "TruePercent": "1.3", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 7, "Vis": "barchart_vert", "TruePercent": "1.3823529411764706", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 8, "Vis": "barchart_vert", "TruePercent": "3.6923076923076925", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 9, "Vis": "barchart_vert", "TruePercent": "1.2857142857142858", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 10, "Vis": "barchart_hor", "TruePercent": "1.0555555555555556", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 11, "Vis": "barchart_hor", "TruePercent": "1.1627906976744187", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 12, "Vis": "barchart_hor", "TruePercent": "1.9523809523809523", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 13, "Vis": "barchart_hor", "TruePercent": "4.666666666666667", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 14, "Vis": "barchart_hor", "TruePercent": "1.4", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 15, "Vis": "barchart_hor", "TruePercent": "2.823529411764706", "ReportedPercent": "123123" }, { "ParticipantID": "Test21", "TrialNum": 16, "Vis": "barchart_hor", "TruePercent": "1.3333333333333333", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 17, "Vis": "barchart_hor", "TruePercent": "7.666666666666667", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 18, "Vis": "barchart_hor", "TruePercent": "1.8666666666666667", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 19, "Vis": "barchart_hor", "TruePercent": "1.2352941176470589", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 0, "Vis": "angles", "TruePercent": "341", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 1, "Vis": "angles", "TruePercent": "15", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 2, "Vis": "angles", "TruePercent": "16", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 3, "Vis": "angles", "TruePercent": "160", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 4, "Vis": "angles", "TruePercent": "32", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 5, "Vis": "angles", "TruePercent": "189", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 6, "Vis": "angles", "TruePercent": "140", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 7, "Vis": "angles", "TruePercent": "48", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 8, "Vis": "angles", "TruePercent": "347", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 9, "Vis": "angles", "TruePercent": "239", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 10, "Vis": "angles", "TruePercent": "100", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 11, "Vis": "angles", "TruePercent": "17", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 12, "Vis": "angles", "TruePercent": "44", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 13, "Vis": "angles", "TruePercent": "17", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 14, "Vis": "angles", "TruePercent": "347", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 15, "Vis": "angles", "TruePercent": "269", "ReportedPercent": "123123" }, { "ParticipantID": "Test21", "TrialNum": 16, "Vis": "angles", "TruePercent": "319", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 17, "Vis": "angles", "TruePercent": "187", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 18, "Vis": "angles", "TruePercent": "318", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 19, "Vis": "angles", "TruePercent": "124", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 0, "Vis": "volume", "TruePercent": "144", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 1, "Vis": "volume", "TruePercent": "64", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 2, "Vis": "volume", "TruePercent": "16", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 3, "Vis": "volume", "TruePercent": "25", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 4, "Vis": "volume", "TruePercent": "81", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 5, "Vis": "volume", "TruePercent": "100", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 6, "Vis": "volume", "TruePercent": "36", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 7, "Vis": "volume", "TruePercent": "49", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 8, "Vis": "volume", "TruePercent": "81", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 9, "Vis": "volume", "TruePercent": "100", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 10, "Vis": "volume", "TruePercent": "169", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 11, "Vis": "volume", "TruePercent": "121", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 12, "Vis": "volume", "TruePercent": "100", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 13, "Vis": "volume", "TruePercent": "81", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 14, "Vis": "volume", "TruePercent": "100", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 15, "Vis": "volume", "TruePercent": "16", "ReportedPercent": "123123" }, { "ParticipantID": "Test21", "TrialNum": 16, "Vis": "volume", "TruePercent": "64", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 17, "Vis": "volume", "TruePercent": "16", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 18, "Vis": "volume", "TruePercent": "25", "ReportedPercent": "123" }, { "ParticipantID": "Test21", "TrialNum": 19, "Vis": "volume", "TruePercent": "25", "ReportedPercent": "123" } ]


    csvWriter
        .writeRecords(data)
        .then(()=> console.log('The CSV file was written successfully'));
}

function createCSVError(data){

    const csvWriter = createCsvWriter({
        path: 'csvdata/errorcalculations.csv',
        header: [
            {id: 'Vis', title: 'Vis'},
            {id: 'ErrorScore', title: 'ErrorScore'},
        ]
    });


    csvWriter
        .writeRecords(data)
        .then(()=> console.log('The CSV file was written successfully'));
}




function getCSVDataCalcError(){
    const file = fs.createReadStream('csvdata/0225202155.csv');

    function test(data){
        sdf = data;
        for(let i = 0; i < sdf.length; i++){
            let truePercent = sdf[i].TruePercent;
            let reportedPercent = sdf[i].ReportedPercent;
            console.log(truePercent, reportedPercent);
            let visType = sdf[i].Vis;
            let ratio = Math.log2(Math.abs(reportedPercent - truePercent) + (1/8));

            errorPec.push({"Vis": visType, "ErrorScore": ratio});
        }
        console.log(errorPec)
        createCSVError(errorPec);
    }

    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            //console.log("Finished:", results.data);
            test(results.data);
            sdf = results.data;
        }
    });

}

getCSVDataCalcError()
//createCSV()
//createCSVError




