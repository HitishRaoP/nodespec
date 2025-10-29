'use client';

import { useState } from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

interface FAQItem {
	id: string;
	question: string;
	answer: string;
	email?: string;
}

const FAQS: FAQItem[] = [
	{
		id: '1',
		question: 'What services do you offer?',
		answer:
			"We specialize in building everything from portfolio websites to full-featured MVPs. Our services include custom web development, mobile apps, API design, database architecture, and deployment. We handle the complete product development lifecycle tailored to your startup's needs.",
		email: 'hitish@nodespec.in',
	},
	{
		id: '2',
		question: 'How long does it take to build an MVP?',
		answer:
			"Typically, an MVP takes 4-8 weeks depending on complexity and scope. We start with requirements gathering, design, and development phases. Our agile approach means you'll see progress weekly and can provide feedback throughout the development process.",
		email: 'hitish@nodespec.in',
	},
	{
		id: '3',
		question: 'Can you help refine my idea into a product?',
		answer:
			"Absolutely! We work closely with founders to validate ideas, define MVP scope, and prioritize features. Our team has experience turning rough concepts into market-ready products. We'll help you identify what's essential for launch and what can wait for later versions.",
		email: 'hitish@nodespec.in',
	},
	{
		id: '4',
		question: 'Do you provide post-launch support?',
		answer:
			'Yes, all our projects include post-launch support. We offer bug fixes, performance optimization, and feature enhancements. Our support packages range from 30 days to ongoing maintenance, ensuring your product runs smoothly after launch.',
		email: 'hitish@nodespec.in',
	},
	{
		id: '5',
		question: 'What tech stack do you use?',
		answer:
			'We use modern, scalable technologies: React/Next.js for frontend, Node.js/Python for backend, PostgreSQL/MongoDB for databases, and cloud platforms like Vercel and AWS. We choose the best tech for your specific needs, prioritizing performance, maintainability, and cost-efficiency.',
		email: 'hitish@nodespec.in',
	},
];

export function FAQSection() {
	const [selectedId, setSelectedId] = useState(FAQS[0].id);
	const selectedFaq = FAQS.find((faq) => faq.id === selectedId);

	return (
		<section id="faq" className="px-4 py-20 md:py-28 border-t">
			<Container className="px-4">
				<div className="mb-12">
					<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-center">
						Frequently Asked Questions
					</h2>
					<p className="text-foreground/60 md:text-lg text-center">
						Find answers to common questions about NodeSpec and how it can help
						your team.
					</p>
				</div>

				<div className="sm:hidden">
					<Accordion type="single" collapsible defaultValue="1">
						{FAQS.map((faq) => (
							<AccordionItem key={faq.id} value={faq.id}>
								<AccordionTrigger className="text-left">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="space-y-3">
									<p className="text-foreground/80 text-sm leading-relaxed">
										{faq.answer}
									</p>
									<div className="border-t border-border pt-3 space-y-1.5 text-xs">
										<div className="flex items-baseline gap-2">
											<span className="text-foreground/60 font-medium min-w-fit">
												From:
											</span>
											<span className="text-foreground truncate">
												{faq.email}
											</span>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>

				<div className="hidden sm:grid grid-cols-2 gap-6 lg:gap-8 md:items-start">
					<div className="flex-1 space-y-2 flex flex-col h-full">
						{FAQS.map((faq) => (
							<Button
								key={faq.id}
								variant={selectedId === faq.id ? 'ghost' : 'outline'}
								size={'lg'}
								onClick={() => setSelectedId(faq.id)}
								className={cn('w-full p-4 rounded-lg border flex-1 h-auto')}
							>
								<div className="flex items-start gap-2 w-full">
									<div
										className={cn(
											'w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 mt-0.5',
											selectedId === faq.id
												? 'bg-primary text-primary-foreground'
												: 'bg-border text-foreground/60',
										)}
									>
										{faq.id}
									</div>
									<div className="flex-1 min-w-0">
										<span
											className={cn(
												'font-medium text-base line-clamp-2 block text-left',
												selectedId === faq.id
													? 'text-foreground'
													: 'text-foreground/70',
											)}
										>
											{faq.question}
										</span>
									</div>
								</div>
							</Button>
						))}
					</div>

					{selectedFaq && (
						<div className="flex flex-col gap-4">
							<div className="border rounded-lg p-6 h-full">
								<h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
									{selectedFaq.question}
								</h3>
								<div className="space-y-2 text-sm mb-4">
									<div className="flex items-baseline gap-2">
										<span className="text-foreground/60 font-medium min-w-fit">
											From:
										</span>
										<span className="text-foreground truncate">
											{selectedFaq.email}
										</span>
									</div>
									<div className="flex items-baseline gap-2">
										<span className="text-foreground/60 font-medium min-w-fit">
											To:
										</span>
										<span className="text-foreground">You</span>
									</div>
								</div>
								<div className="border-t border-border my-3 pt-4 flex-1">
									<p className="text-foreground/80 leading-relaxed text-base">
										{selectedFaq.answer}
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</Container>
		</section>
	);
}
