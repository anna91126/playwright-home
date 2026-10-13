import { Page, expect, Locator } from '@playwright/test';

export class PetTypesPage {

    readonly page: Page;
    readonly petTypeInput: Locator
    readonly pageTitle: Locator
    readonly updateButton: Locator
    readonly petTypeRow: Locator


    constructor(page: Page) {
        this.page = page;
        this.petTypeInput = page.locator('#name');
        this.pageTitle = page.locator('.xd-container h2');
        this.updateButton = page.getByRole('button', { name: 'Update' });
        this.petTypeRow = page.locator(('tbody input'));
    }

    // dynamic locators:
    private editButton(petType: string): Locator {
        return this.page.getByRole('row', { name: petType }).getByRole('button', { name: 'Edit' });
    }

    // methods:
    async clickEditButtonForType(petType: string): Promise<void> {
        await this.editButton(petType).click();
    }

    async checkPageTitle(pageTitle: string): Promise<void> {
        await expect(this.pageTitle).toHaveText(pageTitle);
    }

    async updatePetType(petType: string): Promise<void> {
        await expect(this.petTypeInput).not.toBeEmpty()
        await this.petTypeInput.fill(petType);
        await this.updateButton.click();
    }

    async checkPetTypeInTable(petType: string): Promise<void> {
        await expect(this.petTypeRow.first()).toHaveValue(petType);
    }

}