import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		starlight({
			title: 'Manuel',
			// social: {
			// 	github: 'https://github.com/withastro/starlight',
			// },
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Administrateur',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Distributeur',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Boutique',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
