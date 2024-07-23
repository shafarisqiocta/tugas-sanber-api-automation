import request from "supertest";
import { expect } from "chai";
import { baseUrl } from "../../data/config.js"

export async function updateUser(userId,accessToken){
    const payload = {
        "name": "User 2 (Shafa)",
        "email": "test24@gmail.com"
    }

    const response = await request(baseUrl)
        .put(`/users/${userId}`) // endpoint
        .send(payload)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Content-Type", "application/json")

    return (await response)
}