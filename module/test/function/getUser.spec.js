import request from "supertest";
import { expect } from "chai";
import { baseUrl } from "../../data/config.js"

export async function getUserDetail(accessToken,userId) {
    const response = await request(baseUrl) // base url
    .get(`/users/${userId}`) // endpoint
    .set("Authorization", `Bearer ${accessToken}`)
    .set("Content-Type", "application/json")

    return (await response)

}

export async function getUserDetailFailed(userId){ // get user detail tanpa accessToken

    const response = await request(baseUrl) // base url
    .get(`/users/${userId}`) // endpoint
    .set("Content-Type", "application/json")

    return response
}