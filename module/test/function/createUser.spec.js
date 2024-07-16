import request from "supertest";
import { expect } from "chai";
import { baseUrl } from "../../data/config.js"

export async function createUser(accessToken){
    const payload = {
            "name": "User Bunga",
            "email": "bunga@gmail.com",
            "password": "test123"
    }

    const response = await request(baseUrl)
        .post("/users")
        .send(payload)
        .set("Authorization", `Bearer ${accessToken}`)

    return (await response)
}