require('datejs');
// Step 1: Create a combineUsers function - Create a function named combineUsers and assign the following arguments:
function combineUsers(...args) {

// Step 2: Initialize the Return Object
  const combinedObject = {
    users: []
  };

// Step 3: Loop through args to isolate each array and merge them
for (let i = 0; i < args.length; i++) {
  combinedObject.users.push(...args[i]);
}

// Step 4: Get todays update. add an attribute to combined object called merge_date and using datejs give it the current date
  const today = new Date();
  combinedObject.merge_date = today.toString("M/d/yyyy");
  
// Return the combinedObject
return combinedObject;
}



module.exports = {
  combineUsers
};