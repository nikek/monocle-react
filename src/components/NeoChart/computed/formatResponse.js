import {Computed} from 'cerebral'





const colorScheme = ["red", "teal",  "blue", "green",  "yellow", "navy", "forest", "orange", "pink", "purple"]

function fillInTheBlanksOptions(opt) {
  var defaultOptions = {
    stacked: false,
    grid: false,
    axis: true,
    unit: '',
    round: true,
    legendVisible: true
  };

  return Object.assign(defaultOptions, opt);
}

function formatSeriesToLayout(s, opt) {
  if (opt.stacked === true) {
    this.stackFn(s);
  } else {
    this.unstackFn(s);
  }
}
function fillInTheBlanksSeries(inputSeries) {
  var newSeries = [];

  inputSeries.forEach(function(series, i){
    var formatedSeries = Object.assign({
      visible: true,
      hash: series.hash || i
    }, series);

    newSeries.push(formatedSeries);
  });

  return newSeries;
}
function colorize(series) {
  series.forEach(function (s, i) {
    s.color = colorScheme[i % colorScheme.length];
  })
}
function sorter(a, b) {
  var prop = 'shortName';

  if (a[prop] < b[prop])
    return -1;

  if (a[prop] > b[prop])
    return 1;

  return 0;
}
function sortByName(series) {
  return series.sort(sorter);
}


function seriesTags(source) {
  return function(key, i) {
    var value = source[key];

    if (!value) {
      return 'no value';
    }

    if (value.length === 1) {
      return key + ":" + value;
    }

    return key + ":<" + value.length + ">";
  };
};


export default function mergeData({state, input}) {

  var series = input.result.result.map(function(series) {
    return formatSeries(series);
  });


  series = fillInTheBlanksSeries(series, colorScheme);
  sortByName(series);
  colorize(series);


}


// Turn response series together with config into properly fomatted time series.
function formatSeries(series) {

  // Convert datapoints from [x, y] to {x, y0, y1} format
  var dataPoints = series.values.map(function(p) {
    return {x: p[0], y: p[1], y0: 0};
  })

  var keys = Object.keys(series.tags).sort();

  return {
    dataPoints: dataPoints,
    hash: series.hash,
    tags: series.tags,
    name: keys.map(seriesTags(series.tags)).join(' '),
    cadence: series.cadence || Infinity,
    focus: false
  };
};



export default Computed({
  response: 'monocle.response'
}, ({response}) => {
  const data = {}

  // in order to strip away common tags from the name
  // const identifyingTagsKeys =

  data.range = response.range

  // Find series idintifying tags

  data.series = response.result.map(formatSeries)

  console.log(data)
  return data
})
