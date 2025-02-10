# download-trinet-paystubs
Since Trinet doesn't have a download all button for the paystubs, this repository provides some javascript code to automate downloading all your paystubs from Trinet/Zenefits.

## Steps
1. Login to your account and head over to the "Pay Stubs" page.
2. Open the code from the JS file on this repository.
3. Double check the selectors for the `selectElement` and `downloadButton` elements and update the corresponding lines accordingly.
  3.a. You can use the inspect tool on the two elements to check the ID/selector.   
5. Paste the updated code into the console tab of developer tools and hit enter.
6. Run the function by pasting the following line and hit enter:
   `await downloadAllPayStubs()`

