import { ReactNode } from 'react'
import { styled } from 'styled-components'
import { SwapFeaturesProvider } from './SwapFeaturesContext'

const SwapLayoutWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: radial-gradient( circle farthest-corner at 10% 20%, rgba(117,86,204,1) 0%, rgba(213,105,167,1) 90% );
  background-attachment: fixed;
  padding: 32px 0;
`

function SwapLayout({ children }: { children: ReactNode }) {
  return (
    <SwapLayoutWrapper>
      <SwapFeaturesProvider>{children}</SwapFeaturesProvider>
    </SwapLayoutWrapper>
  )
}

export default SwapLayout
