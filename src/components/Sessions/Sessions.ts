import { statelessSessions } from '@keystone-next/keystone/session'
import ms from 'ms'

export type SessionsProps = {
  secret: string
  maxAge: string | number
  domain: string
}

export const Sessions = ({
  secret,
  maxAge = '30 days',
  domain
}: SessionsProps) => {
  const session = statelessSessions({
    secret,
    maxAge: typeof maxAge === 'string' ? ms(maxAge) : maxAge,
    domain,
    secure: true
  })

  return {
    session,
  }
}
