import { useQuery } from '@tanstack/react-query'
import type { NextPage } from 'next'
import { fetchUser } from '../data/fetch'

const Home: NextPage = () => {
  const { data } = useQuery(['user', { userId: '1' }], fetchUser, {
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    // staleTime: 5 * 60 * 1000,
  })

  return <div>username: {data?.name}</div>
}

export default Home
