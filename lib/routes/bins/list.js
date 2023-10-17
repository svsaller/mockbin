'use strict'

module.exports = function (req, res, next) {
  let bins = []
  const client = this.client
  client.keys('bin:*', async function (err, value) {
    if (err) {
      throw err
    }

    bins = value.map((bin) => bin.replace('bin:', ''))
    let bin_data = []
    for (let binId of bins) {
      bin_data.push({
        ...{id: binId}, ...JSON.parse(await client.getAsync('bin:' + binId))
      })
    }

    res.body = bin_data
    next()
  })
}
