import axios from "axios"
import qs from "qs"

const iam = 'mayamunn@protonmail.com'
const BASE_URL = 'https://hooks.zapier.com/hooks/catch/1888053/bgwofce/'

export const initUserActivity = async (sessionId: string, uuid: string) => {
    const data = qs.stringify({
        customerId: "dummy",
        action: "init",
        customerSessionId: sessionId,
        activityType: "LOGIN",
        uuid: uuid,
        brand: "SD",
        solution: "ATO",
        iam: iam
    })
    
    await axios({
        method: 'POST',
        url: BASE_URL,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data
    })
}

export const getUserActivityScore = async (sessionId: string, uuid: string) => {
    const data = qs.stringify({
        customerId: "dummy",
        action: "getScore",
        customerSessionId: sessionId,
        activityType: "MAKE_PAYMENT",
        uuid: uuid,
        brand: "SD",
        solution: "ATO",
        iam: iam
    })
    
    await axios({
        method: 'POST',
        url: BASE_URL,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data
    })
}