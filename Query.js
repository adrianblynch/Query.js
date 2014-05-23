function Query(json) {

	// A wrapper for CFML queries returned as JSON

	this.json = json;
	this.currentRow = -1;
	this.recordCount = this.json["DATA"].length;
	this.columnIndex = {};

	for (var i = 0; i < this.json["COLUMNS"].length; i++) { // Map columns to an index for faster look ups
		this.columnIndex[this.json["COLUMNS"][i]] = i;
	}

	this.next = function() { // Progresses the current row
		return ++this.currentRow < this.recordCount;
	};

	this.getValue = function(column) { // Return data for the given column based on the current row
		if (this.currentRow >= this.recordCount || this.currentRow < 0) {
			return null;
		} else {
			return this.json["DATA"][this.currentRow][this.columnIndex[column.toUpperCase()]];
		}
	};

	this.getValueAt = function(column, row) { // Dive into the data at a given row
		if (this.json["DATA"].length >= row) {
			return this.json["DATA"][row][this.columnIndex[column.toUpperCase()]];
		} else {
			return null;
		}
	};

	this.reset = function() {
		this.currentRow = -1;
	};

	this.getCurrentRow = function() {
		return this.currentRow;
	};

	this.getRecordCount = function() {
		return this.recordCount;
	};

};