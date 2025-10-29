'use client';

import { FAQSection } from '@/modules/faq-section';
import { HeroSection } from '@/modules/hero-section';
import { PricingSection } from '@/modules/pricing-section';
import { WorksSection } from '@/modules/works-section';

export default function Home() {
	return (
		<div>
			<HeroSection />
			<PricingSection />
			<WorksSection />
			<FAQSection />
		</div>
	);
}
