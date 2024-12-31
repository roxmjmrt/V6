import { ChainId } from '@pancakeswap/chains'
import { styled } from 'styled-components'
import { Box, Flex } from '@pancakeswap/uikit'

export const NetworkContainer = styled(Box)`
  position: relative;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 1px;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});

  &:before {
    content: '';
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    border-radius: 15px;
    background: ${({ theme }) => theme.colors.backgroundAlt};
  }
`

export const NetworkButton = styled(Flex)`
  position: relative;
  align-items: center;
  padding: 8px 16px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`

export const NetworkIcon = styled(Box)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;
  transition: all 0.2s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.1);
  }
`

export const NetworkLabel = styled(Box)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

export const NETWORK_DETAILS = {
  [ChainId.ETHEREUM]: {
    name: 'Ethereum',
    icon: '/images/chains/1.png',
    symbol: 'ETH',
  },
  [ChainId.BSC]: {
    name: 'BNB Chain',
    icon: '/images/chains/56.png',
    symbol: 'BNB',
  },
  [ChainId.BSC_TESTNET]: {
    name: 'BNB Testnet',
    icon: '/images/chains/97.png',
    symbol: 'tBNB',
  },
}
