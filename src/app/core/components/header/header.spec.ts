import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';

describe('Header', () => {
	let component: Header;
	let fixture: ComponentFixture<Header>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Header],
		}).compileComponents();

		fixture = TestBed.createComponent(Header);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should check onSidebarOpen', () => {
		const onSidebarOpenSpy = jest.spyOn(component, 'onSidebarOpen');
		const checkbox: HTMLInputElement =
			fixture.nativeElement.querySelector('#my-drawer-3');

		checkbox.click();
		fixture.detectChanges();

		expect(onSidebarOpenSpy).toHaveBeenCalled();
		expect(onSidebarOpenSpy).toHaveBeenCalledTimes(1);
		expect(component.isSidebarOpen).toBe(true);
	});
});
