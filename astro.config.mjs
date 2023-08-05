import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		starlight({
			title: 'Manuel',
			defaultLocale: 'fr',
			// social: {
			// 	github: 'https://github.com/withastro/starlight',
			// },
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Introduction', link: '/docs/guides/intro' },
						{ label: 'Authentification', link: '/docs/guides/auth' },
						{ label: 'Stock', link: '/docs/guides/stock' },
					],
				},
				{
					label: 'Administrateur',
					items: [
						{ label: 'Utilisateur', link: '/docs/administrateur/user' },
						{ label: 'Produit', link: '/docs/administrateur/product' },
						{ label: 'Ravitaillement', link: '/docs/administrateur/supply' },
					],
				},
				{
					label: 'Distributeur',
					items: [
						{ label: 'Ravitaillement', link: '/docs/distributeur/supply' },
					],
				},
				{
					label: 'Boutique',
					items: [
						{ label: 'Ventes', link: '/docs/boutique/sale' },
						{ label: 'Ravitaillement', link: '/docs/boutique/supply' },
					],
				},
				{
					label: 'Reference',
					autogenerate: {directory: "docs/reference"}
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
