<script lang="ts">
    import type { FooterSection, SocialLink } from '$lib/types';

    const footerSections: FooterSection[] = [
        {
            title: 'Solutions',
            links: [
                { href: '/services#cabinetry', label: 'Custom Cabinetry' },
                { href: '/services#millwork', label: 'Architectural Millwork' },
                { href: '/services#furniture', label: 'Custom Furniture' }
            ]
        },
        {
            title: 'Company',
            links: [
                { href: '/about', label: 'About Us' },
                { href: '/gallery', label: 'Our Work' },
                { href: '/contact', label: 'Contact' }
            ]
        }
    ];

    const socialLinks: SocialLink[] = [
        { href: 'https://facebook.com', label: 'Facebook', icon: 'facebook' },
        { href: 'https://www.instagram.com/elementsmillwork', label: 'Instagram', icon: 'instagram' },
        { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' }
    ];
</script>

<footer class="bg-gray-900">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="space-y-8 xl:col-span-1">
                <div class="text-white text-2xl font-bold">
                    Elements
                </div>
                <p class="text-gray-400 text-base">
                    Crafting excellence in custom millwork and architectural elements since 2010.
                </p>
                <div class="flex space-x-6">
                    {#each socialLinks as { href, label, icon }}
                        <a href={href} class="text-gray-400 hover:text-gray-300">
                            <span class="sr-only">{label}</span>
                            <!-- Replace these with actual social media icons -->
                            <div class="h-6 w-6 text-gray-400 hover:text-white transition-colors">
                                {icon}
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
            <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                <div class="md:grid md:grid-cols-2 md:gap-8">
                    {#each footerSections as section}
                        <div>
                            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                {section.title}
                            </h3>
                            <ul class="mt-4 space-y-4">
                                {#each section.links as link}
                                    <li>
                                        <a href={link.href} class="text-base text-gray-300 hover:text-white">
                                            {link.label}
                                        </a>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        <div class="mt-12 border-t border-gray-700 pt-8">
            <p class="text-base text-gray-400 text-center">
                © {new Date().getFullYear()} Elements Millwork & Flooring Inc. All rights reserved.
            </p>
        </div>
    </div>
</footer>