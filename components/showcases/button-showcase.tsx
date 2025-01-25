import React from 'react';
import { Button } from '../ui/button';

type ButtonShowcaseProps = {};

const ButtonShowcase = (props: ButtonShowcaseProps) => {
	return (
		<div className='mt-1 flex flex-col gap-2'>
			<div className='grid grid-cols-8 gap-1'>
				<Button
					size={'sm'}
					variant={'default'}
				>
					Default : Default
				</Button>
				<Button
					size={'sm'}
					variant={'default'}
					color={'primary'}
				>
					Primary : Default
				</Button>
				<Button
					size={'sm'}
					variant={'default'}
					color={'secondary'}
				>
					Secondary : Default
				</Button>
				<Button
					size={'sm'}
					variant={'default'}
					color={'destructive'}
				>
					Destructive : Default
				</Button>
				<Button
					size={'sm'}
					variant={'default'}
					color={'warning'}
				>
					Warning : Default
				</Button>
				<Button
					size={'sm'}
					variant={'default'}
					color={'success'}
				>
					Success : Default
				</Button>
				<Button
					size={'sm'}
					variant={'default'}
					color={'mode'}
				>
					Mode : Default
				</Button>
				<Button
					size={'sm'}
					variant={'default'}
					color={'muted'}
				>
					Muted : Default
				</Button>
			</div>

			<div className='grid grid-cols-8 gap-1'>
				{/* Solid */}
				<Button
					size={'sm'}
					variant={'solid'}
				>
					Default : Solid
				</Button>
				<Button
					size={'sm'}
					variant={'solid'}
					color={'primary'}
				>
					Primary : Solid
				</Button>
				<Button
					size={'sm'}
					variant={'solid'}
					color={'secondary'}
				>
					Secondary : Solid
				</Button>
				<Button
					size={'sm'}
					variant={'solid'}
					color={'destructive'}
				>
					Destructive : Solid
				</Button>
				<Button
					size={'sm'}
					variant={'solid'}
					color={'warning'}
				>
					Warning : Solid
				</Button>
				<Button
					size={'sm'}
					variant={'solid'}
					color={'success'}
				>
					Success : Solid
				</Button>
				<Button
					size={'sm'}
					variant={'solid'}
					color={'mode'}
				>
					Mode : Solid
				</Button>
				<Button
					size={'sm'}
					variant={'solid'}
					color={'muted'}
				>
					Muted : Solid
				</Button>
			</div>

			<div className='grid grid-cols-8 gap-1'>
				{/* Outline */}
				<Button
					size={'sm'}
					variant={'outline'}
				>
					Default : Outline
				</Button>
				<Button
					size={'sm'}
					variant={'outline'}
					color={'primary'}
				>
					Primary : Outline
				</Button>
				<Button
					size={'sm'}
					variant={'outline'}
					color={'secondary'}
				>
					Secondary : Outline
				</Button>
				<Button
					size={'sm'}
					variant={'outline'}
					color={'destructive'}
				>
					Destructive : Outline
				</Button>
				<Button
					size={'sm'}
					variant={'outline'}
					color={'warning'}
				>
					Warning : Outline
				</Button>
				<Button
					size={'sm'}
					variant={'outline'}
					color={'success'}
				>
					Success : Outline
				</Button>
				<Button
					size={'sm'}
					variant={'outline'}
					color={'mode'}
				>
					Mode : Outline
				</Button>
				<Button
					size={'sm'}
					variant={'outline'}
					color={'muted'}
				>
					Muted : Outline
				</Button>
			</div>

			<div className='grid grid-cols-8 gap-1'>
				{/* Ghost */}
				<Button
					size={'sm'}
					variant={'ghost'}
				>
					Default : Ghost
				</Button>
				<Button
					size={'sm'}
					variant={'ghost'}
					color={'primary'}
				>
					Primary : Ghost
				</Button>
				<Button
					size={'sm'}
					variant={'ghost'}
					color={'secondary'}
				>
					Secondary : Ghost
				</Button>
				<Button
					size={'sm'}
					variant={'ghost'}
					color={'destructive'}
				>
					Destructive : Ghost
				</Button>
				<Button
					size={'sm'}
					variant={'ghost'}
					color={'warning'}
				>
					Warning : Ghost
				</Button>
				<Button
					size={'sm'}
					variant={'ghost'}
					color={'success'}
				>
					Success : Ghost
				</Button>
				<Button
					size={'sm'}
					variant={'ghost'}
					color={'mode'}
				>
					Mode : Ghost
				</Button>
				<Button
					size={'sm'}
					variant={'ghost'}
					color={'muted'}
				>
					Muted : Ghost
				</Button>
			</div>

			<div className='grid grid-cols-8 gap-1'>
				{/* Soft */}
				<Button
					size={'sm'}
					variant={'soft'}
				>
					Default : Soft
				</Button>
				<Button
					size={'sm'}
					variant={'soft'}
					color={'primary'}
				>
					Primary : Soft
				</Button>
				<Button
					size={'sm'}
					variant={'soft'}
					color={'secondary'}
				>
					Secondary : Soft
				</Button>
				<Button
					size={'sm'}
					variant={'soft'}
					color={'destructive'}
				>
					Destructive : Soft
				</Button>
				<Button
					size={'sm'}
					variant={'soft'}
					color={'warning'}
				>
					Warning : Soft
				</Button>
				<Button
					size={'sm'}
					variant={'soft'}
					color={'success'}
				>
					Success : Soft
				</Button>
				<Button
					size={'sm'}
					variant={'soft'}
					color={'mode'}
				>
					Mode : Soft
				</Button>
				<Button
					size={'sm'}
					variant={'soft'}
					color={'muted'}
				>
					Muted : Soft
				</Button>
			</div>

			<div className='grid grid-cols-8 gap-1'>
				{/* Link */}
				<Button
					size={'sm'}
					variant={'link'}
				>
					Default : Link
				</Button>
				<Button
					size={'sm'}
					variant={'link'}
					color={'primary'}
				>
					Primary : Link
				</Button>
				<Button
					size={'sm'}
					variant={'link'}
					color={'secondary'}
				>
					Secondary : Link
				</Button>
				<Button
					size={'sm'}
					variant={'link'}
					color={'destructive'}
				>
					Destructive : Link
				</Button>
				<Button
					size={'sm'}
					variant={'link'}
					color={'warning'}
				>
					Warning : Link
				</Button>
				<Button
					size={'sm'}
					variant={'link'}
					color={'success'}
				>
					Success : Link
				</Button>
				<Button
					size={'sm'}
					variant={'link'}
					color={'mode'}
				>
					Mode : Link
				</Button>
				<Button
					size={'sm'}
					variant={'link'}
					color={'muted'}
				>
					Muted : Link
				</Button>
			</div>
		</div>
	);
};

export { ButtonShowcase };
