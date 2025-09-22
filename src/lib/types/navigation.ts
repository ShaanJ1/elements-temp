export interface NavLink {
    href: string;
    label: string;
    isExternal?: boolean;
}

export interface FooterSection {
    title: string;
    links: NavLink[];
}

export interface SocialLink extends NavLink {
    icon: string;
}