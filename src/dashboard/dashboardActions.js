import axios from 'axios'

const baseURL = 'http://localhost:3003/api'

export function getSummary() {
    const request = axios.get(`${baseURL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FATCHED',
        payload: request
    }
}