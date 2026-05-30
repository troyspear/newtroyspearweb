import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { blogPosts } from '@/lib/data/blog-posts'
import { getTeamYears } from '@/lib/data/team-members'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/vehicle',
    '/vehicle/tdrs',
    '/vehicle/past/krabby-patty',
    '/vehicle/past/aura',
    '/vehicle/past/sea-plus-plus',
    '/documentation',
    '/sponsors',
    '/gallery',
    '/contact',
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }))

  const teamYearRoutes = getTeamYears().map((year) => ({
    url: `${SITE_URL}/about/${year}`,
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/documentation/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00`),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...teamYearRoutes, ...blogRoutes]
}
