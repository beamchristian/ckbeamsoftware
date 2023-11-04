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
import { ModeToggle } from './ui/mode-toggle';

export default function Header() {
	return (
		<div className='mt-2'>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<ModeToggle />
					</NavigationMenuItem>
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
