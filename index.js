
const transform = require('lodash.transform');
const isEqual = require('lodash.isequal');
const isObject = require('lodash.isobject');

module.exports = function difference(object, base) {
    function changes(object, base) {
        let arrayIndexCounter = 0;
        return transform(object, function (result, value, key) {
            if (!isEqual(value, base[key])) {
                let resultKey = Array.isArray(base) ? arrayIndexCounter++ : key;
                result[resultKey] = (isObject(value) && isObject(base[key])) ? changes(value, base[key]) : value;
            }
        });
    }
    return changes(object, base);
}