import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { use, useEffect } from "react";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { windowState } from "~/atoms/states";
import Header from "~/components/header";

import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
function WinStateListener() {

  const setWindowState = useSetRecoilState (windowState);
  useEffect(() => {
    // This will happen only when the component is first mounted
    const resetWindowState = () => {
      // This function sets the windowState
      setWindowState({
        width:
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
        height:
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight,
        scroll: document.documentElement.scrollTop || document.body.scrollTop,
      });
    };
    // reset windowState the first time when component mounted.
    resetWindowState();
    // The reset function will get executed in
    // the scroll and resize events.
    window.addEventListener("resize", resetWindowState);
    window.addEventListener("scroll", resetWindowState);
  }, [setWindowState]);
  return <div style={{ display: "none" }}></div>;
}
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${inter.variable}`}>
      <RecoilRoot>
        <WinStateListener />
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </main>
  );
};

export default MyApp;
