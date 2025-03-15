export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap"
          as="style"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#110627" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="mask-icon" href="/icon.svg" color="#0F172A" />
        <link rel="manifest" href="/manifest.json" />
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
        <title>Alfie Atkinson | Software Engineer Portfolio</title>
      </head>
      <body className="bg-[#c5d1ff] text-slate-800 dark:bg-[#110627] dark:text-white">
        <div id="root" className="bg-light dark:bg-dark">
          {children}
        </div>
      </body>
    </html>
  );
}
