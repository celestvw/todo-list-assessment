# Test Cases for the To Do List Application #
### Test case no 1: ###
#### Add Items ####
- GIVEN the user has navigated to [URL]
- WHEN the user clicks in the empty field 'Create new todo item' to add an item with a valid value and clicks the 'submit' button
- THEN the item will persist on the qe to do list

### Test Case no 2: ###
#### Edit Items ####
- GIVEN the user has navigated to [URL]
- WHEN the user enters a new value to an existing item on the list and clicks the 'update' button
- THEN the updated value should persist on the qe to do list

### Test case no 3: ###
#### Delete Items ####
- GIVEN the user has navigated to [URL]
- WHEN the user clicks on the 'x' button of an existing item on the qe to do list
- THEN the item is deleted/removed from the list

### Test case no 4: ###
#### Empty field ####
- GIVEN the user has navigated to [URL]
- WHEN the user clicks on the empty field on an existing item and enters a null value (leave the field blank) and clicks the 'update' button
- THEN the existing value of the item should persist

### Test case no 5: ###
#### Refresh Application ####
- GIVEN the user has navigated to [URL]
- WHEN the user clicks in the empty field 'Create new todo item' to add an item with a valid value and clicks the 'submit' button and clicks F5 to refresh the page
- THEN the item will persist on the qe to do list

### Test case no 6: ###
#### Deployed in Docker ####
- GIVEN the application is built with Docker - docker build -t qe-todolist .
- WHEN the user deploys the application with Docker
- THEN the user should access the application with the spesified configuration

### Test case no 7: ###
#### Mobile Application ####
- GIVEN the application is ported to Cordova
- WHEN when a mobile emulation device is selected
- THEN the user should be able to run the application on the selected mobile device

### Test case no 8: ###
#### Multiple Users ####
- GIVEN the QE to do list application's URL publically exposed
- WHEN users navigate to the URL and add, edit or delete items from the list
- THEN all existing functionalites is available to all users and updates on the application only occur on a page refresh

### Test case no 9: ###
#### Error Handling with Kubernetes ####
- GIVEN the application is hosted on Kubernetes 
- WHEN the amount of users exceeds the minimum amount spesified and the  service becomes overused
- THEN the the application is able to heal itself and no down time will be experienced