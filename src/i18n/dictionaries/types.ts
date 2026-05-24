export interface Dictionary {
  brand: {
    name: string;
    short: string;
    tagline: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    products: string;
    brands: string;
    contact: string;
    cta: string;
    switchTo: string;
  };
  common: {
    learnMore: string;
    explore: string;
    requestQuote: string;
    requestSample: string;
    contactUs: string;
    downloadCatalog: string;
    viewAll: string;
    sending: string;
    sent: string;
    formError: string;
    optional: string;
    selectPlaceholder: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      stats: { value: string; label: string }[];
    };
    intro: {
      eyebrow: string;
      title: string;
      body: string;
      bullets: string[];
    };
    values: {
      eyebrow: string;
      title: string;
      items: { icon: string; title: string; description: string }[];
    };
    services: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    sample: {
      eyebrow: string;
      title: string;
      body: string;
      cta: string;
    };
    partners: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    newsletter: {
      title: string;
      body: string;
      placeholder: string;
      cta: string;
    };
  };
  about: {
    hero: { eyebrow: string; title: string; body: string };
    stats: { value: string; unit: string; label: string }[];
    story: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
    };
    values: {
      eyebrow: string;
      title: string;
      items: { icon: string; title: string; description: string }[];
    };
    cta: {
      title: string;
      body: string;
      primary: string;
      secondary: string;
    };
  };
  services: {
    hero: { eyebrow: string; title: string; body: string };
    items: {
      id: string;
      icon: string;
      title: string;
      description: string;
    }[];
    process: {
      eyebrow: string;
      title: string;
      steps: { step: string; title: string; description: string }[];
    };
    sampleForm: {
      title: string;
      subtitle: string;
      fields: {
        projectName: string;
        deliveryDate: string;
        materialsSystem: string;
        contactPerson: string;
        email: string;
        message: string;
      };
      systems: { value: string; label: string }[];
      submit: string;
    };
  };
  products: {
    hero: { eyebrow: string; title: string; body: string };
    categoriesSection: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    categories: {
      id: string;
      icon: string;
      title: string;
      description: string;
      items: string[];
    }[];
    techDocs: {
      title: string;
      body: string;
      primary: string;
      secondary: string;
    };
  };
  brands: {
    hero: { eyebrow: string; title: string; body: string };
    items: {
      id: string;
      name: string;
      fullName: string;
      tagline: string;
      description: string;
      exclusive: boolean;
    }[];
    cta: {
      title: string;
      body: string;
      primary: string;
    };
  };
  contact: {
    hero: { eyebrow: string; title: string; body: string };
    form: {
      title: string;
      subtitle: string;
      fields: {
        projectName: string;
        date: string;
        materialsSystem: string;
        contactPerson: string;
        email: string;
        phone: string;
        message: string;
      };
      systems: { value: string; label: string }[];
      submit: string;
    };
    offices: {
      type: string;
      badge: string;
      city: string;
      address: string;
      phone: { display: string; href: string };
      email: { display: string; href: string } | null;
      hours: string;
    }[];
    whatsapp: {
      label: string;
      href: string;
    };
    network: {
      title: string;
      body: string;
    };
  };
  footer: {
    tagline: string;
    headquarters: {
      title: string;
      locations: string[];
    };
    quickLinks: {
      title: string;
      links: { label: string; href: string }[];
    };
    support: {
      title: string;
      phoneLabel: string;
      phoneDisplay: string;
      phoneHref: string;
      emailLabel: string;
      email: string;
      hoursLabel: string;
      hours: string;
    };
    legal: {
      copyright: string;
      privacy: string;
      terms: string;
    };
  };
  catalogues: {
    title: string;
    description: string;
    searchPlaceholder: string;
    categories: {
      all: string;
      ccc: string;
      pavecrete: string;
      topcrete: string;
      specialized: string;
    };
    actions: {
      view: string;
      download: string;
    };
    fileInfo: {
      size: string;
      format: string;
    };
    noResults: string;
  };
}
