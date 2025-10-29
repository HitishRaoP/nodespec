'use client';

import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Container } from '@/components/ui/container';

interface Project {
	id: string;
	name: string;
	url: string;
	description: string;
}

const PROJECTS: Project[] = [
	{
		id: '1',
		name: 'Instapark',
		url: 'https://instapark.in',
		description: 'Airbnb but for parking spaces',
	},
	{
		id: '2',
		name: 'Rolt',
		url: 'https://github.com/HitishRaoP/rolt',
		description: 'Serverless deployment platform like vercel',
	},
	{
		id: '3',
		name: 'MedBlocks',
		url: 'http://medblocks-kappa.vercel.app/',
		description: 'Patient management system but using pglite',
	},
	{
		id: '4',
		name: 'Portfolio',
		url: 'https://hitishraop.github.io/showcase/',
		description: 'Building a portfolio using basic stuff',
	},
];

const LIGHT_GRADIENTS = [
	'from-blue-200 to-cyan-300',
	'from-emerald-200 to-teal-300',
	'from-rose-200 to-pink-300',
	'from-orange-200 to-amber-300',
];

function getRandomGradient(id: string): string {
	const index = parseInt(id, 10) % LIGHT_GRADIENTS.length;
	return LIGHT_GRADIENTS[index];
}

export function WorksSection() {
	return (
		<section id="works" className="px-4 py-20 md:py-28 border-t">
			<Container className="px-4">
				<div className="mb-16">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-center">
						Our Recent Projects
					</h2>
					<p className="text-foreground/60 md:text-lg text-center max-w-2xl mx-auto">
						See how we've built projects from portfolios to technically
						difficult ones.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{PROJECTS.map((project) => (
						<Card
							key={project.id}
							className="group flex flex-col border p-1.5 rounded-4xl pb-4"
						>
							<Link
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<CardContent className="px-0">
									<div
										className={`relative overflow-hidden border rounded-4xl bg-secondary/50 aspect-[4/3] mb-6 cursor-pointer duration-300 bg-gradient-to-r ${getRandomGradient(project.id)}`}
									/>
								</CardContent>
								<CardFooter className="space-y-2 flex-1 flex flex-col items-start">
									<h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
										{project.name}
									</h3>
									<p className="text-sm text-foreground/60 line-clamp-2 flex-1">
										{project.description}
									</p>
								</CardFooter>
							</Link>
						</Card>
					))}
				</div>
			</Container>
		</section>
	);
}
