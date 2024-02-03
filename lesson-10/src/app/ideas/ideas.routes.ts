import { Route } from "@angular/router";
import { ListIdeaComponent } from "./list-idea/list-idea.component";
import { NewIdeaComponent } from "./new-idea/new-idea.component";
import { NewIdeaTemplateDrivenComponent } from "./new-idea-template-driven/new-idea-template-driven.component";
import { ideaResolver } from "./idea.resolver";

export const routes: Route[] = [
    {
        path: '',
        component: ListIdeaComponent
    },
    {
        path: 'new',
        resolve: {idea: ideaResolver},
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        component: NewIdeaComponent
    },
    {
        path: 'new-template-driven',
        resolve: {idea: ideaResolver},
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        component: NewIdeaTemplateDrivenComponent
    }
]