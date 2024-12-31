import { ChainId } from '@pancakeswap/chains'
import { useTranslation } from '@pancakeswap/localization'
import { Box, Flex, Text } from '@pancakeswap/uikit'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { useSwitchNetwork } from 'hooks/useSwitchNetwork'
import { useMemo } from 'react'
import { useUserShowTestnet } from 'state/user/hooks/useUserShowTestnet'
import { chains } from 'utils/wagmi'
import { NetworkContainer, NetworkButton, NetworkIcon, NetworkLabel, NETWORK_DETAILS } from '../Menu/config/networkConfig'
import { styled } from 'styled-components'

const NetworkList = styled(Box)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  min-width: 200px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: 16px;
  padding: 8px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s;

  ${NetworkContainer}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`

const NetworkItem = styled(Flex)<{ isActive?: boolean }>`
  align-items: center;
  padding: 8px 12px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${({ isActive, theme }) => isActive ? theme.colors.primary + '20' : 'transparent'};

  &:hover {
    background: ${({ theme }) => theme.colors.primary + '10'};
  }

  ${NetworkIcon} {
    opacity: ${({ isActive }) => isActive ? 1 : 0.7};
  }

  ${NetworkLabel} {
    color: ${({ isActive, theme }) => isActive ? theme.colors.primary : theme.colors.text};
  }
`

const WrongNetworkBadge = styled(Box)`
  position: absolute;
  top: -6px;
  right: -6px;
  background: ${({ theme }) => theme.colors.failure};
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: white;
`

export const StyledNetworkSwitcher = () => {
  const { t } = useTranslation()
  const { chainId, isWrongNetwork } = useActiveChainId()
  const { switchNetwork } = useSwitchNetwork()
  const [showTestnet] = useUserShowTestnet()

  const availableChains = useMemo(() => 
    chains.filter(chain => {
      if (chain.id === chainId) return true
      if ('testnet' in chain && chain.testnet) {
        return showTestnet
      }
      return true
    }),
    [chainId, showTestnet]
  )

  if (!chainId || !switchNetwork) {
    return null
  }

  const currentNetwork = NETWORK_DETAILS[chainId]

  return (
    <NetworkContainer>
      <NetworkButton>
        <NetworkIcon>
          <img src={currentNetwork?.icon} alt={currentNetwork?.name} />
        </NetworkIcon>
        <NetworkLabel>
          {isWrongNetwork ? t('Wrong Network') : currentNetwork?.name}
        </NetworkLabel>
        {isWrongNetwork && (
          <WrongNetworkBadge>!</WrongNetworkBadge>
        )}
      </NetworkButton>

      <NetworkList>
        <Text color="textSubtle" fontSize="12px" mb="8px" px="12px">
          {t('Select a Network')}
        </Text>
        {availableChains.map((chain) => {
          const network = NETWORK_DETAILS[chain.id]
          return (
            <NetworkItem
              key={chain.id}
              isActive={chain.id === chainId && !isWrongNetwork}
              onClick={() => (chain.id !== chainId || isWrongNetwork) && switchNetwork(chain.id)}
            >
              <NetworkIcon>
                <img src={network?.icon} alt={network?.name} />
              </NetworkIcon>
              <NetworkLabel>
                {network?.name}
              </NetworkLabel>
            </NetworkItem>
          )
        })}
      </NetworkList>
    </NetworkContainer>
  )
}
