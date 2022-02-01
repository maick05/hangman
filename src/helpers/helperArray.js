module.exports = {
	arrayColumn: function (array, columnName) {
		return array.map(function (value, index) {
			return value[columnName]
		})
	}
}
