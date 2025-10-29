'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { env } from '@/lib/env';

const DEFAULT_PROPS = {
	badge: 'Available for New Projects',
	headline: 'A Dedicated Team For Your Startup',
	highlightedText: 'Startup',
	description: "We don't just build, we solve your brand's biggest challenges",
	ctaText: 'View Plans and Pricing',
	ctaHref: '#pricing',
	secondaryCtaText: 'Book a Call',
	secondaryCtaHref: env.NEXT_PUBLIC_DISCOVERY_CALL_URL,
};
export function HeroSection() {
	const parts = DEFAULT_PROPS.headline.split(
		new RegExp(`(${DEFAULT_PROPS.highlightedText})`, 'i'),
	);

	return (
		<section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
			<div className="absolute inset-0 -z-10 opacity-30">
				<div className="absolute inset-0 bg-grid-pattern"></div>
			</div>

			<Container className="px-4 text-center max-w-4xl">
				<div className="mb-8 flex justify-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
						<div className="w-2 h-2 rounded-full bg-green-500"></div>
						<span className="text-sm font-medium text-foreground">
							{DEFAULT_PROPS.badge}
						</span>
					</div>
				</div>

				<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter mb-6 leading-tight">
					{parts
						.filter((part) => part.length > 0)
						.map((part) =>
							part.toLowerCase() ===
							DEFAULT_PROPS.highlightedText.toLowerCase() ? (
								<span
									key={`highlight-${part}`}
									className="relative inline-block px-4 py-3 mx-1"
								>
									<span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl"></span>
									<span className="relative font-black text-white">{part}</span>
								</span>
							) : (
								<span key={`text-${part}`}>{part}</span>
							),
						)}
				</h1>

				<p className="text-lg sm:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
					{DEFAULT_PROPS.description}
				</p>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Link href={DEFAULT_PROPS.ctaHref}>
						<Button
							size="lg"
							className="rounded-full px-8 h-12 text-base font-semibold"
						>
							{DEFAULT_PROPS.ctaText}
						</Button>
					</Link>
					{DEFAULT_PROPS.secondaryCtaText && DEFAULT_PROPS.secondaryCtaHref && (
						<Link href={DEFAULT_PROPS.secondaryCtaHref}>
							<Button
								size="lg"
								variant="outline"
								className="rounded-full px-8 h-12 text-base font-semibold"
							>
								{DEFAULT_PROPS.secondaryCtaText}
							</Button>
						</Link>
					)}
				</div>
			</Container>
		</section>
	);
}
