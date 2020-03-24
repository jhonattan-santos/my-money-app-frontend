export function selectTab(tabId){
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds) {
    const tabstoShow = {}
    tabIds.forEach(e => tabstoShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabstoShow
    }
}