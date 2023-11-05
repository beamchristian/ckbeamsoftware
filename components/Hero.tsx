import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface HeroProps {
	image: StaticImageData;
	altText: string;
	title: string;
	description: string;
}

const Hero = ({ image, altText, title, description }: HeroProps) => {
	return (
		<div className='relative h-[500px]'>
			<Image
				src={image}
				alt={altText}
				sizes='(max-width: 768px) 100vw'
				fill={true}
				priority={true}
				className='absolute inset-0 h-full w-full z-0 object-cover'
				quality={100}
			/>
			<div className='absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-white'>
				<h1 className='text-4xl font-bold'>{title}</h1>
				<p className='mt-2 text-lg'>{description}</p>
			</div>
		</div>
	);
};

export default Hero;
