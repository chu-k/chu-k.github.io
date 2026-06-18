export type HomeItem = {
  label: string;
  href?: string;
  linkLabel?: string;
  external?: boolean;
  prefix?: string;
};

export type HomeSection = {
  title: string;
  items?: HomeItem[];
  volumes?: {
    include?: number[];
    exclude?: number[];
    sort?: "asc" | "desc";
    showEmpty?: boolean;
  };
};

export type SiteConfig = {
  name: string;
  description: string;
  homeAsciiArt: string;
  homeSections: HomeSection[];
};

export const siteConfig: SiteConfig = {
  name: "Kevin Chu",
  description: "Personal Website",
  homeAsciiArt: "",
  homeSections: [
    {
      title: "About",
      items: [
        {
          label: "Hello, I'm Kevin. I build software tools and infrastructure for scientists and engineers."
        }
      ]
    },
    {
      title: "Social",
      items: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/chu-kevin/",
          external: true,
          prefix: "~ open"
        },
        {
          label: "GitHub",
          href: "https://github.com/chu-k",
          external: true,
          prefix: "~ open"
        },
        {
          label: "Google Scholar",
          href: "https://scholar.google.com/citations?user=HJXYzrYAAAAJ&hl=en",
          external: true,
          prefix: "~ open"
        }
      ]
    },
    {
      title: "Resume",
      items: [
        {
          label: "Resume (PDF)",
          href: "/resume.pdf",
          prefix: "~ download"
        }
      ]
    },
    {
      title: "Projects",
      items: [
        {
          label: "Camelcamelcamel for Reddit marketplaces",
          href: "https://alienalienalien.com/",
          external: true,
          prefix: "~ view"
        }
      ]
    }
  ]
};
