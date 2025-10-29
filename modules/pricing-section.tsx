'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { env } from '@/lib/env';
import { cn } from '@/lib/utils';

interface PricingPlan {
	id: string;
	name: string;
	description: string;
	price: string;
	period: string;
	features: string[];
	cta: string;
	popular?: boolean;
}

const PRICING_PLANS: PricingPlan[] = [
	{
		id: 'Basic',
		name: 'Basic',
		description: 'Perfect for early-stage projects and proof of concepts',
		price: '$2,999',
		period: 'Per Month',
		features: [
			'Full-stack web application',
			'Responsive design & mobile optimization',
			'Basic authentication & user management',
			'Database design & setup',
			'API integration (up to 3 services)',
			'Performance optimization',
			'Deployment & hosting setup',
			'Basic documentation',
			'30 days of post-launch support',
		],
		cta: 'Get Started',
	},
	{
		id: 'Pro',
		name: 'Pro',
		description: 'For ambitious projects requiring advanced features',
		price: '$9,999',
		period: 'Per Project',
		features: [
			'Everything in MVP Starter, plus:',
			'Advanced authentication & authorization',
			'Payment processing integration',
			'Email & notification system',
			'API integrations (up to 8 services)',
			'Search & filtering capabilities',
			'Analytics dashboard',
			'Real-time features (WebSocket support)',
			'Monthly optimization reviews',
		],
		cta: 'Start Your Project',
		popular: true,
	},
];

export function PricingSection() {
	const { theme, systemTheme } = useTheme();
	const isDark =
		theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

	return (
		<section id="pricing" className="px-4 py-20 md:py-28 border-t">
			<Container className="px-4">
				<div className="mb-16">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-center">
						Transparent pricing for your startup
					</h2>
					<p className="text-foreground/60 md:text-lg text-center max-w-2xl mx-auto">
						Choose the plan that fits your project scope. All plans include our
						expert guidance and quality assurance.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-4">
					{PRICING_PLANS.map((plan) => (
						<div key={plan.id} className="relative p-1 rounded-4xl border">
							<Card
								className={cn(
									'h-full flex flex-col transition-all duration-300 rounded-4xl',
								)}
							>
								<CardHeader className="flex flex-col gap-3">
									<div>
										<CardTitle className="text-2xl">{plan.name}</CardTitle>
										<CardDescription className="mt-2 bg-muted p-2 px-4 rounded-full">
											{plan.description}
										</CardDescription>
									</div>
									<div className="flex items-baseline gap-2">
										<span className="text-4xl font-bold">{plan.price}</span>
										<span className="text-foreground/60 text-sm">
											{plan.period}
										</span>
									</div>
								</CardHeader>

								<CardContent className="flex-1 flex flex-col gap-6">
									<div className="space-y-3 flex-1">
										<ul className="space-y-3">
											{plan.features.map((feature, idx) => (
												<li
													key={`${plan.id}-feature-${idx}`}
													className="flex items-start gap-3 text-foreground/80 border-t py-4"
												>
													<svg
														className={cn(
															'w-5 h-5 shrink-0 mt-0.5',
															isDark ? 'text-primary' : 'text-primary',
														)}
														viewBox="0 0 24 24"
														fill="currentColor"
														xmlns="http://www.w3.org/2000/svg"
														role="img"
														aria-label="Included feature"
													>
														<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
													</svg>
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</div>
								</CardContent>
								<CardFooter>
									<div className="flex items-center gap-2 w-full">
										<Button asChild size={'lg'} className={cn('flex-1')}>
											<Link href={env.NEXT_PUBLIC_DISCOVERY_CALL_URL}>
												{'Book a call'}
											</Link>
										</Button>
										<Button
											asChild
											size={'lg'}
											className={cn('flex-1')}
											variant="outline"
										>
											<Link href={`mailto:${env.NEXT_PUBLIC_EMAIL}`}>
												{'Write a mail'}
											</Link>
										</Button>
									</div>
								</CardFooter>
							</Card>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
