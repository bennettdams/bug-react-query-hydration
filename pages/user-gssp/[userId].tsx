import type { GetServerSideProps, NextPage } from 'next'

export const getServerSideProps: GetServerSideProps<{}> = async ({
  params,
}) => {
  if (!params) throw new Error('Mssing params')

  const userId = params.userId

  return {
    props: {},
  }
}

const User: NextPage = () => {
  return <div>user</div>
}

export default User
