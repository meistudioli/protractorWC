var beforeHooks = function() {
    this.Before(function(callback) {
    	if (typeof browser == 'undefined') return;
        browser.clearMockModules();
        browser.manage().deleteAllCookies();
        callback();
    });
};
module.exports = beforeHooks;