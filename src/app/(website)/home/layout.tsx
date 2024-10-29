import type { Metadata } from 'next'

import { BannerHeader, Footer, Header } from '@core/components/'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<BannerHeader />
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
