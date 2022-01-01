module.exports.items = ['item1', 'item2']
const person = {
  name: 'bob'
}

module.exports.singlePerson = person

/*
instead of doing items =  ['item1', 'item2'] can do above since module.exports is
an obj {}, so just setting up a property on that obj and giving it a value
*/