import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Container } from '@/components/ui/container';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

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
					<Container>{children}</Container>
				</ThemeProvider>
			</body>
		</html>
	);
}
