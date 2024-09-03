import { Routes } from '@angular/router';

export const LAZY_LOADED_ROUTES: Routes = [
{		path: '',
    providers: [],
    children: [
        {
            path: '',
            loadComponent: () =>
                import('./lazy-loaded.component').then(
                    (m) => m.LazyLoadedComponent
                )
        }
    ]


}

];
