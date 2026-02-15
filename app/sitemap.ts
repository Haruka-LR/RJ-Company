import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rjdevelopment.vercel.app'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`, // Asegúrate de que coincida con el nombre de tu carpeta en /app
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Si tienes una página de servicios o proyectos, agrégala aquí siguiendo el mismo formato
  ]
}