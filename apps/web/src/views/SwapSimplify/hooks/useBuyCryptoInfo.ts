import { PriceOrder } from "@pancakeswap/price-api-sdk"

export function useBuyCryptoInfo(order: PriceOrder | undefined) {
  return { shouldShowBuyCrypto: false, buyCryptoLink: "" }
}
