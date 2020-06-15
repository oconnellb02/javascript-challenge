// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
// Reference to table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with sightings report values
tableData.forEach(function(sightingsReport) {
    console.log(sightingsReport);
    var row = tbody.append("tr");
    Object.entries(sightingsReport).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Reference to button
var button = d3.select("#filter-btn");

// Use 'on' to attach an event to the handler function defined inline
button.on("click", function() {
    tbody.html("");
    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(data => data.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(selections) {
        console.log(selections);
        var row = tbody.append("tr");
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});



