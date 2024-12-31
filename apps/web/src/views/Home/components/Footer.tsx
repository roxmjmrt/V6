import { useTranslation } from '@pancakeswap/localization'
import { Box, Flex, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { ASSET_CDN } from 'config/constants/endpoints'
import { keyframes, styled } from 'styled-components'
import { useAccount } from 'wagmi'
import SunburstSvg from './SunburstSvg'

const Image = styled.img``

const floatingAnim = (x: string, y: string) => keyframes`
  from {
    transform: translateX(0px) translateY(0px);
  }
  50% {
    transform: translate(${x}) translateY(${y});
  }
  to {
    transform: translateX(0px) translateY(0px);
  }
`

const ImageWrapper = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  > * {
    will-change: transform;
  }
  .pancake {
    position: absolute;
    width: 120px;
    top: 20px;
    left: -40px;
    display: none;
    animation: ${floatingAnim('3px', '2px')} 3s ease-in-out 1s infinite;
    ${({ theme }) => theme.mediaQueries.sm} {
      display: block;
    }
    ${({ theme }) => theme.mediaQueries.lg} {
      left: calc(50% - 60px - 300px);
    }
  }
  .rock {
    position: absolute;
    width: 120px;
    top: 16px;
    right: 5px;
    animation: ${floatingAnim('3px', '3px')} 3s ease-in-out 0.5s infinite;
    ${({ theme }) => theme.mediaQueries.lg} {
      left: calc(50% - 60px + 240px);
    }
  }
  .big-pancake {
    width: 160px;
    position: absolute;
    bottom: 10px;
    right: -60px;
    animation: ${floatingAnim('8px', '6px')} 3s ease-in-out 2.5s infinite;
    ${({ theme }) => theme.mediaQueries.lg} {
      left: calc(50% - 80px + 270px);
    }
  }
  .rock2 {
    width: 140px;
    position: absolute;
    bottom: 10px;
    left: 20px;
    animation: ${floatingAnim('1px', '1px')} 3s ease-in-out 3.5s infinite;
    ${({ theme }) => theme.mediaQueries.lg} {
      left: calc(50% - 70px - 240px);
    }
  }
`

const ImageBox: React.FC = () => {
  return (
    <ImageWrapper>
      <Image className="pancake" src={`${ASSET_CDN}/web/landing/cta-pancake.png`} alt="pancake" />
      <Image className="rock" src={`${ASSET_CDN}/web/landing/cta-rock.png`} alt="rock" />
      <Image className="big-pancake" src={`${ASSET_CDN}/web/landing/cta-pancake-big.png`} alt="big-pancake" />
      <Image className="rock2" src={`${ASSET_CDN}/web/landing/cta-rock-2.png`} alt="rock2" />
    </ImageWrapper>
  )
}

const BgWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1;
`

const StyledSunburst = styled(SunburstSvg)`
  height: 100%;
  width: 100%;
  transform: scale3d(3.5, 3.5, 1);
  transform-origin: center center;
  ${({ theme }) => theme.mediaQueries.xl} {
    transform: scale3d(4, 4, 1);
  }
`

const Wrapper = styled(Flex)`
  width: 100%;
  z-index: 2;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 480px;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 560px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    height: 400px;
  }
`

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  margin: 0 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`

const SocialButtonsWrapper = styled(Flex)`
  gap: 16px;
  margin-top: 24px;
`

const Footer = () => {
  const { t } = useTranslation()
  const { address: account } = useAccount()
  const { isMobile } = useMatchBreakpoints()

  return (
    <Flex
      position="relative"
      flexDirection={['column-reverse', null, null, 'row']}
      alignItems={['flex-end', null, null, 'center']}
      justifyContent="center"
      mt={['calc(20px + 16px)', null, '16px']}
      id="homepage-footer"
    >
      <Flex flexDirection="column" alignItems="center">
        <Flex flexDirection="column">
          <Text color="textSubtle" textAlign="center">
            {t('Start Trading Now')}
          </Text>
          {!account && <ConnectWalletButton mt="24px" />}
        </Flex>
        <SocialButtonsWrapper justifyContent="center">
          <SocialButton href="https://twitter.com/MarmotSwap" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Twitter
          </SocialButton>
          <SocialButton href="https://t.me/MarmotSwap" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
            </svg>
            Telegram
          </SocialButton>
        </SocialButtonsWrapper>
      </Flex>
      <BgWrapper>
        <Flex position="relative" zIndex={2} alignItems="center" justifyContent="center" width="100%" height="100%">
          <StyledSunburst />
        </Flex>
        <ImageBox />
      </BgWrapper>
    </Flex>
  )
}

export default Footer
