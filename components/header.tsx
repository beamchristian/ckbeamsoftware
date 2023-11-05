'use client';
import React from 'react';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import Link from 'next/link';

export default function Header() {
	return (
		<div className='m-2'>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href='/about' legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href='/projects' legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>Projects</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href='/contact' legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
