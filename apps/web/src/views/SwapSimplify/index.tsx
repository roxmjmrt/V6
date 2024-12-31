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
`

const SwapContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  position: relative;
  z-index: 2;
  margin-bottom: 32px;
`

const Wrapper = styled(Box)`
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 328px;
    max-width: 480px;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 858px;
  height: 180px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 24px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 852px) {
    margin-top: 20px;
    height: 140px;
  }

  img {
    width: 100% !important;
    height: 100% !important;
    max-width: unset !important;
    max-height: unset !important;
    object-fit: cover !important;
    transform: scale(1.02); // 稍微放大一点避免边缘出现空白
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
    // isHotTokenSupported,
  } = useContext(SwapFeaturesContext)
  const [isSwapHotTokenDisplay, setIsSwapHotTokenDisplay] = useSwapHotTokenDisplay()
  // const { t } = useTranslation()
  const [firstTime, setFirstTime] = useState(true)

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
        <ImageWrapper>
          <Image 
            src="/images/marmot-banner.png"
            alt="Marmot to the Moon"
            fill
            sizes="(max-width: 858px) 100vw, 858px"
            quality={100}
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            priority
          />
        </ImageWrapper>
      </SwapContentWrapper>
    </SwapPageWrapper>
  )
}
