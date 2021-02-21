export default {
  repository: 'https://github.com/AmitMirgal/devmit-io.git',
  titleSuffix: ' - JavaScript Engineer',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Devmit</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        JavaScript Engineer
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Amit Mirgal" />
      <meta name="og:description" content="Amit Mirgal: JavaScript Engineer" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://devmit-io.vercel.app/og.jgg"
      />
      <meta name="twitter:site:domain" content="devmit-io.vercel.app" />
      <meta name="twitter:url" content="https://devmit-io.vercel.app/" />
      <meta name="og:title" content="Amit Mirgal: JavaScript Engineer" />
      <meta name="og:image" content="https://devmit-io.vercel.app/og.jgg" />
      <meta name="apple-mobile-web-app-title" content="Devmit" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
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
      <meta name="msapplication-TileImage" content="/favicon-32x32.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: <>© {new Date().getFullYear()} devmit.io Inc.</>,
}
