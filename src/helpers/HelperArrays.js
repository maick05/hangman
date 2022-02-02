module.exports = {
	arrayColumn: function (array, columnName) {
		if (typeof array === "object" && Object.keys(array).length === 0) return {}

		if (array === undefined) return {}

		if (array !== undefined && array.length === 0) return []

		return array.map(function (value, index) {
			return value[columnName]
		})
	}
}
