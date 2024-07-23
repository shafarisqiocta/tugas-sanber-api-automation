import request from "supertest";
import { expect } from "chai";
import { baseUrl } from "../../data/config.js"

export async function login(){
    const payload = {
        
        "email": "bunga123@gmail.com",
        "password": "tokobunga"
    };

    const response = await request(baseUrl)
    .post("/authentications")
    .send(payload)
    // .set("Content-Type", "application/json");

   return (await response)
   
} 