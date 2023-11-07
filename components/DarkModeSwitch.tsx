'use client';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
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

	return (
		<div className='flex items-center space-x-2'>
			<Switch id='dark-mode-switch' checked={isDark} onCheckedChange={() => toggleDark()} />
			<Label htmlFor='dark-mode-switch'>Dark Mode</Label>
		</div>
	);
}
