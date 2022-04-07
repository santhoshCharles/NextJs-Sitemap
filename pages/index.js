import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Next Sitemap Demo</h1>
      <ul>
        <li>
          <Link href="/capsules">
            <a>Capsules</a>
          </Link>
        </li>
        <li>
          <Link href="/secret">
            <a>Secret</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
