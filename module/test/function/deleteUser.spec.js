import request from "supertest";
import { expect } from "chai";
import { baseUrl } from "../../data/config.js"

export async function deleteUser(userId,accessToken){
    const response = await request (baseUrl)
        .delete(`/users/${userId}`)
        .set("Authorization", `Bearer ${accessToken}`)

    return (await response)

}