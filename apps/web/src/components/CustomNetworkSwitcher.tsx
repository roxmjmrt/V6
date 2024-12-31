import { ChainId } from '@pancakeswap/chains'
import { useTranslation } from '@pancakeswap/localization'
import {
  Box,
  Button,
  Flex,
  Text,
  UserMenu,
  UserMenuDivider,
  UserMenuItem,
} from '@pancakeswap/uikit'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { useSwitchNetwork } from 'hooks/useSwitchNetwork'
import { ChainIcon } from '../config/chainImages'

const NETWORK_NAMES: { [key in ChainId]?: string } = {
  [ChainId.ETHEREUM]: 'Ethereum',
  [ChainId.BSC]: 'BNB Chain',
  [ChainId.BSC_TESTNET]: 'BNB Testnet',
}

export const NetworkSwitcher = () => {
  const { t } = useTranslation()
  const { chainId, isWrongNetwork } = useActiveChainId()
  const { switchNetwork, isLoading } = useSwitchNetwork()

  if (!chainId || !switchNetwork) {
    return null
  }

  const networkLabel = NETWORK_NAMES[chainId]

  return (
    <UserMenu
      mr="8px"
      placement="bottom"
      variant={isWrongNetwork ? 'danger' : 'default'}
      avatarSrc={null}
      text={
        <Box display={['none', null, 'block']}>
          {isWrongNetwork ? t('Wrong Network') : networkLabel}
        </Box>
      }
      icon={<ChainIcon chainId={chainId} />}
    >
      <Box px="16px" py="8px">
        <Text color="textSubtle">{t('Select a Network')}</Text>
      </Box>
      <UserMenuDivider />
      {Object.keys(NETWORK_NAMES).map((networkItem) => {
        const itemChainId = Number(networkItem)
        const isCurrentChain = itemChainId === chainId
        
        return (
          <UserMenuItem
            key={itemChainId}
            style={{ justifyContent: 'flex-start' }}
            onClick={() => {
              if (itemChainId === chainId) return
              switchNetwork(itemChainId)
            }}
          >
            <ChainIcon chainId={itemChainId} />
            <Text color={isCurrentChain ? 'secondary' : 'text'} bold={isCurrentChain} pl="12px">
              {NETWORK_NAMES[itemChainId]}
            </Text>
          </UserMenuItem>
        )
      })}
    </UserMenu>
  )
}
