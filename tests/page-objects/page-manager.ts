import { test, expect } from '@playwright/test';
import { NavigationBar } from './navigation-bar';
import { PetTypesPage } from './pet-types';

export class PageManager {   
    readonly navigationBar: NavigationBar;
    readonly petTypesPage: PetTypesPage;

    constructor(page: any) {
        this.navigationBar = new NavigationBar(page);
        this.petTypesPage = new PetTypesPage(page);
    }
}