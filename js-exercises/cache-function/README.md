# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**
*Write your response here*
Ans. In case we build a food recommender system for our users on the web and the data changes per user interests. We can use there cache function and set the cache timeout on some time based method or memory based. The benefit of this would be, it willl not invoke the recommendFoodItems() method again and again for the same user, if user loads the page in queue. That will imporive page loading time as well.


### **What *extra* test cases can you add to the test file?**

*Add relevant test-cases in the test file*