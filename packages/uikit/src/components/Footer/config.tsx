import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, GitbookIcon, HomeIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [];

export const socials = [
  {
    label: "Home",
    icon: HomeIcon,
    href: "https://marmot.buzz/",
  },
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://x.com/marmotbsc",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/MarmotSwap",
  },
  {
    label: "Docs",
    icon: GitbookIcon,
    href: "https://helloer.gitbook.io/marmot/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
