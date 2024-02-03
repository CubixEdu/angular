import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { IdeasService } from './ideas.service';

export const ideaResolver: ResolveFn<any> = (route, state) => {
  const ideasService = inject(IdeasService);

  const id = route.queryParamMap.get('id');

  if(id) {
    return ideasService.getIdeaById(id);
  } else {
    return undefined;
  }
};
