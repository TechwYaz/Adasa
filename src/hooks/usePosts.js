import { useEffect, useState } from 'react'

export function usePosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    let isMounted = true

    fetch('/data/posts.json')
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setPosts(data.posts ?? [])
        }
      })
      .catch(() => {
        if (isMounted) {
          setPosts([])
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return posts
}
