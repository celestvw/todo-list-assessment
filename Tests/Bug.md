## Defects found on the current version of the QE To Do List Application ##
### Defect 1: Field Validation ###
##### Expected Behaviour #####
-  This application should not accept any null/empty values when adding or editing items on the to do list.
##### Current Behaviour #####
- When a null/empty value is submitted or updated on the to do list application, the current values are replaced with null values
#####  Steps to reproduce #####
- Step 1: Navigate to the [URL]
- Step 2: Click on the empty field next to 'Create new todo item'
- Step 3: Enter an item to be added e.g. Laundry 
- Step 4: Click the 'submit' button
- Step 5: Click on the 'update button' next to the existing item
- Step 6: Verify that the existing item has been replaced with a null value
##### Error Handling #####
- Implement a field validation check in the application's code base
- Create a pop up message for the user stating that the field cannot be left empty when updating items

[Screenshot: Defect 1.PNG](https://github.com/celestvw/todo-list-assessment/blob/master/Tests/Defect%201.PNG)
