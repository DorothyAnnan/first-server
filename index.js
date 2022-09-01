const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", (request, response)=> {
       response.status(200).send("Welcome to my server");
});

app.post("/", (request, response) => {
     response.status(201).send("Your data has been saved.");
});

app.put("/", (request, response) => {
      response.status(200).send("Your data has been replaced.");
});

app.patch("/", (request, response) => {
    response.status(200).send("Your Information is updated.");
});

app.delete("/", (request, response) => {
    response.status(200).send("Your Information is deleted.");
});

app.listen(4000, (err) =>{
    console.log("server running on http://localhost:4000");
});
