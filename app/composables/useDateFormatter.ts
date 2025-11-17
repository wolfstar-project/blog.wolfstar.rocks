// Shared date formatter composable to avoid recreating Intl.DateTimeFormat instances
// Creating Intl.DateTimeFormat is expensive, so we cache these instances
const dateFormatter = new Intl.DateTimeFormat(['en-GB', 'en-US']);
const longDateFormatter = new Intl.DateTimeFormat(['en-GB', 'en-US'], { dateStyle: 'full' });

export const useDateFormatter = () => {
	return {
		formatDate: (date: Date | string): string => {
			const dateObj = typeof date === 'string' ? new Date(date) : date;
			return dateFormatter.format(dateObj);
		},
		formatLongDate: (date: Date | string): string => {
			const dateObj = typeof date === 'string' ? new Date(date) : date;
			return longDateFormatter.format(dateObj);
		}
	};
};
