var total = 0;

function currencyFormat(number) {
    // Turn the currency into a number
	var currency = parseFloat(number); //Force as number
    
    // Set the correct decimal places
	currency = currency.toFixed(2); //Force as number with 2 decimal places
    
    // Add the currency symbol
	currency = '$' + currency;
    
    // Return the value
	return currency;
}

function addvalue() {
	// Create our variables and populate them with values from the document elements
	var entryElement = document.getElementById('newEntry'),
		entriesElement = document.getElementById('entries'),
		totalElement = document.getElementById('total');

    
	var entry = entryElement.value;
    
    // Convert the entry from a string to a number
	entry = parseFloat(entry);
    
    // Format the number as currency
	var currency = currencyFormat(entry);

	// console.log(entry);

    // Get the html of the current entries and put it in a variable
	var entriesHTML = entriesElement.innerHTML;

    // Add the new entry to the variable
    entriesHTML = entriesHTML + '<div>' + currency + '</div>';

    // Replace the content of the entries document element with the updated variable
    entriesElement.innerHTML = entriesHTML;

    // Update the total variable
	total = total + entry;
    
    // Update the document element with the total
	totalElement.innerHTML = currencyFormat(total);
    
    // Empty the entry element
	entryElement.value = '';
}



// Set total value to 0.
// Listen for a click.
document.getElementById('entryBtn').onclick = addvalue;



