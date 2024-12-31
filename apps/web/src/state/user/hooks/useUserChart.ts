import { atom, useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const userChartAtom = atomWithStorage('pcs:user-chart', false)
const mobileUserChartAtom = atom(false)

export function useUserChart(isMobile: boolean = false) {
  const [value, setValue] = useAtom(isMobile ? mobileUserChartAtom : userChartAtom)
  return [value ?? false, setValue] as const
}
