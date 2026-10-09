import JsonLd from "@/components/shared/json-ld";
import {CONTACTS, SITE_URL} from "@/config/site";
import {PROFILE} from "@/data/profile";
import type {Locale} from "@/i18n/locales";

export default function PersonJsonLd({locale}: {locale: Locale}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: PROFILE.name[locale],
        alternateName: "Nazar Yankevych",
        jobTitle: "Front-End Developer",
        url: `${SITE_URL}/${locale}`,
        image: `${SITE_URL}/profile.webp`,
        email: `mailto:${CONTACTS.email}`,
        address: {"@type": "PostalAddress", addressLocality: "Kremenchuk", addressCountry: "UA"},
        sameAs: [CONTACTS.github, CONTACTS.linkedin, CONTACTS.telegram],
        knowsAbout: ["React", "Next.js", "TypeScript", "Shopify", "Liquid", "Tailwind CSS", "Core Web Vitals"],
        worksFor: {"@type": "Organization", name: "GoGuru"}
      }}
    />
  );
}
