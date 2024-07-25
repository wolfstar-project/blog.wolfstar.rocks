import sapphirePrettierConfig from '@sapphire/prettier-config';

export default {
	...sapphirePrettierConfig,
	overrides: [
		{
			files: '*.svg',
			options: {
				parser: 'html'
			}
		},
		{
			files: ['README.md', 'content/**/*.md'],
			options: {
				tabWidth: 2,
				useTabs: false,
				printWidth: 120,
				proseWrap: 'always'
			}
		}
	]
};
