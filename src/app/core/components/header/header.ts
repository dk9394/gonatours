import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	imports: [],
	templateUrl: './header.html',
	styleUrl: './header.scss',
})
export class Header {
	isSidebarOpen = false;

	navItems = [
		{
			name: 'Home',
			url: 'home',
			active: true,
		},
		{
			name: 'About',
			url: 'about',
			active: false,
		},
		{
			name: 'Services',
			url: '',
			active: false,
			submenu: [
				{
					name: 'Service 1',
					url: 'service1',
					active: false,
				},
				{
					name: 'Service 2',
					url: 'service2',
					active: false,
				},
			],
		},
		{
			name: 'Tours',
			url: 'tours',
			active: false,
		},
	];

	onSidebarOpen(event: Event): void {
		this.isSidebarOpen = (event.target as HTMLInputElement).checked;
	}
}
