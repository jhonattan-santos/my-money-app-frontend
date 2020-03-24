import axios from 'axios'

const baseURL =  process.env.API_URL ? process.env.API_URL : 'http://localhost:3003/api'

export function getSummary() {
    const request = axios.get(`${baseURL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FATCHED',
        payload: request
    }
}