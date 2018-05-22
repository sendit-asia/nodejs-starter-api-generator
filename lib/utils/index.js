const { isEmpty } = require('lodash')

exports.initProject = require('./initProject')
exports.updateConfigFile = require('./updateConfigFile')
exports.prepareDirectory = require('./prepareDirectory')

exports.formatPackageName = v =>
  v.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '-')

exports.notEmpty = v => !isEmpty(v)