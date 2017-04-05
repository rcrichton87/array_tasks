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

	sum: function (arr) {
		var total = 0;
		arr.forEach(function(number){
		  total += number; // perform the inputFunction on each element and the total, saving the new total
		})
		return total;
	},

	findDuplicates: function (arr) {
		var outputArray = [];

		var checkArray = arr;
			
		while (checkArray.length !== 0){
			var number = checkArray.shift();
			if (checkArray.includes(number)){
				if(!outputArray.includes(number)){
					outputArray.push(number);
				}
			}
		}

		return outputArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		var outputArray = [];
		arr.forEach(function(number){
			if(number !== valueToRemove){
				outputArray.push(number);
			}
		})
		return outputArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var outputArray = [];
		for(i = 0; i < arr.length; i++){
			if(arr[i] === itemToFind){
				outputArray.push(i);
			}
		}
		return outputArray;
	},

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
