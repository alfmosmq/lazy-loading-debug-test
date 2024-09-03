import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'll',
		loadChildren: () => import('./lazy-loaded/lazy-loaded.routes').then((m) => m.LAZY_LOADED_ROUTES)
	}

];
