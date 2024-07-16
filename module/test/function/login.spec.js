import request from "supertest";
import { expect } from "chai";
import { baseUrl } from "../../data/config.js"

export async function login(){
    const payload = {
        "email": "contoh@gmail.com",
        "password": "bunga123"
    };

    const response = await request(baseUrl)
    .post("/authentications")
    .send(payload)
    // .set("Content-Type", "application/json");

   return (await response)
   
} 