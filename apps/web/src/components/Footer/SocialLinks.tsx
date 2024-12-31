import { Box, Flex } from '@pancakeswap/uikit'
import { Send, X } from 'react-feather'; // 使用 react-feather 图标库
import { styled } from 'styled-components'

const SocialContainer = styled(Flex)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  backdrop-filter: blur(10px);
  z-index: 20;
`

const IconButton = styled(Box)<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme, isActive }) => 
    isActive ? theme.colors.primary : 'transparent'};
  transition: all 0.2s;
  cursor: pointer;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
    
    svg {
      color: white;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme, isActive }) => 
      isActive ? 'white' : theme.colors.text};
    transition: all 0.2s;
  }
`

const SocialLinks = () => {
  return (
    <SocialContainer justifyContent="center" gap="24px">
      <IconButton as="a" href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
        <X size={20} />
      </IconButton>
      <IconButton as="a" href="https://t.me/your-group" target="_blank" rel="noopener noreferrer">
        <Send size={20} />
      </IconButton>
    </SocialContainer>
  )
}

export default SocialLinks
