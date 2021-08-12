import * as d3 from 'd3'

const dataJoin = (parentSelector: string, appendElement: string, dataset: any) =>
  d3.select(parentSelector).selectAll(appendElement).data(dataset).join(appendElement)

export { dataJoin }
