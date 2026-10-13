import { Page } from '@playwright/test';

export class NavigationBar {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickPetTypesMenuItem() {
        await this.page.getByText('PET TYPES').click();
    }

}