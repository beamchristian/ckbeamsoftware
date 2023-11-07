'use client';
import React, { useEffect, useRef } from 'react';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import Link from 'next/link';

import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
	return (
		<div className='m-2'>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<DarkModeSwitch />
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
