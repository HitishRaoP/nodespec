import type React from 'react';
import { cn } from '@/lib/utils';

export const Container = (props: React.ComponentProps<'div'>) => {
	return (
		<div {...props} className={cn('max-w-4xl mx-auto', props.className)}>
			{props.children}
		</div>
	);
};
