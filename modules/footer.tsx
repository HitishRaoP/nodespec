'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { env } from '@/lib/env';

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t">
			<Container className="px-4 w-full mx-auto">
				<div className="py-12 md:py-16">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<div className="text-sm text-foreground/60">
							© {currentYear} NodeSpec All rights reserved
						</div>

						<Link href="/" className="flex items-center gap-2">
							<Image
								src="/nodespec/light/logo.svg"
								alt="NodeSpec"
								width={32}
								height={32}
							/>
							<span className="font-semibold text-lg">NodeSpec</span>
						</Link>

						<div className="flex items-center gap-6">
							<Link
								href={env.NEXT_PUBLIC_X_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm text-foreground/60 hover:text-foreground transition-colors"
							>
								X
							</Link>
							<Link
								href={`mailto:${env.NEXT_PUBLIC_EMAIL}`}
								className="text-sm text-foreground/60 hover:text-foreground transition-colors"
							>
								Email
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
}
