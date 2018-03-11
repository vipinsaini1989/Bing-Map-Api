# Bing-Map-Api

This code is can be used to find Location using Bing Map API;
Here two dependencies are there i.e 
1. request
2. dotenv

we need only one in the code i.e request;
The other one is for setting the environmental variable i.e 
used to store various API key in seprate file .env and use them when needed.

In order to use the code, all which is needed to clone the directory
(install node if you have not installed)
Run "npm install" in the terminal to install the dependecy.

Code consist of two file
1. geoLocation.js
2. index.js

Also, it is compulsary to have Bing Map API key; 
the provided one is the sample of the key.

Run "node index.js"

Provide code can find the location by two ways:
1. By providing the coordinates;
2. By providing the city or region name;

example of both ways are given.

Code need three parameter:
	("delhi", false, callback function)
	([22,77],true, callback function)
1.
# if provide location is query then it should be in double quotes;
# Second parameter should be false;
# Third is callback function which is to be handled as per need;

2.
# if provide location is co-ordinates then it should be in array;
# Second parameter should be true;
# Third is callback function which is to be handled as per need;


# (process.env.BING_MAPS_API_KEY) 
# this is only need if we are handling environmental variable;