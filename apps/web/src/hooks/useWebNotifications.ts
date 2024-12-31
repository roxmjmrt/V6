import { EXPERIMENTAL_FEATURES } from 'config/experimentalFeatures'
import { useExperimentalFeatureEnabled } from 'hooks/useExperimentalFeatureEnabled'
import { useAllowNotifications } from 'state/notifications/hooks'

export const useWebNotifications = () => {
  return { enabled: false }
}
