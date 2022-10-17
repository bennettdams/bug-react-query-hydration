import { dehydrate, DehydratedState, QueryClient } from '@tanstack/react-query'
import type { GetServerSideProps, NextPage } from 'next'
import { fetchUser } from '../../data/fetch'

export const getServerSideProps: GetServerSideProps<{
  dehydratedState: DehydratedState
}> = async ({ params }) => {
  if (!params) throw new Error('Mssing params')

  const userId = params.userId

  const queryClient = new QueryClient()

  // 🟦 Uncomment this to hide the error
  await queryClient.prefetchQuery(['user', { userId: '1' }], fetchUser)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const User: NextPage = () => {
  return <p>User route (no data fetched on the client, only on the server)</p>
}

export default User
