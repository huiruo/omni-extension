/* global SELECTORS */

'use strict';

(function () {
  function getDocumentTitle () {
    const opengraphTitleEl = document.querySelector(SELECTORS.TITLE);
    const openGraphTitle = opengraphTitleEl && opengraphTitleEl.content;
    console.log('page-info-getDocumentTitle',document.title || openGraphTitle)
    return document.title || openGraphTitle || '';
  }

  function getCanonicalUrl () {
    const currentUrl = window.location.href;
    const canonicalUrlEl = document.querySelector(SELECTORS.CANONICAL_URL);
    const canonicalUrl = canonicalUrlEl && canonicalUrlEl.href;
    if (!canonicalUrl) return currentUrl;

    console.log('page-info-getCanonicalUrl')
    // convert potential relative URL to absolute URL
    return new URL(canonicalUrl, currentUrl).href;
  }

  function getPageInfo () {
    const title = getDocumentTitle();
    const canonicalUrl = getCanonicalUrl();
    const contentType = document.contentType;

    console.log('page-info-getPageInfo',{ title, canonicalUrl, contentType })
    return { title, canonicalUrl, contentType };
  }

  window.getPageInfo = getPageInfo;
})();
