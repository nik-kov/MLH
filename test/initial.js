describe('My Little Hero', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        it('TC-001 Title is correct ', function () { //define test title by passing a string
            browser.url('https://qa-apps.netlify.app/app_my_hero'); //open baseUrl
            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual('MLH trial'); //compare {title} (actual) and "MLH trial" (expected)
        });

    });

    describe('Elements exist', function () {

        it('TC-002 Label for name', function () {
            const label = $$('.ant-form-item-label')[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-003 Label for gender', function () {
            const label = $$('.ant-form-item-label')[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-004 Label for age', function () {
            const label = $$('.ant-form-item-label')[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-005 Label for story', function () {
            const label = $$('.ant-form-item-label')[3].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-006 Upload image', function () {
           // const label = '//label[contains(text(),"5. Upload an image (optional)")]';
            browser.pause(2000);
            const label = $$('.ant-form-item-label')[4].isDisplayed();
          //  const result = $$("//div[@class='ant-col ant-col-16 ant-form-item-label']")[4].isDisplayed();
            expect(label).toEqual(true);
        });

    });

});
