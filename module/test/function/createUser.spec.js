import request from "supertest";
import { expect } from "chai";
import { baseUrl } from "../../data/config.js"

export async function createUser(accessToken){
    const payload = {
            "name": "Bunga User 1",
            "email": "test24@gmail.com",
            "password": "bunga241"
    }

    const response = await request(baseUrl)
        .post("/users")
        .send(payload)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Content-Type", "application/json")

    return (await response)
}

export async function createUserInvalid(accessToken){
    const payload = {
            "name": "",
            "email": "bunga@gmail.com",
            "password": "test123"
    }

    const response = await request(baseUrl)
        .post("/users")
        .send(payload)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Content-Type", "application/json")

    return (await response)
}