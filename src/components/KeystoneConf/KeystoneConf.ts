import { config, createSchema } from '@keystone-next/keystone/schema'
import { Users } from '../Users/Users'
import { Sessions, SessionsProps } from '../Sessions/Sessions'

export type KeystoneConfProps = {
  databaseUrl: string
  sessions: SessionsProps
}

export const KeystoneConf = ({ databaseUrl, sessions }: KeystoneConfProps) => {
  const users = Users()
  const { session } = Sessions(sessions)

  return users.auth.withAuth(
    config({
      db: {
        adapter: 'prisma_postgresql',
        url: databaseUrl,
        useMigrations: true,
        idField: { kind: 'uuid' },
      },
      ui: {
        isAccessAllowed: (context) => !!context.session?.data,
      },
      lists: createSchema({
        ...users.schema,
      }),
      session,
    })
  )
}
