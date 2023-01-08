export type DefaultSocialLoginConfig = {
  backendUrl: string
}

export type WhiteLabelDataType = any

export type SocialLoginDTO = {
  chainId: string
  whitelistUrls: { [P in string]: string }
  network: 'mainnet' | 'testnet'
  whteLableData: WhiteLabelDataType
}
