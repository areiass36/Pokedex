import { PokemonPage } from './pokemon/pokemon.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full'
  },
  {
    path: 'pokemon',
    children: [
      {
        path:'',
        loadChildren: () => import('./pokemon/pokemon.module').then( m => m.PokemonPageModule)
      },
      {
        path:':id',
        loadChildren: () => import('./pokemon/details/details.module').then( m => m.DetailsPageModule)
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
