'use client';

import Link from 'next/link';
import type React from 'react';
import { buttonVariants } from '@/components/ui/button';
import { Dock, DockIcon } from '@/components/ui/dock';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		{...props}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
		/>
	</svg>
);

const WorksIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		{...props}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
		/>
	</svg>
);

const ContactIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		{...props}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
		/>
	</svg>
);

const FAQIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		{...props}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
		/>
	</svg>
);

const iconMap = {
	home: HomeIcon,
	works: WorksIcon,
	contact: ContactIcon,
	faq: FAQIcon,
};

const DATA = {
	navbar: [
		{ href: '#home', icon: 'home' as const, label: 'Home' },
		{ href: '#works', icon: 'works' as const, label: 'Works' },
		{ href: '#contact', icon: 'contact' as const, label: 'Contact' },
		{ href: '#faq', icon: 'faq' as const, label: 'FAQs' },
	],
};

export function DockNav() {
	return (
		<div className="fixed bottom-0 left-0 right-0 mb-6 px-6 flex flex-col items-center justify-center">
			<TooltipProvider>
				<Dock
					direction="middle"
					className="shadow-sm p-8 sm:p-9 rounded-3xl sm:space-x-4"
				>
					{DATA.navbar.map((item) => {
						const Icon = iconMap[item.icon];
						return (
							<DockIcon key={item.label}>
								<Tooltip>
									<TooltipTrigger asChild>
										<Link
											href={item.href}
											aria-label={item.label}
											className={cn(
												buttonVariants({ variant: 'ghost', size: 'icon' }),
												'size-12 rounded-full',
											)}
										>
											<Icon className="size-6" />
										</Link>
									</TooltipTrigger>
									<TooltipContent>
										<p>{item.label}</p>
									</TooltipContent>
								</Tooltip>
							</DockIcon>
						);
					})}
				</Dock>
			</TooltipProvider>
		</div>
	);
}
