import { memo, ReactNode } from "react";
import { styled } from "styled-components";
import { useTranslation } from "@pancakeswap/localization";
import { LinkExternal, Flex, Svg, Image, Button } from "@pancakeswap/uikit";

const Wrapper = styled.div<{ $isSide: boolean }>`
  width: 100%;
  height: ${({ $isSide }) => ($isSide ? "100%" : "auto")};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 16px;
  padding-right: ${({ $isSide }) => ($isSide ? "32px" : "0px")};
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: space-between;
    flex-direction: ${({ $isSide }) => ($isSide ? "column" : "row")};
  }
`;

const BubbleWrapper = styled(Flex)`
  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
    transition: background-color 0.2s, opacity 0.2s;
  }
  &:hover {
    svg {
      opacity: 0.65;
    }
  }
  &:active {
    svg {
      opacity: 0.85;
    }
  }
`;

type FooterVariant = "default" | "side";

const Footer: React.FC<
  React.PropsWithChildren<{
    variant?: FooterVariant;
    helpUrl?: string;
    helpImage?: ReactNode;
    externalText?: string;
    externalLinkUrl?: string;
  }>
> = ({ variant = "default", helpUrl, externalText, externalLinkUrl, helpImage, ...props }) => {
  const { t } = useTranslation();
  const isSide = variant === "side";
  return (
    <Wrapper $isSide={isSide} {...props}>
      {externalText && externalLinkUrl && (
        <Flex flexDirection={isSide ? "column" : ["column", "column", "row"]} alignItems="center">
          <LinkExternal
            href={externalLinkUrl}
            mb={[16, 16, isSide ? 16 : 0]}
            mr={[0, 0, isSide ? 0 : 16]}
            external
          >
            {externalText}
          </LinkExternal>
        </Flex>
      )}
      {helpUrl && (
        <Flex
          flexGrow={isSide ? 0 : 1}
          alignItems="center"
          width={["100%", "100%", "100%", isSide ? "100%" : "auto"]}
          justifyContent={["center", "center", "center", "flex-end"]}
        >
          {helpImage && (
            <Flex mr="8px" alignItems="center">
              {helpImage}
            </Flex>
          )}
          <Button variant="subtle" as="a" href={helpUrl} external>
            {t("Need help ?")}
          </Button>
        </Flex>
      )}
    </Wrapper>
  );
};

export const SwapFooter = memo(Footer);
