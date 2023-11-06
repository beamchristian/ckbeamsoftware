import { StaticImageData } from 'next/image';

export type HeroProps = {
	image: StaticImageData;
	altText: string;
	title: string;
	description: string;
};
