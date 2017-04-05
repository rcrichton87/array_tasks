var arrayTasks = {

	concat: function (arr1, arr2) {
		arr2.forEach(function(element){
			arr1.push(element);
		})
		return arr1;
	},

	insertAt: function (arr, itemToAdd, index) {
		var oldItem = arr[index];
		arr[index] = itemToAdd;
		if(arr[index + 1]){
			this.insertAt(arr, oldItem, index + 1);
		} else {
			arr[index + 1] = oldItem;
		}
		return arr;
	},

	square: function (arr) {
		var outputArray = [];
		arr.forEach(function(number){
			 outputArray.push(number * number);
		})
		return outputArray;
	},

	// sum: function (arr) {
		
	// },

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
