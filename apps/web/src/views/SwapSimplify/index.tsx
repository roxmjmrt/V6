import { Currency } from '@pancakeswap/sdk'
import { Box, useMatchBreakpoints } from '@pancakeswap/uikit'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'

import { useCurrency } from 'hooks/Tokens'
import { useSwapHotTokenDisplay } from 'hooks/useSwapHotTokenDisplay'
import { Field } from 'state/swap/actions'
import { useSingleTokenSwapInfo, useSwapState } from 'state/swap/hooks'
import { styled } from 'styled-components'
import PriceChartContainer from '../Swap/components/Chart/PriceChartContainer'
import { StyledSwapContainer } from '../Swap/styles'
import { SwapFeaturesContext } from '../Swap/SwapFeaturesContext'
import { V4SwapForm } from './V4Swap'

const SwapPageWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: radial-gradient( circle farthest-corner at 10% 20%, rgba(117,86,204,1) 0%, rgba(213,105,167,1) 90% );
  background-attachment: fixed;
  padding: 32px 0 0;
  position: relative;

  &::after {
    content: none; /* 移除底部边框 */
  }
`

const SwapContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  margin-bottom: 32px;

  &::after {
    content: none; /* 移除底部边框 */
  }
`

const Wrapper = styled(Box)`
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 328px;
    max-width: 480px;
  }
`

const BannerSection = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  padding: 0 32px;

  @media (max-width: 852px) {
    margin-top: 20px;
    flex-direction: column;
  }
`

const SideBannerElement = styled.div<{ isLeft?: boolean }>`
  width: 160px;
  height: 160px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  ${({ isLeft }) => isLeft ? 'left: 64px;' : 'right: 64px;'}

  @media (max-width: 1400px) {
    display: none;
  }

  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain !important;
    padding: 0;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 180px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 852px) {
    height: 140px;
  }

  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    transform: scale(1.02);
  }
`

export default function V4Swap() {
  const { query } = useRouter()
  const { isDesktop, isMobile } = useMatchBreakpoints()
  const {
    isChartExpanded,
    isChartDisplayed,
    setIsChartDisplayed,
    setIsChartExpanded,
    isChartSupported,
  } = useContext(SwapFeaturesContext)
  const [isSwapHotTokenDisplay, setIsSwapHotTokenDisplay] = useSwapHotTokenDisplay()
  const [firstTime, setFirstTime] = useState(true)

  useEffect(() => {
    const handleError = (error: Error) => {
      console.error('Wallet connection error:', error)
    }

    window.addEventListener('error', (e) => handleError(e.error))
    return () => {
      window.removeEventListener('error', (e) => handleError(e.error))
    }
  }, [])

  useEffect(() => {
    if (firstTime && query.showTradingReward) {
      setFirstTime(false)
      setIsSwapHotTokenDisplay(true)

      if (!isSwapHotTokenDisplay && isChartDisplayed) {
        setIsChartDisplayed?.((currentIsChartDisplayed) => !currentIsChartDisplayed)
      }
    }
  }, [firstTime, isChartDisplayed, isSwapHotTokenDisplay, query, setIsSwapHotTokenDisplay, setIsChartDisplayed])

  // swap state & price data
  const {
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()
  const inputCurrency = useCurrency(inputCurrencyId)
  const outputCurrency = useCurrency(outputCurrencyId)

  const currencies: { [field in Field]?: Currency } = {
    [Field.INPUT]: inputCurrency ?? undefined,
    [Field.OUTPUT]: outputCurrency ?? undefined,
  }

  const singleTokenPrice = useSingleTokenSwapInfo(
    inputCurrencyId,
    inputCurrency,
    outputCurrencyId,
    outputCurrency,
    isChartSupported,
  )

  return (
    <SwapPageWrapper>
      <SwapContentWrapper>
        {isChartDisplayed && (
          <PriceChartContainer
            inputCurrencyId={inputCurrencyId}
            inputCurrency={currencies[Field.INPUT]}
            outputCurrencyId={outputCurrencyId}
            outputCurrency={currencies[Field.OUTPUT]}
            isChartExpanded={isChartExpanded}
            setIsChartExpanded={setIsChartExpanded}
            isChartDisplayed={isChartDisplayed}
            currentSwapPrice={singleTokenPrice}
            isFullWidthContainer
            isMobile={false}
            isChartSupported
          />
        )}
        <StyledSwapContainer>
          <Wrapper height="100%">
            <V4SwapForm />
          </Wrapper>
        </StyledSwapContainer>
        <BannerSection>
          <SideBannerElement isLeft>
            <Image 
              src="/images/banner/left-banner-element.png" 
              alt="Left Banner" 
              width={160}
              height={160}
              style={{ objectFit: 'contain' }}
            />
          </SideBannerElement>
          <ImageWrapper>
            <Image src="/images/banner/marmot-banner.png" alt="Marmot Banner" fill />
          </ImageWrapper>
          <SideBannerElement>
            <Image 
              src="/images/banner/right-banner-element.png" 
              alt="Right Banner" 
              width={160}
              height={160}
              style={{ objectFit: 'contain' }}
            />
          </SideBannerElement>
        </BannerSection>
      </SwapContentWrapper>
    </SwapPageWrapper>
  )
}
