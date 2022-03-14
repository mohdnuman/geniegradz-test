const API_ROOT='http://192.168.1.40:8000/api';


export const APIUrls={
    fetchMcqs:()=>`${API_ROOT}/mcq`,
    fetchFills:()=>`${API_ROOT}/fill`,
    codecompile:()=>`https://api.jdoodle.com/v1/execute`,
    fetchCode:()=>`${API_ROOT}/code`,
    // acceptDoubt:(id)=>`${API_ROOT}/doubts/accept/${id}`,
    // fetchActiveDoubt:(id)=>`${API_ROOT}/doubts/${id}`,
    // resolve:(id)=>`${API_ROOT}/doubts/resolve/${id}`
}