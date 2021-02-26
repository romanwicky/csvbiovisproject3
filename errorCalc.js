//Parse through CSV calculate error score for each test
//Return array: [[VIS, ERRORSCORE]]


Papa.parse("csvdata/0225202114.csv", {
    complete: function(results) {
        console.log("Finished:", results.data);
    }
});

//Create a CSV with error data
