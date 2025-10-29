import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Container } from '@/components/ui/container';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { DockNav } from '@/modules/dock-nav';
import { Footer } from '@/modules/footer';
import { Header } from '@/modules/header-view';

export const metadata: Metadata = {
	title: 'NodeSpec',
	description: 'NodeSpec',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(fonts.ibmPlexSans.className)}>
				<ThemeProvider>
					<Header />
					<Container className="border-x">{children}</Container>
					<Footer />
					<DockNav />
				</ThemeProvider>
			</body>
		</html>
	);
}
