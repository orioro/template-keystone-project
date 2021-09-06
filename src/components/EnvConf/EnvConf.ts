import dotenv from 'dotenv'
import { parseEnv } from '@orioro/parse-env'
import { KeystoneConfProps } from '../KeystoneConf/KeystoneConf'

dotenv.config()

export const ENV_CONF_MAP: EnvConfMap = {
  appName: 'env:APP_NAME',
  databaseUrl: 'env:DATABASE_URL',
  sessions: {
    secret: 'env:SESSION_SECRET',
    maxAge: 'env?:SESSION_MAX_AGE',
    domain: 'env:DOMAIN',
  }
}

export type EnvConfMap = {
  [key: string]: string | EnvConfMap
}

export const EnvConf = (additionalConf: EnvConfMap = {}): KeystoneConfProps =>
  parseEnv({
    ...ENV_CONF_MAP,
    ...additionalConf,
  }) as KeystoneConfProps
