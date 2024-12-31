import { ChainId } from '@pancakeswap/chains'
import { Box } from '@pancakeswap/uikit'
import Image from 'next/image'
import { memo } from 'react'

export const CHAIN_IMAGES = {
  [ChainId.ETHEREUM]: '/images/chains/1.png',    // Ethereum
  [ChainId.BSC]: '/images/chains/56.png',        // BNB Chain
  [ChainId.BSC_TESTNET]: '/images/chains/97.png',// BSC Testnet
  [ChainId.GOERLI]: '/images/chains/5.png',      // Goerli
  [ChainId.RINKEBY]: '/images/chains/4.png',     // Rinkeby
} as const

interface ChainIconProps {
  chainId: number
  width?: number
  height?: number
  className?: string
}

export const ChainIcon = memo(({ chainId, width = 24, height = 24, className }: ChainIconProps) => {
  const src = CHAIN_IMAGES[chainId as keyof typeof CHAIN_IMAGES]

  return (
    <Box width={width} height={height} className={className}>
      <Image
        src={src || '/images/chains/default.png'}
        alt={`Chain ${chainId}`}
        width={width}
        height={height}
        style={{ borderRadius: '50%' }}
        unoptimized // 允许外部图片加载
      />
    </Box>
  )
})
