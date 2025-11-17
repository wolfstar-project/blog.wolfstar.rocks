import '@vite-pwa/nuxt';
import 'nuxt';
import tailwindcss from '@tailwindcss/vite';

const manifestIcons = [
	{
		src: 'https://blog.wolfstar.rocks/icons/android-chrome-36x36.png',
		sizes: '36x36',
		type: 'image/png',
		purpose: 'any badge'
	},
	{
		src: 'https://blog.wolfstar.rocks/icons/android-chrome-48x48.png',
		sizes: '48x48',
		type: 'image/png'
	},
	{
		src: 'https://blog.wolfstar.rocks/icons/android-chrome-72x72.png',
		sizes: '72x72',
		type: 'image/png'
	},
	{
		src: 'https://blog.wolfstar.rocks/icons/android-chrome-96x96.png',
		sizes: '96x96',
		type: 'image/png'
	},
	{
		src: 'https://blog.wolfstar.rocks/icons/android-chrome-144x144.png',
		sizes: '144x144',
		type: 'image/png'
	},
	{
		src: 'https://blog.wolfstar.rocks/icons/android-chrome-192x192.png',
		sizes: '192x192',
		type: 'image/png'
	},
	{
		src: 'https://blog.wolfstar.rocks/icons/android-chrome-256x256.png',
		sizes: '256x256',
		type: 'image/png'
	},
	{
		src: 'https://blog.wolfstar.rocks/icons/android-chrome-384x384.png',
		sizes: '384x384',
		type: 'image/png'
	},
	{
		src: 'https://blog.wolfstar.rocks/icons/android-chrome-512x512.png',
		sizes: '512x512',
		type: 'image/png'
	},
	{
		src: 'https://blog.wolfstar.rocks/icons/maskable_icon.png',
		sizes: '640x640',
		type: 'image/png',
		purpose: 'any maskable'
	}
];

export default defineNuxtConfig({
	css: ['~/app/assets/css/tailwind.css'],
	site: { url: 'blog.wolfstar.rocks' },
	modules: ['@nuxtjs/sitemap', '@nuxt/content', '@vite-pwa/nuxt', '@nuxthub/core'],
	pwa: {
		registerType: 'autoUpdate',
		includeManifestIcons: false,
		devOptions: {
			enabled: false,
			type: 'module'
		},
		manifest: {
			background_color: '#16171D',
			categories: ['discord', 'bot', 'WolfStar', 'moderation', 'automation', 'redstar071'],
			description: "WolfStar Project's Blog Posts",
			display: 'minimal-ui',
			lang: 'en',
			name: 'WolfStar Network Blog',
			orientation: 'portrait-primary',
			scope: '/',
			short_name: 'WolfStar Network',
			start_url: '/',
			theme_color: '#fd171b',
			icons: manifestIcons,
			shortcuts: [
				{
					name: 'WolfStar Network Blog Home',
					short_name: 'WolfStar Network Blog',
					description: 'Go to WolfStar Network Blog',
					url: '/',
					icons: manifestIcons
				}
			]
		}
	},
	typescript: {
		shim: false
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'WolfStar Blog',
			htmlAttrs: { lang: 'en' },
			link: [
				{ rel: 'alternate', href: 'https://blog.wolfstar.rocks' },
				{ rel: 'canonical', href: 'https://blog.wolfstar.rocks' },
				{ rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' },
				{ rel: 'apple-touch-startup-image', href: '/icons/apple-startup.png' },
				{ rel: 'icon', href: '/favicon.ico' },
				{ rel: 'icon', href: '/icons/favicon-16x16.png' },
				{ rel: 'icon', href: '/icons/android-chrome-192x192.png' },
				{ rel: 'icon', href: '/icons/favicon-32x32.png' },
				{ rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg' },
				{ rel: 'shortcut icon', href: '/favicon.ico' }
			],
			meta: [
				{ 'http-equiv': 'Cache-Control', content: '1y' },
				{ 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
				{ 'http-equiv': 'Expires', content: '1y' },
				{ 'http-equiv': 'Page-Enter', content: 'RevealTrans(Duration=2.0,Transition=2)' },
				{ 'http-equiv': 'Page-Exit', content: 'RevealTrans(Duration=3.0,Transition=12)' },
				{ 'http-equiv': 'Pragma', content: '1y' },
				{ name: 'apple-mobile-web-app-capable', content: 'yes' },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
				{ name: 'apple-mobile-web-app-title', content: 'WolfStar Blogs' },
				{ name: 'application-name', content: 'WolfStar Blogs' },
				{ name: 'audience', content: 'all' },
				{ name: 'author', content: 'WolfStar Project, contact@wolfstar.rocks' },
				{ name: 'coverage', content: 'Worldwide' },
				{ name: 'description', content: "WolfStar Project's Blog Posts" },
				{ name: 'designer', content: 'Davide Trinastich, redtwoghost@gmail.com' },
				{ name: 'distribution', content: 'Global' },
				{ name: 'googlebot', content: 'index,follow' },
				{ name: 'HandheldFriendly', content: 'True' },
				{ name: 'identifier-URL', content: 'https://blog.wolfstar.rocks' },
				{ name: 'keywords', content: 'WolfStar, discord, bot, blog, blogs' },
				{ name: 'msapplication-config', content: '/icons/browserconfig.xml' },
				{ name: 'msapplication-TileColor', content: '#fd171b' },
				{ name: 'msapplication-TileImage', content: '/icons/mstile-144x144.png' },
				{ name: 'owner', content: 'Davide Trinastich, redtwoghost@gmail.com' },
				{ name: 'rating', content: 'safe for kids' },
				{ name: 'reply-to', content: 'contact@wolfstar.rocks' },
				{ name: 'revisit-after', content: '7 days' },
				{ name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
				{ name: 'shortlink', content: 'https://blog.wolfstar.rocks' },
				{ name: 'subject', content: "WolfStar Project's Blog Posts" },
				{ name: 'summary', content: "WolfStar Project's Blog Posts." },
				{ name: 'target', content: 'all' },
				{ name: 'theme-color', content: '#fd171b' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:creator', content: '@RedStar071' },
				{ name: 'twitter:image', content: 'https://blog.wolfstar.rocks/icons/opengraph.png' },
				{ name: 'twitter:site', content: '@RedStar071' },
				{ name: 'url', content: 'https://blog.wolfstar.rocks' },
				{ property: 'og:description', content: "WolfStar Project's Blog Posts" },
				{ property: 'og:email', content: 'contact@wolfstar.rocks' },
				{ property: 'og:image:alt', content: 'OpenGraphImage' },
				{ property: 'og:image:height', content: '512' },
				{ property: 'og:image:width', content: '1024' },
				{ property: 'og:image', content: 'https://blog.wolfstar.rocks/icons/opengraph.png' },
				{ property: 'og:locale', content: 'en' },
				{ property: 'og:site_name', content: "WolfStar Project's Blog Posts" },
				{ property: 'og:title', content: "WolfStar Project's Blog Posts" },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: 'https://blog.wolfstar.rocks' }
			]
		}
	},
	vite: {
		plugins: [
			tailwindcss()
		]
	},

	nitro: {
		prerender: {
			routes: ['/sitemap.xml', '/'],
			crawlLinks: true
		}
	},
	content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
	compatibilityDate: '2025-02-25'
});
