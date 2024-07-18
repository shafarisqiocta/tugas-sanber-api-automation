import { expect } from "chai";
import { register } from "../function/registration.spec.js";
import { login } from "../function/login.spec.js";
import { createUser, createUserInvalid } from "../function/createUser.spec.js";
import { getUserDetail } from "../function/getUser.spec.js";
import { updateUser } from "../function/updateUser.spec.js";
import { deleteUser } from "../function/deleteUser.spec.js";


describe("Auth Section", function ()  {
    this.timeout(10000);
    let userData;
    let accessToken;
    let userId;

    it("Positive - Success Registration", async () =>{
        userData = await register();
        expect(userData).to.have.property("data");
        console.log("Registration response:", userData)
    })

    it("Positive - Success Login", async () => {
        const response = await login()
        expect(response.status).to.equal(201);
        accessToken = (await response).body.data.accessToken;
        console.log("Login Response:", response.body);
    })

    it("Positive - Success Create User", async () => {
        const response = await createUser(accessToken)
        expect(response.status).to.equal(201)
        console.log("Create User Response:", response.body)
        userId = (await response).body.data.userId
    })

    // it("Negative - Failed Create User", async () => {
    //     const response = await createUserInvalid(accessToken)
    //     expect(response.status).to.equal(400)
    //     expect(response.body.status).to.equal("fail")
    //     console.log("Create User Response:", response.body)
    // })

    it("Positive - Success Get User Detail", async () => {
        const response = await getUserDetail(accessToken,userId)
        expect(response.status).to.equal(200)
        expect(response.body.status).to.equal("success")
        console.log("User Detail Response:", response.body)
    })

    it("Positive - Success Update User", async () => {
        const response = await updateUser(userId,accessToken)
        expect(response.status).to.equal(200)
        expect(response.body.status).to.equal("success")
        console.log("User Update Response:", response.body)
    })

    it("Positive - Success Delete User", async () => {
        const response = await deleteUser(userId,accessToken)
        expect(response.status).to.equal(200)
        expect(response.body.status).to.equal("success")
        console.log("Response Delete User:", response.body)
    })

})