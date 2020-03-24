import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tabs/tabActions'
import consts from '../consts'

const BASE_URL = consts.API_URL
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(err =>{
                    toastr.error('Erro', err)
                })
            })
    }    
}

export function showUpdate(billingCycle) {
    return changeTab('billingForm', 'tabUpdate', billingCycle)
}

export function showDelete(billingCycle) {
    return changeTab('billingForm', 'tabDelete', billingCycle )
}

function changeTab(formId, tabId, billingCycle) {
    return [
        showTabs(tabId),
        selectTab(tabId),
        initialize(formId, billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabCreate', 'tabList'),
        selectTab('tabList'),
        getList(),
        initialize('billingForm', INITIAL_VALUES),

    ]
}