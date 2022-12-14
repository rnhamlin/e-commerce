# e-commerce

## Description

Backend code for an online store. Connect to a database; create, update, and delete categories, products, and tags.

### User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

### Acceptance Criteria

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

### Technologies Used

- MySQL
- Sequelize
- Insomnia (testing)

## Screenshot

![VS Code Screenshot](e-commerce-screenshot.png)

## Demo Video

1. Initial Setup and Category Routes Testing: https://watch.screencastify.com/v/TTboYRwYGOk4dWscXf6f
2. Tag Routes Testing: https://watch.screencastify.com/v/sQp2iHjXoFpTFk8fiLYr
3. Product Routes Testing: https://watch.screencastify.com/v/3z4l1rB7J7PI3Ej3Sfuh

## Instructions

1. run npm init
2. run npm i
3. run mysql -u root -p
4. enter password
5. npm run seed
6. npm start

# Links

GitHub repo: https://github.com/rnhamlin/e-commerce
