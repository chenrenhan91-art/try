import Script from "next/script";

/** Custom domains serve this store at `/`. Old GitHub Pages links used `/try`. */
export function LegacyBasePathRedirect() {
  return (
    <Script id="legacy-base-path" strategy="beforeInteractive">
      {`(function(){var p=location.pathname;if(p==="/try"||p==="/try/"){location.replace("/"+location.search+location.hash);}else if(p.indexOf("/try/")===0){location.replace(p.slice(4)+location.search+location.hash);}})();`}
    </Script>
  );
}
