import axios from 'axios'
import consts from '../consts'

const baseURL =  consts.API_URL

export function getSummary() {
    const request = axios.get(`${baseURL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FATCHED',
        payload: request
    }
}