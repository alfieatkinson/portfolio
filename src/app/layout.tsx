import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Alfie Atkinson | Software Engineer Portfolio",
  description: "Portfolio site of Alfie Atkinson, showcasing software engineering projects and experience.",
  themeColor: "#480080",
  applicationName: "Alfie Atkinson Portfolio",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#c5d1ff] text-slate-800 dark:bg-[#110627] dark:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Alfie Atkinson",
                "jobTitle": "Software Engineer",
                "url": "https://alfieatkinson.dev",
                "image": "https://alfieatkinson.dev/headshot.jpg",
                "sameAs": [
                  "https://www.linkedin.com/in/alfieatkinson",
                  "https://github.com/alfieatkinson",
                  "https://bluesky.app/profile/alfieatkinson.dev",
                  "https://thetab.com/author/alfieatkinson",
                  "https://www.instagram.com/alfie.atkinsonn/"
                ]
              }
            `,
          }}
        />
        <div id="root" className="bg-light dark:bg-dark">
          {children}
        </div>
      </body>
    </html>
  )
}
