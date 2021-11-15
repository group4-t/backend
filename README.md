# SkyTunes Backend


This project serves as a very slim backend designed to work with iTunes This server receives requests issued by the sample applications.
The server logs all API requests it performs to the terminal, so you can see what's going on even without diving into the code.

## Integration with the iTunes API

This sample backend interacts directly with iTunes API, specifically for the purpose of authorizing and capturing orders. You can read more about the API [here](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/).

This project serves as a very slim backend designed to work with iTunes This server receives requests issued by the sample applications, and forwards these requests to Klarna. 
The server logs all API requests it performs to the terminal, so you can see what's going on even without diving into the code.


## Running the server

If you wish to run the server, the first step is installing express .
Once that's out of the way, open a terminal and run the following command:
`npm i express`

---


that will allow installing the project's dependencies. Still in the terminal, navigate to the project's directory and installing:
`npm i nodemon`

---


The server is now ready to run. Simply point a terminal to the project's folder and run:
`npm run dev`


