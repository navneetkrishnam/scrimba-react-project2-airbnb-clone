import './global.css'

export const metadata = {
  title: 'Airbnb Clone',
  description: 'Developed by Navneet Krishna',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
