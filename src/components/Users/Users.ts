import { list } from '@keystone-next/keystone/schema'
import { userFields } from './userFields'
import { createAuth } from '@keystone-next/auth'

export const USER_LIST_ID = 'User'

export const Users = () => {
  const schema = {
    [USER_LIST_ID]: list({
      ui: {
        listView: {
          initialColumns: ['username', 'primaryEmail'],
        },
      },
      fields: userFields(),
    }),
  }

  const auth = createAuth({
    listKey: USER_LIST_ID,
    identityField: 'primaryEmail',
    secretField: 'password',
    sessionData: 'username',
    initFirstItem: {
      fields: ['username', 'primaryEmail', 'password'],
    },
  })

  return {
    schema,
    auth
  }
}
