

// copied this from online but feel like theres a different way to parse
//theres a parse library we could import but didn't want to until i talked with team


// what would we input in parameter? since csv is being generated in email right now and we don't have generated csv file yet
function parseCSV(file, delimiter, callback) {
    var reader = new FileReader();
  
    // When the FileReader has loaded the file...
    reader.onload = function() {
    
      // Split the result to an array of lines
      var lines = this.result.split('\n');
      
      // Split the lines themselves by the specified
      // delimiter, such as a comma
      var result = lines.map(function(line) {
          return line.split(delimiter);
      });
      
      // As the FileReader reads asynchronously,
      // we can't just return the result; instead,
      // we're passing it to a callback function
      callback(result);
    };
    
    // Read the file content as a single string
    reader.readAsText(file);
  };\

  


// kind of stuck on this functionality

  function errorCalc(csvFile) 
  {
    

    // create row variable to calculate % error for each row
    let rows = []

    // error calculations here for each row
    rows.push(actualValue : "", guessedValue: "")

    

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