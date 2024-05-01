import type { Metadata } from "next";

import { ReactElement } from "react";
import localFont from "next/font/local";

import NoiseBgFilter from "@/components/NoiseBgFilter";

import "@/styles/globals.css";

const recoleta = localFont({
  src: [
    {
      path: "./fonts/Recoleta-Thin.woff2",
      weight: "300",
    },
    {
      path: "./fonts/Recoleta-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/Recoleta-Medium.woff2",
      weight: "500",
    },
    {
      path: "./fonts/Recoleta-Bold.woff2",
      weight: "700",
    },
    {
      path: "./fonts/Recoleta-Black.woff2",
      weight: "900",
    },
  ],
});

export const metadata: Metadata = {
  title: "Tomas Lukes | Frontend Developer",
  description: "",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={recoleta.className}>
        {children}
        <NoiseBgFilter />
      </body>
    </html>
  );
};

export default RootLayout;
