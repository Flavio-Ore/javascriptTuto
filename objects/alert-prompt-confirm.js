let alertMsg = alert('ALERT'),
  confirmation = confirm("Please confirm that you'll delete all your data?"),
  input = prompt('Are you sure you want to delete all your data?')

try {
  //* console.log(alertMssg); //undefined
  
  console.log(confirmation);
  
  console.log(input);
} catch (e) {
  console.log(e);
}