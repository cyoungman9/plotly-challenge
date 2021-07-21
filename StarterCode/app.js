function dropdown() {
  var menu = d3.select("#selDataset");
  d3.json("samples.json").then((data) => {
    var sampledata = data.names;
    sampledata.forEach((sample) => {
      menu
        .append("option").text(sample).property("value", sample);
    });
  });
}
dropdown()

function buildtable(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(x => x.id == sample);
    var filtereddata = resultArray[0];
    var table = d3.select("#sample-metadata");
    table.html("");
    console.log(filtereddata)
  
  Object.entries(filtereddata).forEach(function ([key, value]) {
      console.log(key, value);
      var row = table.append("tr");
      row.append("td").html('${ key }`)
      row.append('td').html('${ value }`);
    });
  });
}
function buildcharts(sample) {
  d3.json("samples.json").then((data) => {
    var chartsdata = data.samples;
    var resultArray = chartsdata.filter(x => x.id == sample);
    var filtereddata = resultArray[0];

    var xvalue = filtereddata.otu_ids
    var yvalue = filtereddata.sample_values
    var zvalue = filtereddata.otu_labels

function optionChanged(newid){
  buildtable(newid)
  buildcharts(newid)
}