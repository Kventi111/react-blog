const initialState = {
  items : []
}

export default (state = initialState,action) =>  {
  switch(action.type) {
    case "SET__POSTS":
    return {
        items : action.payload
      }
    case "DELETE__POST":
    return {
        items : action.payload
      }
    default:
      return state
  }
}