import { EnvConf } from './src/components/EnvConf/EnvConf'
import { KeystoneConf } from './src/components/KeystoneConf/KeystoneConf'

const conf = KeystoneConf(EnvConf())

export default conf
