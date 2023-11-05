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
				sizes='(max-width: 860px) 100vw'
				fill={true}
				priority={true}
				className='absolute inset-0 h-full w-full z-0 object-cover'
				quality={100}
			/>
			<div className='absolute top-1/4 left-1/2 md:top-3/4 md:left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-white'>
				<h1 className='text-sm md:text-lg lg:text-4xl mb-2 font-bold'>{title}</h1>
				<hr className='border-t border-white w-3/4 sm:w-full' />
				<p className='mt-2 text-sm sm:text-lg'>{description}</p>
			</div>
		</div>
	);
};

export default Hero;
