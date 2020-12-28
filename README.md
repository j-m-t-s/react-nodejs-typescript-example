# react-nodejs-typescript-example
Example project for the react and node with typescript

TO ADD MIGRATION: 

npx sequelize-cli model:generate 
--name User --attributes firstName:string,lastName:string,email:string

Running Migrations (from api folder):

Up: npx sequelize-cli db:migrate
Down: npx sequelize-cli db:migrate:undo

TO DEBUG: F1- Debug: Toggle Auto Attach - set to true, and then CLOSE AND REOPEN TERMINAL

IDEA: AUTOMATICALLY ENTER SNEAKERS BASED ON EMAILS RECEIVED, OR SOMETHING LIKE THAT. Could import all emails and then track it. summarize all the confirmation emails automatically