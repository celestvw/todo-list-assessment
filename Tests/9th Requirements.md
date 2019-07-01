### Future Features: ###
#### Kuberentes: Application's back end must be managed on Kubernetes to ensure the appliation is self healing, should any services break and scalability for future feature implementations. ####
### Test case no 1: ###
#### Error Handling with Kubernetes ####
- GIVEN the application is hosted on Kubernetes 
- WHEN the amount of users exceeds the minimum amount specified and the  service becomes overused
- THEN the the application is able to heal itself and no down time will be experienced

#### Test Strategy: ####
- To ensure the Do Do List application is self healing and scalable as an app it will be hosted on Amazon EKS (Amazon Elastic Kubernetes Service)
- Testing of the application will include all existing functionalities as well as removing services under load to determine resiliency.
