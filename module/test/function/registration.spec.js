import request from "supertest";
import { expect } from "chai";
import { baseUrl } from "../../data/config.js"

export async function register (){
    const payload = {
        "name": "nama Toko",
        "email": "contoh@gmail.com",
        "password": "bunga123"
    };

    const response = await request(baseUrl)
    .post("/registration")
    .send(payload)

    expect(response.status).to.equal(201)
    return response.body
}