

// copied this from online but feel like theres a different way to parse
//theres a parse library we could import but didn't want to until i talked with team


function parseCSV(file, delimiter, callback) {
    let reader = new FileReader();
  
    // When the FileReader has loaded the file...
    reader.onload = function() {
    
      // Split the result to an array of lines
      let lines = this.result.split('\n');
      
      // Split the lines themselves by the specified
      // delimiter, such as a comma
      let result = lines.map(function(line) {
          return line.split(delimiter);
      });
      
      // As the FileReader reads asynchronously,
      // we can't just return the result; instead,
      // we're passing it to a callback function
      callback(result);
    };
    
    // Read the file content as a single string
    reader.readAsText(file);
  }



  function errorCalc(csvFile){

    let errorArr = [];
    let rowList = csvFile.lines();
    // let csvContent = "insert csv file.csv";

    for(let r = 0; r < rowList.length; r++  ) {
        let row = rowList[ r ];
        let vis = row.getElementsByClassName("Vis")[0].value;
        let truePercent = row.getElementsByClassName('TruePercent')[0].value;
        let reportedPercent = row.getElementsByClassName('ReportedPercent')[0].value;

         // error calculations here for each row
        let errorScore = Math.abs(Math.log2(reportedPercent/truePercent));
        errorScore.push([vis, errorScore]);

    }

    console.log(errorArr);
}
  




// function errorCalc(csvFile) {

//         let rows = []

//         //generate paticipantID
//         //generate trialnum
//         //get vis
//         let randomID = "Test" + Math.floor(Math.random() * 100)
//         //fill barchart vert

//         for(let i = 0; i < 10; i++){

//             rows.push({"ParticipantID": randomID, "TrialNum": i, "Vis": "barchart_vert", "TruePercent": barchartData[i][0], "ReportedPercent": barchartData[i][1]})
//         }
//         //fill barchart hor
//         for(let i = 10; i < 20; i++){

//             rows.push({"ParticipantID": randomID, "TrialNum": i, "Vis": "barchart_hor",  "TruePercent": barchartData[i][0], "ReportedPercent": barchartData[i][1]})
//         }
//         //fill angle
//         for(let i = 0; i < 20; i++){

//             rows.push({"ParticipantID": randomID, "TrialNum":  i, "Vis": "angles",  "TruePercent": angleData[i][0], "ReportedPercent": angleData[i][1]})
//         }
//         //fill volume
//         for(let i = 0; i < 20; i++){

//             rows.push({"ParticipantID": randomID, "TrialNum": i, "Vis":  "volume", "TruePercent": volumeData[i][0], "ReportedPercent": volumeData[i][1]})
//         }

// }