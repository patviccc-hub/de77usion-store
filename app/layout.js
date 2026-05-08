export const metadata = {
  title: 'DE77USION',
  description: 'Dark luxury streetwear',
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
