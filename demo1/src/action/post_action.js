import {getPostRequest} from '../service/post_api'

export const loadPosts = async (dispatch) => {
  const res = await getPostRequest()
  dispatch({
    type: 'LOAD_POSTS',
    payload: res.data
  })
}