describe('Super Calculator', function(){
    
    it('Addition Test', function(){

        browser.get('https://juliemr.github.io/protractor-demo/')
        console.log("Calc Launched")
        expect(browser.getCurrentUrl()).toBe('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('2')
        browser.sleep(3000)
        element(by.)

    })

})