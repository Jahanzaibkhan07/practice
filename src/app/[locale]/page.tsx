import Image from "next/image";
import styles from "../page.module.css";
import { useRouter } from "next/router";

export async function generateMetadata() {
  const router=useRouter()

  const getAllMetaData = await fetch('https://websiteapi-dev.fidelen.sa/api/Website/Settings/GetWebSiteMetaDatas',   {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!getAllMetaData.ok) {
    throw new Error("Failed to fetch meta list");
  }

  const AllMetaDataList = await getAllMetaData.json();

  const { data: AllMetaDataTags } = AllMetaDataList;

  // Assuming homepage data is at a specific index or has a specific property
  const metaDataDetail = AllMetaDataTags.find(
    (page: any) => page.pageType === 1
  ); // Adjust the condition as per your data
  // const metaDataDetail = await res.json();

  return {
      title: router.locale == 'ar'?metaDataDetail.arTitle: metaDataDetail.enTitle,
      description:router.locale == 'ar'?metaDataDetail.arDescription: metaDataDetail.enDescription,
      openGraph: {
          title:router.locale == 'ar'?metaDataDetail.arTitle: metaDataDetail.enTitle,
          description: router.locale == 'ar'?metaDataDetail.arDescription: metaDataDetail.enDescription,
          url: 'https://practice-delta-ruddy.vercel.app/en',
          siteName: 'fidelen',
          images: [
              {
                  url: metaDataDetail.ogImageUrl,
              },
          ],
          locale: 'en',
          type: 'website',
      },
  };
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
