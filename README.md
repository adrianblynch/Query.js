Query.js
========

Use ColdFusion/Railo query JSON more easily

Interface
---------

**next()** _boolean_
Progresses the current row.

**getValue(column)** _string/null_
Return data for the given [column] based on the current row. Returns null if the pointer has progressed beyond the last row. Errors if the column doesn't exist.

**getValueAt(column, row)** _string/null_
Return data for the given [column] for the given row. Returns null if the pointer has progressed beyond the last row. Errors if the column doesn't exist.

**reset()**
Sets the pointer back to the start. The start is at the beginning of the query, not the first row so next() will need to be called before the first row is accessed.

**getCurrentRow()** _numeric_
Returns the current row.

**getRecordCount()** _numeric_
Returns the record count.

Usage
-----

	// Create a new clients query - Where json is a ColdFusion query JSON string
	var clients = new Query(json);

	// Loop over the clients and output their first name
	while (clients.next()) {
		console.log(clients.getValue("firstName"));
	}