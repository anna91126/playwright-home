import { test, expect } from '@playwright/test';
import { PageManager } from './page-objects/page-manager';


test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test('Update pet type', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.navigationBar.clickPetTypesMenuItem();
    await pm.petTypesPage.checkPageTitle('Pet Types');
    await pm.petTypesPage.clickEditButtonForType('cat');
    await pm.petTypesPage.checkPageTitle('Edit Pet Type');
    await pm.petTypesPage.updatePetType('rabbit');
    await pm.petTypesPage.checkPetTypeInTable('rabbit');
    await pm.petTypesPage.clickEditButtonForType('rabbit');
    await pm.petTypesPage.checkPageTitle('Edit Pet Type');
    await pm.petTypesPage.updatePetType('cat');
    await pm.petTypesPage.checkPetTypeInTable('cat');
});
