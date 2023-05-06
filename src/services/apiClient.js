import axios from "axios";

class ApiClient {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.tokenName = "token"
    }

    // Utility Method
    async request ({ endpoint, method = "GET", data = {} }) {
        const url = this.remoteHostUrl + "/" + endpoint
        const headers = {
            "Content-Type": "application/json"
        }
        if(this.token){
            headers["Authorization"] = `Bearer ${this.token}`;
        }

        try {
            // Pass config methods to axios
            const res =  await axios({ url, method, data, headers })
            return { data: res.data, error: null }
        } 
        catch (errors) {
            const errorResponse = errors?.response?.data?.error?.message;
            return { data: null, error: errorResponse || String(errors) }
        }
    }

    // Endpoints

    async getAllItems() {
        return await this.request( {endpoint: "question/allItems", method: "GET", data: {}} )
    }

    async register(formData) {
        console.log("formData in api client")
        console.log(formData)
        return await axios.post('http://localhost:3005/form/register', formData)
        //return await this.request( {endpoint: "form/register", method: "POST", data: formData} )
    }

}

export default new ApiClient("http://localhost:3005")