import "@/styles/global.css";
// import { Inter } from "@next/font/google";

// const inter = Inter({
//   variable: "--font-inter",
// });

export default function AuthRootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}