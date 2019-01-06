export const fetchPosts = posts => ({
  type : "SET__POSTS",
  payload : posts
})

export const deletePost = posts => ({
  type : "DELETE__POST",
  payload : posts
})
