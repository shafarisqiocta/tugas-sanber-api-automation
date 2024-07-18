import request from "supertest";
import { expect } from "chai";
import { baseUrl } from "../../data/config.js"

export async function getUserDetail(accessToken,userId) {
    const response = await request(baseUrl) // base url
    .get(`/users/${userId}`) // endpoint
    .set("Authorization", `Bearer ${accessToken}`)
    .set("Content-Type", "application/json")

    return response

}