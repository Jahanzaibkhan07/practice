import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://practice-delta-ruddy.vercel.app',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://fidelenpubdev.s3.eu-north-1.amazonaws.com/pub/Uploads/WebsiteMetadata/9c61fe43-ab6f-4827-933b-9e0843e85e84_968db01904bc4cf75f54c30736d2b965.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Home Page
        </p>
      </div>
    </main>
  );
}
