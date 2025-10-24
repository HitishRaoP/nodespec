import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export const Header = () => {
	return (
		<header className="border-dashed-animated">
			<Container className="border-x-dashed-animated p-6 flex justify-between items-center">
				<div>NodeSpec</div>
				<Button className="rounded-3xl" size={'lg'}>
					Hire Us
				</Button>
			</Container>
		</header>
	);
};
