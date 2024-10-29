import localFont from 'next/font/local'

const geist = localFont({
	display: 'swap',
	src: './Geist/GeistVF.woff2',
	style: 'normal',
	variable: '--font-geist',
	weight: '100 900',
})

const spaceGrotesk = localFont({
	display: 'swap',
	src: './SpaceGrotesk/SpaceGroteskVF.woff2',
	style: 'normal',
	variable: '--font-space-grotest',
	weight: '100 900',
})

export { geist, spaceGrotesk }
