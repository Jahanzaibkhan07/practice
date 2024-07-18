import React from 'react'
import styles from "../../page.module.css";
export async function generateMetadata() {
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
    (page: any) => page.pageType === 11
  ); // Adjust the condition as per your data
  // const metaDataDetail = await res.json();

  return {
      title: metaDataDetail.enTitle,
      description: metaDataDetail.enDescription,
      openGraph: {
          title: metaDataDetail.enTitle,
          description: metaDataDetail.enDescription,
          url: 'https://practice-delta-ruddy.vercel.app/en/about',
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
const page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          About Page
        </p>
      </div>
    </main>  )
}

export default page