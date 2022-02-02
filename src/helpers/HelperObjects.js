/* eslint-disable eqeqeq */
module.exports = {
	isEmpty: function (x) {
		return typeof x == "object" && Object.keys(x).length === 0
	}
}
