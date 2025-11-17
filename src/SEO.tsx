// src/components/SEO.tsx
import { useEffect } from "react"

type SEOProps = {
  title?: string
  description?: string
  url?: string
  image?: string
  noindex?: boolean
}

const defaultTitle = "Calvin Then — Frontend Developer"
const defaultDescription =
  "Calvin Then — frontend developer building responsive UI with React, TypeScript, and Tailwind."

function upsertMeta(selector: string, attrs: Record<string,string>) {
  let el = document.head.querySelector(selector) as HTMLElement | null
  if (!el) {
    el = document.createElement(attrs.rel === "canonical" ? "link" : "meta")
    if (attrs.rel === "canonical") el.setAttribute("rel", "canonical")
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v))
}

export default function SEO({
  title,
  description,
  url,
  image,
  noindex,
}: SEOProps) {
  useEffect(() => {
    const prevTitle = document.title
    const metaTitle = title ? `${title} · ${defaultTitle}` : defaultTitle
    document.title = metaTitle

    // description
    upsertMeta('meta[name="description"]', { name: "description", content: description || defaultDescription })

    // robots
    if (noindex) {
      upsertMeta('meta[name="robots"]', { name: "robots", content: "noindex,nofollow" })
    } else {
      upsertMeta('meta[name="robots"]', { name: "robots", content: "index,follow" })
    }

    // Open Graph
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" })
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: metaTitle })
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description || defaultDescription })
    if (url) upsertMeta('link[rel="canonical"]', { rel: "canonical", href: url })
    else upsertMeta('link[rel="canonical"]', { rel: "canonical", href: window.location.href })

    if (image) {
      upsertMeta('meta[property="og:image"]', { property: "og:image", content: image })
      upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" })
      upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image })
    } else {
      upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary" })
    }

    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: metaTitle })
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description || defaultDescription })

    return () => {
      document.title = prevTitle
    }
  }, [title, description, url, image, noindex])

  return null
}