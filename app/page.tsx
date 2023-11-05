import Hero from '@/components/Hero';
import BackGroundImage from '@/public/images/background-1.jpg';

export default function Home() {
	return (
		<main>
			<Hero
				image={BackGroundImage}
				altText={'Back ground image'}
				title={'CKBeam Software'}
				description={'A personal portfolio for Christian Beam'}
			/>
			<h1 className='text-center mt-20'>Welcome to CKBEAM SOFTWARE | Coming soon!</h1>
		</main>
	);
}
