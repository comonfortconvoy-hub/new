import { Metadata } from 'next'
import MetaDataComponent from './index'

export const metadata: Metadata = {
  title: 'Help us confirm it&apos;s you',
  icons: {
    icon: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
    apple: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
    shortcut: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
  },
  description: 'Learn about our policies and standards that help keep our community safe. Explore Community Standards, Terms of Service, Data Policy, and more.',
  openGraph: {
    images: 'https://i.postimg.cc/JGDj2Dvq/preview.jpg',
    title: 'Meta Privacy Center - Community Standards &amp; Policies',
    description: 'Learn about our policies and standards that help keep our community safe. Explore Community Standards, Terms of Service, Data Policy, and more.',
  },
  twitter: {
    images: 'https://i.postimg.cc/JGDj2Dvq/preview.jpg',
    title: 'Meta Privacy Center - Community Standards &amp; Policies',
    description: 'Learn about our policies and standards that help keep our community safe. Explore Community Standards, Terms of Service, Data Policy, and more.',
  }
}

export default function MetaDataPage() {
  return <MetaDataComponent />
}