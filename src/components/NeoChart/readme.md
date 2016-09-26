# NeoChart

Consist of:
* Canvas
* Legend
* Options

## Canvas

Takes
```js

// options as key value pairs
options = {
  axis: true,
  grid: false,
  legendVisible: false,
  range: {},
  round: true,
  stacked: false,
  unit: "si",
  valueScale: "linear",
  zeroBased: true
}

// array of time series
data = [{
  cadence: 3600000,
  hash: 'ddea4be0',
  key: 'accounts',
  keyCount: 1,
  tagCounts: {

  },
  tags: {

  },
  type: 'points',
  values: [
    [1474117200000, 30.933670962570165],
    [1474120800000, 33.76921146521019],
    [1474124400000, 36.42699489885775]
  ]
}]
```
-

Values it handles
