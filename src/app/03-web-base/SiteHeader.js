import React, { Suspense } from "react";
import Link from "next/link";

import { getNavLinks } from "@/helpers/web-base-helpers";

function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>
      <Suspense>
        <MainNavLinks />
      </Suspense>
    </header>
  );
}

async function MainNavLinks() {
  let navLinks = await getNavLinks();

  // Only show the first 4 links in the header.
  navLinks = navLinks.slice(0, 4);

  return (
    <nav>
      <ol className="header-nav-links">
        {navLinks.map(({ slug, label, href, type }) => (
          <li key={slug}>
            <Link href={href} className={`header-nav-link ${type}`}>
              {label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default SiteHeader;
