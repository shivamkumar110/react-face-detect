import makeApiRequest from '../../utils/makeRequest'
export default {
  getFace() {
    return async (dispatch) => {
       try {
        const response  = await makeApiRequest.getRequest("https://api.covid19api.com/summary")
        dispatch({
          type: 'SET_LOCATION_SEARCH',
          data: response.data
      })
       } catch (error) {
         
       }
    }
  }
}