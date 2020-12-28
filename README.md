# react-nodejs-typescript-example
Example project for the react and node with typescript

TO ADD MIGRATION: 

npx sequelize-cli model:generate 
--name User --attributes firstName:string,lastName:string,email:string

Running Migrations (from api folder):

Up: npx sequelize-cli db:migrate
Down: npx sequelize-cli db:migrate:undo

