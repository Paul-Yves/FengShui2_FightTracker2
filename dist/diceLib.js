System.register([], function (_export) {
	_export("d6", d6);

	_export("d6Explode", d6Explode);

	_export("roll", roll);

	function d6() {
		return Math.floor(6 * Math.random()) + 1;
	}

	function d6Explode() {
		var res = d6();
		while (res % 6 == 0) {
			res += d6();
		}
		return res;
	}

	function roll(actionValue) {
		var pos = d6Explode();
		var neg = d6Explode();
		var res = pos - neg;
		if (actionValue != undefined) {
			res += actionValue;
		}
		return res;
	}

	return {
		setters: [],
		execute: function () {
			"use strict";
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpY2VMaWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtlQUFnQixFQUFFOztzQkFHRixTQUFTOztpQkFPVCxJQUFJOztBQVZiLFVBQVMsRUFBRSxHQUFHO0FBQ2pCLFNBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDO0VBQ3hDOztBQUNNLFVBQVMsU0FBUyxHQUFFO0FBQzFCLE1BQUksR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDO0FBQ2YsU0FBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQztBQUNsQixNQUFHLElBQUksRUFBRSxFQUFFLENBQUM7R0FDWjtBQUNELFNBQU8sR0FBRyxDQUFDO0VBQ1g7O0FBQ00sVUFBUyxJQUFJLENBQUMsV0FBVyxFQUFDO0FBQ2hDLE1BQUksR0FBRyxHQUFHLFNBQVMsRUFBRSxDQUFDO0FBQ3RCLE1BQUksR0FBRyxHQUFHLFNBQVMsRUFBRSxDQUFDO0FBQ3RCLE1BQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEIsTUFBRyxXQUFXLElBQUUsU0FBUyxFQUFDO0FBQ3pCLE1BQUcsSUFBSSxXQUFXLENBQUM7R0FDbkI7QUFDRCxTQUFPLEdBQUcsQ0FBQztFQUNYIiwiZmlsZSI6ImRpY2VMaWIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==