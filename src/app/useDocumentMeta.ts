import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { META, DEFAULT_META, articleMeta, type PageMeta } from './data/meta';
import { ROUTES } from './data/site';
import { findArticle } from './data/journal';

/** Keeps <title> and the description/OG tags in step with the current route. */
function setTag(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function useDocumentMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    let meta: PageMeta | undefined = META[pathname];

    // Journal articles carry their own title and summary
    if (!meta && pathname.startsWith(`${ROUTES.journal}/`)) {
      const article = findArticle(pathname.slice(ROUTES.journal.length + 1));
      if (article) meta = articleMeta(article.title, article.summary);
    }

    const { title, description } = meta ?? DEFAULT_META;

    document.title = title;
    setTag('meta[name="description"]', 'name', 'description', description);
    setTag('meta[property="og:title"]', 'property', 'og:title', title);
    setTag('meta[property="og:description"]', 'property', 'og:description', description);
    setTag('meta[property="og:url"]', 'property', 'og:url', window.location.href);

    // Canonical — avoids duplicate-content ambiguity on query-string variants
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', window.location.origin + pathname);
  }, [pathname]);
}
