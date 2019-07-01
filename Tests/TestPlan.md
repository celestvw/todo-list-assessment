# Test Plan - Application: To do List #

### System Under Test Prerequisites ###
- Make sure Git (https://git-scm.com/) is installed
- Install Node.js (https://nodejs.org/en/)
- In the extracted project root folder, run `npm install`

### Run the application in node.js
- Run `node app.js` in the project root folder
- Visit http://localhost:8080 in your browser

### Run the application in docker
- Install Docker: https://docs.docker.com/.
- To build docker image: `docker build -t qe-todolist .`
- To run docker image: `docker run -p 8081:8080 -d qe-todolist`
- Navigate to `http://localhost:8081` to see the app running in docker.
- To stop docker image: `docker ps` grab the Container ID corresponding with the 'qe-todolist' image then `docker stop ${ContainerID}` with `${ContainerID}` replaced with the actual value.

## Test Approach ##
#### In this test plan we discuss the overall approach of the project. ####
- Agile methodology - 2 week sprints
- BDD (behaviour driven development) Given, When, Then
- The test approach will focus on the front end of the apllication
- Manual test execution
- Defect tracking with the project management tool JIRA
- Test Cases to be written in Markdown

## Objective ##
- The objective of this project is to enusre the delivery of the To Do List application as working software. This application must run as a web and mobile application.

### In Scope: ##
##### The following functionalites must be implemented for this application based on the requirement spesifications: ####
1. Application must be deployed in Docker
2. Application must be viewable by multiple users
3. Items should persist on the To Do List application after a page refresh
4. To do items should not be left empty
5. Adding of items to the To Do list application
6. Editing existing information 
7. Deleting existing or new items added on the To Do List application

### Out of Scope: ###
- Penetration Testing
- Functionality - Date at which items must be completed, duplicate items.
- UI: cosmetic enhancements

### Future Features: ###
1. Application's back end must be managed on Kubernetes to ensure the appliation is self healing, should any services break and scalability for future feature implementations. 
2. Application must be ported to Cordova to run as a mobile application.

### Testing Types: ###
 - Unit, Functional, API: Postman if Restful API, Regression, Load Testing: JMeter or NEOLoad, Usability and Smoke Tests

 ### Environments: ###
  - Development, Acceptance/Staging, Hosting, Production

### Tools: ###
- Hardware - PC, Mobile Device, OS - Android
- Software - JIRA, Github, Docker, Kubernetes, Cordova, Selenium

### Responsibilities: ###
1. Product Owner: Create all user stories for the project, define the acceptance criteria 
2. Developer: Code the application to the technical spesification, deployments to acceptance, fixing any defects found
3. QA Analyst: Create test scenarios and test cases to meet the application requirements, manual test execution and log defects
4. Team: Define the definition of done for this project

### Estimates: ###
- Development - 2 days (16 hours)
- Test execution - 1 day (8 hours)

### Risks: ###
- Application hosted on a cloud server - The risk of not having a SSL certificate in place is a security vulnerability.
- Mitigate Risk - Ensure a SSL certificate is in place on the hosted service before hosting the application on the site.

### Exit Criteria: ###
- The exit criteria for this application is when all functional requirements are met, all defects are resolved and the QA Analyst has signed off the tested software. The application is presented to the Product Owner and Stakeholders and business provides sign off for the project to be deployed to production, therefore providing a working application that can be consumed by the public.

