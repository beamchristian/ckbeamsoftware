'use client';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
	const { theme, setTheme } = useTheme();
	const [isDark, setIsDark] = useState(false);

	const toggleDark = () => {
		if (theme === 'light') {
			setTheme('dark');
			setIsDark(true);
		} else if (theme === 'dark') {
			setTheme('light');
			setIsDark(false);
		}
	};

	const checkIsDark = () => {
		if (theme === 'light') {
			setIsDark(false);
		} else if (theme === 'dark') {
			setIsDark(true);
		}
	};

	useEffect(() => {
		checkIsDark();
	}, [isDark]);
	const symbol = isDark ? (
		<Moon className='h-[1.2rem] w-[1.2rem] -rotate-80 scale-0 transition-all dark:scale-100' />
	) : (
		<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
	);
	return (
		<div className='flex items-center space-x-2'>
			<Switch id='dark-mode-switch' checked={isDark} onCheckedChange={() => toggleDark()} />
			<Label htmlFor='dark-mode-switch'>{symbol}</Label>
		</div>
	);
}
