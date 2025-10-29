import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { env } from '@/lib/env';

export const Header = () => {
	return (
		<header className="border">
			<Container className="border-x p-6 flex justify-between items-center">
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/nodespec/light/logo.svg"
						alt="NodeSpec"
						width={40}
						height={40}
					/>
					<span className="hidden sm:block text-lg font-semibold">
						NodeSpec
					</span>
				</Link>
				<Link href={env.NEXT_PUBLIC_DISCOVERY_CALL_URL}>
					<Button className="rounded-3xl" size={'lg'}>
						Book Call
					</Button>
				</Link>
			</Container>
		</header>
	);
};
