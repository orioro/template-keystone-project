import { text, password } from '@keystone-next/fields'

export const userFields = () => {
  return {
    username: text({ isRequired: true, isUnique: true }),
    primaryEmail: text({ isRequired: true, isUnique: true }),
    password: password({ isRequired: true }),
  }
}
