CMPE-226-Nodejs-Expressjs-MongoDB-REST API
=========================================

Build a prototype of HomeDepot using Nodejs, Express, Jade, MongoDB and REST API

The project mainly involves the front end development of the prototype of HomeDepot to build a catalog of refrigerator, tv, books and nail polish.

Front end design has two parts. Left side of the screen allows customer to choose the catalog and right side of the screen shows best offers, catalog of refrigerator, tv, books and nail polish on selection.

Customer shops by department
-	Appliances
o	Refrigerator
-	Electronics
o	TV
-	Books
-	NailPolish
-	Pharmacy
-	Grocery
-	Photos and Gifts
-	Toys and Video Games
-	Baby and Kids



Catalog of refrigerator, tv, books and nail polish on selection
MongoDB supports multivalued attribute. 
Product table is created in MongoDB and following columns are maintained.

Product table 
Refrigerator  - ProductID, Description, Category, Price, Brand, Capacity
TV  - ProductID, Description, Category, Price, Brand, Screensize
NailPolish  - ProductID, Description, Category, Price, Color
Books - ProductID, Description, Category, Price, ISBN, Country



Quick Start
-	Install Nodejs
-	Install MongoDB
-	Create nodetest1 database and product collection
-	Insert 10 documents for each tv, refrigertor, nail polish, books into product collection
-	Install Express 
-	Create an Express project nodetest1
-	Edit dependencies in package.json
-	Install dependencies  > npm install
-	Test the server by running npm start

Contents
-	README.md - this file
-	app.js - central app file, connection to mongodb, development and product error handlers
-	/public – css stylesheet
-	/routes - route files 
o	Index.js – to pull the data from mongodb and display it
o	User.js
-	/views - views 
o	Books.jade
o	Error.jade
o	Mainscreen.jade
o	Nailpolish.jade
o Product.jade
o	Tv.jade
-	package.json - package info for tutorial project
- style.css

References
http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/
