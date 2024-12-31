import { useTranslation } from '@pancakeswap/localization'
import {
  Box,
  Button,
  FlexGap,
  InjectedModalProps,
  ModalBody,
  ModalCloseButton,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalV2,
  ShieldIcon,
  Text,
  Toggle,
  useModalV2,
  useTooltip,
} from '@pancakeswap/uikit'

import { styled } from 'styled-components'
import { AddMevRpcButton } from './AddMevRpcButton'
import { useIsMEVEnabled, useShouldShowMEVToggle } from './hooks'
import { getImageUrl } from './utils'

export const ToggleWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 16px;
  display: flex;
  width: 100%;
  gap: 4px;
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;
`
export const ModalImg = styled.img`
  width: 258px;
`

export const MevToggle: React.FC = () => {
  return null
}

export const MevModal: React.FC<{ isOpen: boolean; onSuccess?: () => void } & InjectedModalProps> = ({
  isOpen,
  onDismiss,
}) => {
  return null
}
