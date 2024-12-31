import { LanguageProvider } from '@pancakeswap/localization'
import { DialogProvider, ModalProvider, UIKitProvider, dark, light } from '@pancakeswap/uikit'
import { Store } from '@reduxjs/toolkit'
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HistoryManagerProvider } from 'contexts/HistoryContext'
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes'
import { useMemo } from 'react'
import { Provider } from 'react-redux'
import { createWagmiConfig } from 'utils/wagmi'
import { WagmiProvider } from 'wagmi'
import styled, { ThemeProvider } from 'styled-components'

// Create a client
const queryClient = new QueryClient()

const customLight = {
  ...light,
  colors: {
    ...light.colors,
    background: 'linear-gradient(45deg, #7f00ff, #e100ff)',
  },
}

const customDark = {
  ...dark,
  colors: {
    ...dark.colors,
    background: 'linear-gradient(45deg, #7f00ff, #e100ff)',
  },
}

const StyledUIKitProviderComponent: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {
  const { resolvedTheme } = useNextTheme()
  const theme = resolvedTheme === 'dark' ? customDark : customLight
  
  return (
    <ThemeProvider theme={theme}>
      <UIKitProvider theme={theme} {...props}>
        {children}
      </UIKitProvider>
    </ThemeProvider>
  )
}

const Providers: React.FC<
  React.PropsWithChildren<{ store: Store; children: React.ReactNode; dehydratedState: any }>
> = ({ children, store, dehydratedState }) => {
  const wagmiConfig = useMemo(() => createWagmiConfig(), [])
  return (
    <WagmiProvider reconnectOnMount config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={dehydratedState}>
          <Provider store={store}>
            <NextThemeProvider>
              <LanguageProvider>
                <StyledUIKitProviderComponent>
                  <HistoryManagerProvider>
                    <ModalProvider portalProvider={DialogProvider}>{children}</ModalProvider>
                  </HistoryManagerProvider>
                </StyledUIKitProviderComponent>
              </LanguageProvider>
            </NextThemeProvider>
          </Provider>
        </HydrationBoundary>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Providers
