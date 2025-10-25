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
	author?: string;
	email?: string;
}

const FAQS: FAQItem[] = [
	{
		id: '1',
		question: 'What is NodeSpec?',
		answer:
			'NodeSpec is a comprehensive documentation and specification platform designed to help teams build better APIs and services. It provides an intuitive interface for creating, managing, and sharing technical specifications.',
		author: 'Sarah Johnson',
		email: 'sarah@nodespec.co',
	},
	{
		id: '2',
		question: 'How do I get started?',
		answer:
			'Getting started with NodeSpec is simple. Sign up for an account, create a new project, and begin documenting your API endpoints. Our intuitive editor makes it easy to add parameters, responses, and examples.',
		author: 'John Smith',
		email: 'john@nodespec.co',
	},
	{
		id: '3',
		question: 'Can I collaborate with my team?',
		answer:
			'Yes! NodeSpec supports real-time collaboration. Invite team members to your projects, assign permissions, and work together seamlessly. All changes are synced in real-time across all collaborators.',
		author: 'Emma Wilson',
		email: 'emma@nodespec.co',
	},
	{
		id: '4',
		question: 'What formats are supported?',
		answer:
			'NodeSpec supports OpenAPI 3.0, OpenAPI 3.1, Swagger 2.0, and custom JSON schemas. You can also import existing specifications and convert between formats with a single click.',
		author: 'Michael Chen',
		email: 'michael@nodespec.co',
	},
	{
		id: '5',
		question: 'Is there an API?',
		answer:
			'Absolutely! NodeSpec provides a comprehensive REST API that allows you to programmatically access and manage your specifications. Check our developer documentation for detailed API reference and examples.',
		author: 'David Rodriguez',
		email: 'david@nodespec.co',
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
									{faq.author && (
										<div className="border-t border-border pt-3 space-y-1.5 text-xs">
											<div className="flex items-baseline gap-2">
												<span className="text-foreground/60 font-medium min-w-fit">
													From:
												</span>
												<span className="text-foreground truncate">
													{faq.author}
												</span>
											</div>
											<div className="flex items-baseline gap-2">
												<span className="text-foreground/60 font-medium min-w-fit">
													Email:
												</span>
												<span className="text-foreground truncate">
													{faq.email}
												</span>
											</div>
										</div>
									)}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>

				<div className="hidden sm:grid grid-cols-2 gap-6 lg:gap-8 md:items-end">
					<div className="space-y-2">
						{FAQS.map((faq) => (
							<Button
								key={faq.id}
								onClick={() => setSelectedId(faq.id)}
								className={cn(
									'w-full text-left p-3 rounded-lg border border-border transition-all duration-200',
									selectedId === faq.id
										? 'bg-primary/10 border-primary shadow-md'
										: 'hover:bg-secondary/50 hover:border-primary/50',
								)}
							>
								<div className="flex items-start gap-2">
									<div
										className={cn(
											'w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5',
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
												'font-medium text-sm line-clamp-2 block',
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
							<div className="border border-border rounded-lg p-4 bg-secondary/20 h-full flex flex-col">
								<h3 className="text-lg md:text-xl font-bold mb-3 text-foreground">
									{selectedFaq.question}
								</h3>
								<div className="space-y-1.5 text-xs mb-3">
									<div className="flex items-baseline gap-2">
										<span className="text-foreground/60 font-medium min-w-fit">
											From:
										</span>
										<span className="text-foreground truncate">
											{selectedFaq.author}
										</span>
									</div>
									<div className="flex items-baseline gap-2">
										<span className="text-foreground/60 font-medium min-w-fit">
											Email:
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
								<div className="border-t border-border my-2 pt-3 flex-1">
									<p className="text-foreground/80 leading-relaxed text-xs md:text-sm">
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
