import { type AppType } from "next/app";
import { Yeseva_One, Josefin_Sans } from "next/font/google";
import classNames from "classnames";
import { dark } from "@clerk/themes";

import { api } from "../utils/api";

import "../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { FunctionComponent, ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

const display = Yeseva_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-display"
});

const sans = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans"
});

const FontWrapper: FunctionComponent<{ children: ReactNode }> = ({
                                                                   children
                                                                 }) => {
  return (
    <main className={classNames(display.variable, sans.variable, "bg-neutral")}>
      {children}
    </main>
  );
};

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          variables: {
            colorPrimary: "#FF0000",
            fontFamily: "sans-serif"
          }
        }}
        {...pageProps}
      >
        <FontWrapper>
          <Component {...pageProps} />
          <Toaster
            position={"bottom-center"}
            toastOptions={{
              className: "font-sans font-bold",
            }} />
        </FontWrapper>
      </ClerkProvider>
    </RecoilRoot>
  );
};

export default api.withTRPC(MyApp);
