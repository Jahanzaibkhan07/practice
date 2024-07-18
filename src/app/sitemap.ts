import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://practice-delta-ruddy.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://practice-delta-ruddy.vercel.app/en',
          ar: 'https://practice-delta-ruddy.vercel.app/ar',
        },
      },
    },
    {
      url: 'https://practice-delta-ruddy.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: 'https://practice-delta-ruddy.vercel.app/en/about',
          ar: 'https://practice-delta-ruddy.vercel.app/ar/about',
        },
      },
    },
    
  ]
}