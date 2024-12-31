import React from "react";
import { styled, keyframes } from "styled-components";
import { FlexProps } from "../../Box";
import Flex from "../../Box/Flex";
import Link from "../../Link/Link";
import { socials } from "../config";
import useMatchBreakpoints from "../../../contexts/MatchBreakpoints/useMatchBreakpoints";

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

const iconFloat = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
`;

const SocialButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 40px;
  margin: 0 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  color: white;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    animation: ${pulse} 1.5s infinite;
    text-decoration: none !important;
    color: white;
    border-color: rgba(255, 255, 255, 0.4);

    & > svg {
      animation: ${iconFloat} 1s ease-in-out infinite;
    }
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
    text-decoration: none !important;
  }

  &:focus {
    text-decoration: none !important;
    outline: none;
  }

  & > svg {
    width: 28px;
    height: 28px;
    margin-right: 16px;
    fill: currentColor;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    margin: 0 8px;
    font-size: 16px;
    
    & > svg {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }
  }
`

const Copyright = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  text-align: center;
  margin-top: 32px;
  font-weight: 500;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`

const SocialLinks: React.FC<React.PropsWithChildren<FlexProps>> = ({ ...props }) => {
  const { isMobile } = useMatchBreakpoints();
  const currentYear = new Date().getFullYear();

  return (
    <Flex flexDirection="column" alignItems="center" {...props} data-theme="dark">
      <Flex justifyContent="center" alignItems="center">
        {socials.map((social, index) => {
          const Icon = social.icon;
          const mr = index < socials.length - 1 ? (isMobile ? "12px" : "24px") : 0;
          return (
            <SocialButton external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
              <Icon />
              {social.label}
            </SocialButton>
          );
        })}
      </Flex>
      <Copyright>
        {currentYear} Marmot. All rights reserved.
      </Copyright>
    </Flex>
  );
};

export default React.memo(SocialLinks, () => true);
