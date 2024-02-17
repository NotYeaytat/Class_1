function getNumberOfCharsInTable(tableId) {
  const table = document.getElementById(tableId);
  let totalChars = 0;

  // Check if table exists
  if (!table) {
      return 'Table not found';
  }

  // Iterate through each row of the table
  for (let i = 0; i < table.rows.length; i++) {
      const row = table.rows[i];

      // Iterate through each cell of the row
      for (let j = 0; j < row.cells.length; j++) {
          const cell = row.cells[j];

          // Get the text content of the cell and add its length to the total
          totalChars += cell.textContent.length;
      }
  }

  // Return the total number of characters
  return totalChars;
}

// Example usage:
const tableId = 'your_table_id';
const numberOfChars = getNumberOfCharsInTable(tableId);
console.log(numberOfChars); // Output: Total number of characters in the table
