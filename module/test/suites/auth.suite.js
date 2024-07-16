import { expect } from "chai";
import { register } from "../function/registration.spec.js";
import { login } from "../function/login.spec.js";
import { createUser } from "../function/createUser.spec.js";


describe("Auth Section", () => {
    // this.timeout(10000);
    let userData;
    let accessToken;
    it("Positive - Success Registration", async () =>{
        userData = await register();
        expect(userData).to.have.property("data");
        console.log("Registration response:", userData)
    })

    it("Positive - Success Login", async () => {
        const response = await login()
        expect(response.status).to.equal(201);
        accessToken = (await response).body.accessToken;
        console.log("Login Response:", response.body);
    })

    it("Positive - Success Create User", async () => {
        const response = await createUser(accessToken)
        expect(response.status).to.equal(201)
        console.log("Create User Response:", response.body)
    })

})