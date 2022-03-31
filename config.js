// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Tiago',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '2dd38ff4dbc953d309858623677d6103', // Write here your API Key
	weatherIcons: 'OneDark', // 'OneDark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '52.406822',
	defaultLongitude: '-1.519693',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '2',
			name: 'Twitch',
			icon: 'twitch',
			link: 'https://www.twitch.com/xqcow/',
		},
		{
			id: '3',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com/',
		},
		{
			id: '5',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '4',
			name: 'Mail',
			icon: 'mail',
			link: 'https://icloud.com/mail/',
		},
		{
			id: '6',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://icloud.com/calendar/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'empty',
			icon: 'circle-slashed',
			link: 'https://empty.com/',
		},
		{
			id: '2',
			name: 'empty',
			icon: 'circle-slashed',
			link: 'https://empty.com/',
		},
		{
			id: '3',
			name: 'empty',
			icon: 'circle-slashed',
			link: 'https://empty.com/',
		},
		{
			id: '4',
			name: 'empty',
			icon: 'circle-slashed',
			link: 'https://empty.com/',
		},
		{
			id: '5',
			name: 'empty',
			icon: 'circle-slashed',
			link: 'https://empty.com/',
		},
		{
			id: '6',
			name: 'empty',
			icon: 'circle-slashed',
			link: 'https://empty.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'coffee',
			id: '1',
			links: [
				{
					name: 'LinkedIn',
					link: 'https://www.linkedin.com/',
				},
				{
					name: 'GitHub',
					link: 'https://github.com/',
				},
				{
					name: 'MyPrint',
					link: 'https://myprint.coventry.ac.uk/',
				},
				{
					name: 'Aula',
					link: 'https://coventry.aula.education/?#/dashboard/d0f2228a-9eff-445e-953d-ebf4082fa218/community/feed',
				},
			],
		},
		{
			icon: 'glasses',
			id: '2',
			links: [
				{
					name: 'Portugal',
					link: 'https://reddit.com/r/Portugal/',
				},
				{
					name: 'Manchester',
					link: 'https://reddit.com/r/Manchester/',
				},
				{
					name: 'Europe',
					link: 'https://reddit.com/r/Europe',
				},
				{
					name: 'Finance',
					link: 'https://www.reddit.com/user/imtiagosousa/m/finance/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'circle-slashed',
			id: '1',
			links: [
				{
					name: 'empty',
					link: 'https://empty.com',
				},
				{
					name: 'empty',
					link: 'https://empty.com',
				},
				{
					name: 'empty',
					link: 'https://empty.com',
				},
				{
					name: 'empty',
					link: 'https://empty.com',
				},
			],
		},
		{
			icon: 'circle-slashed',
			id: '2',
			links: [
				{
					name: 'empty',
					link: 'https://empty.com',
				},
				{
					name: 'empty',
					link: 'https://empty.com',
				},
				{
					name: 'empty',
					link: 'https://empty.com',
				},
				{
					name: 'empty',
					link: 'https://empty.com',
				},
			],
		},
	],
};
