import styled from 'styled-components'
import Page from './Page'

const StyledPageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(45deg, #7f00ff, #e100ff);
  
  & > * {
    position: relative;
    z-index: 1;
  }
`

const CustomPage: React.FC<React.ComponentProps<typeof Page>> = ({ children, ...props }) => {
  return (
    <StyledPageWrapper>
      <Page {...props}>{children}</Page>
    </StyledPageWrapper>
  )
}

export default CustomPage
