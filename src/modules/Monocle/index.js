import {toggle, set, copy} from 'cerebral/operators'
import updateItemTitle from './chains/updateItemTitle'
import addNewItem from './chains/addNewItem'

export default module => {
  module.addState({
    items: [],
    title: 'New Graph',
    options: {
      axis: true,
      grid: false,
      legendVisible: false,
      round: true,
      stacked: false,
      unit: "si",
      valueScale: "linear",
      zeroBased: true
    },
    datasource: {
      aggregations: [
        {
          type: "group",
          of: [
            "heroic_id",
            "id",
            "site"
          ],
          each: [
            {
              type: "min"
            }
          ]
        }
      ],
      filter: {
        custom: [],
        key: "heroic",
        tags: {
          component: "consumer",
          role: "heroicconsumercs",
          stat: "5m",
          what: "message-in"
        }
      },
      range: {
        type: "relative",
        unit: "minutes",
        value: 80
      },
      resolution: {
        unit: "minutes",
        value: 10
      }
    }
  })

  module.addSignals({
    titleChanged: {
      chain: [copy('input:title', 'state:monocle.title')],
      immediate: true
    },
    titleSubmitted: addNewItem,
    axisToggled: [toggle('state:monocle.options.axis')],
    stackedToggled: [toggle('state:monocle.options.stacked')],
    roundToggled: [toggle('state:monocle.options.round')],
    legendVisibleToggled: [toggle('state:monocle.options.legendVisible')],
    zeroBasedToggled: [toggle('state:monocle.options.zeroBased')],
    unitUpdated: [function({module, input}){ module.state.set('options.unit', input.value)}],
    valueScaleUpdated: [function({module, input}){ module.state.set('options.valueScale', input.value)}]
  })

}
