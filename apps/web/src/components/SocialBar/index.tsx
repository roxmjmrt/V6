import { styled } from 'styled-components'
import { Box, Flex } from '@pancakeswap/uikit'
import Image from 'next/image'

const SocialBarContainer = styled(Flex)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  backdrop-filter: blur(10px);
  z-index: 20;
  padding: 0 16px;
`

const SocialButton = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.level1};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.active};
  }

  &:active {
    transform: translateY(0);
  }
`

const SocialIcon = styled(Image)`
  width: 24px;
  height: 24px;
  transition: all 0.3s ease;
`

const ChainInfo = styled(Flex)`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 8px 16px;
  box-shadow: ${({ theme }) => theme.shadows.level1};
`

const ChainLogo = styled(Image)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`

const ChainName = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`

const SocialBar = () => {
  return (
    <SocialBarContainer justifyContent="space-between" alignItems="center">
      <ChainInfo alignItems="center">
        <ChainLogo 
          src="/images/chains/56.png"
          alt="BNB Chain"
          width={24}
          height={24}
        />
        <ChainName>BNB Chain</ChainName>
      </ChainInfo>
      
      <Flex alignItems="center" gap="16px">
        <SocialButton as="a" href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
          <SocialIcon 
            src="/images/social/twitter.svg" 
            alt="Twitter"
            width={24}
            height={24}
          />
        </SocialButton>
        <SocialButton as="a" href="https://t.me/your-group" target="_blank" rel="noopener noreferrer">
          <SocialIcon 
            src="/images/social/telegram.svg" 
            alt="Telegram"
            width={24}
            height={24}
          />
        </SocialButton>
      </Flex>
    </SocialBarContainer>
  )
}

export default SocialBar
