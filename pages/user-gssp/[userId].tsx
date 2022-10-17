import {
  dehydrate,
  DehydratedState,
  QueryClient,
  useQuery,
} from '@tanstack/react-query'
import type { GetServerSideProps, NextPage } from 'next'
import { fetchUser } from '../../data/fetch'

export const getServerSideProps: GetServerSideProps<{
  dehydratedState: DehydratedState
}> = async ({ params }) => {
  if (!params) throw new Error('Mssing params')

  const userId = params.userId

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['user', { userId: '1' }], fetchUser)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const User: NextPage = () => {
  const { data } = useQuery(['user', { userId: '1' }], fetchUser, {
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    // staleTime: 5 * 60 * 1000,
  })

  return <div>username: {data?.name}</div>
}

export default User
