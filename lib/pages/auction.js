var auction;

auction = function(type) {
	PageObject.call(this); // call super constructor.

	this.data.id = 'auction';

	if (typeof type != 'undefined') {
    	this.data.url = constants.URL_MAP.auction + '?type=' + type;
    	this.data.urlPattern = new RegExp(common.getLinkReg(constants.URL_MAP.auction)+'.*'+type);
	} else {
    	this.data.url = constants.URL_MAP.auction;
    	this.data.urlPattern = new RegExp(common.getLinkReg(constants.URL_MAP.auction));
	}//end if

    this.selector = {
        header: '#ygma',
        footer: '#yaufooter',
    	folder: 'folder-module.active',
        folderDone: 'folder-module.done:not(.anis)',
        cocoon: 'cocoon-module.active',
        cocoonImg: 'cocoon-img.active',
        cocoonImgAct: 'cocoon-img[data-act="on"]'
    };
};
auction.prototype = Object.create(PageObject.prototype);

auction.prototype.go = function() {
    var stand = this, pattern = this.data.urlPattern;
    return browser.getCurrentUrl().then(
        function(url) {
            if (!browser.params.forceRefresh && pattern.test(url)) return;
            browser.get(stand.data.url);
        }
    ).thenCatch(
        function(err) {
            //err catch
        }
    ).then(
        function() {
            return stand;
        }
    );
};

auction.prototype.isFolderCorrect = function() {
    var stand = this, flag = false, sId = -1;
    return this.waitUntilPresent('folderDone', 10000).then(
        function() {
            return browser.executeScript(
                function() {
                    var folder = arguments[0];
                    return arguments[0].getAttribute('data-source');
                }
            , stand.one('folder').getWebElement()).then(
                function(id) {
                    sId = Number(id);
                }
            );
        }
    ).then(
        function() {
            return browser.executeScript(
                function() {
                    var folder = arguments[0];
                    folder.resume();
                }
            , stand.one('folder').getWebElement()).then(
                function() {
                    browser.sleep(10000);//animation
                }
            );
        }
    ).then(
        function() {
            return browser.executeScript(
                function() {
                    var folder = arguments[0];
                    return arguments[0].getAttribute('data-source');
                }
            , stand.one('folder').getWebElement()).then(
                function(id) {
                    flag = sId != Number(id);
                }
            );
        }
    ).thenCatch(
        function(err) {
            // console.log(err)
            flag = false;
        }
    ).then(
        function() {
            return flag;
        }
    );
};

auction.prototype.isFolderCloseCorrect = function() {
    var stand = this, flag = false;
    return this.waitUntilPresent('folderDone', 10000).then(
        function() {
            return browser.executeScript(
                function() {
                    var folder = arguments[0];
                    folder.resume();
                    folder.fireEvent('close', 'click');
                }
            , stand.one('folder').getWebElement()).then(
                function() {
                    stand.waitUntilNotPresent('folder', 1000).then(
                        function() {
                            flag = true;
                        }
                    );
                }
            ); 
        }
    ).thenCatch(
        function(err) {
            // console.log(err)
            flag = false;
        }
    ).then(
        function() {
            return flag;
        }
    );
};

auction.prototype.isFolderRedirectCorrect = function() {
    var stand = this, flag = false;
    return this.waitUntilPresent('folderDone', 10000).then(
    ).then(
        function() {
            return browser.executeScript(
                function() {
                    var folder = arguments[0];
                    folder.resume();
                    location.hash = 'protractor-mark';
                }
            , stand.one('folder').getWebElement());
        }
    ).then(
        function() {
            browser.getCurrentUrl().then(
                function(url) {
                    browser.executeScript(
                        function() {
                            var folder = arguments[0];
                            folder.fireEvent('main', 'click');
                        }
                    , stand.one('folder').getWebElement()).then(
                        function() {
                            stand.waitUntilUrlChange(url).then(
                                function() {
                                    // browser.sleep(500);
                                    flag = true;
                                }
                            );
                        }
                    );
                }
            );
        }
    ).thenCatch(
        function(err) {
            // console.log(err)
            flag = false;
        }
    ).then(
        function() {
            return flag;
        }
    );
};

auction.prototype.isCocoonAutoplayCorrect = function() {
    var stand = this, flag = false;
    return this.waitUntilPresent('cocoon', 10000).then(
        function() {
            stand.rollTo('cocoon');
        }
    ).then(
        function() {
            browser.executeScript(
                function() {
                    var cocoon = arguments[0];
                    return !cocoon.get('paused');
                }
            , stand.one('cocoon').getWebElement()).then(
                function(played) {
                    flag = played;
                }
            );
        }
    ).then(
        function() {
            stand.rollTo('footer');
        }
    ).then(
        function() {
            browser.executeScript(
                function() {
                    var cocoon = arguments[0];
                    return cocoon.get('paused');
                }
            , stand.one('cocoon').getWebElement()).then(
                function(paused) {
                    flag = flag && paused;
                }
            );
        }
    ).thenCatch(
        function(err) {
            // console.log(err);
            flag = false;
        }
    ).then(
        function() {
            return flag;
        }
    );
};

auction.prototype.seekTo = function(time) {
    var stand = this, time = Number(time);
    return this.waitUntilPresent('cocoon', 10000).then(
        function() {
            stand.rollTo('cocoon');
        }
    ).then(
        function() {
            browser.executeScript(
                function() {
                    var cocoon, t;
                    cocoon = arguments[0];
                    t = arguments[1];
                    return cocoon.seek(t);
                }
            , stand.one('cocoon').getWebElement(), time);
        }
    ).thenCatch(
        function(err) {
            //error occur
        }
    );
};

auction.prototype.isCocoonTipExpandCorrect = function() {
    var stand = this, flag;
    return this.waitUntilPresent('cocoon', 10000).then(
        function() {
            stand.rollTo('cocoon');
        }
    ).then(
        function() {
            browser.executeScript(
                function() {
                    var cocoon;
                    cocoon = arguments[0];
                    return cocoon.get('actTipList').length;
                }
            , stand.one('cocoon').getWebElement()).then(
                function(actTipAmt) {
                    flag = actTipAmt != 0;
                }
            );
        }
    ).thenCatch(
        function(err) {
            //error occur
        }
    ).then(
        function() {
            return flag;
        }
    );
};


auction.prototype.isCocoonPlayPauseCorrect = function() {
    var stand = this, flag;
    return this.waitUntilPresent('cocoon', 10000).then(
        function() {
            stand.rollTo('cocoon');
        }
    ).then(
        function() {
            stand.one('cocoon').click().then(
                function() {
                    browser.executeScript(
                        function() {
                            var cocoon;
                            cocoon = arguments[0];
                            return cocoon.get('paused');
                        }
                    , stand.one('cocoon').getWebElement()).then(
                        function(paused) {
                            flag = paused;
                        }
                    ).then(
                        function() {
                            browser.sleep(1000);
                        }
                    );
                }
            );
        }
    ).then(
        function() {
            stand.one('cocoon').click().then(
                function() {
                    browser.executeScript(
                        function() {
                            var cocoon;
                            cocoon = arguments[0];
                            return !cocoon.get('paused');
                        }
                    , stand.one('cocoon').getWebElement()).then(
                        function(played) {
                            flag = flag && played;
                        }
                    ).then(
                        function() {
                            browser.sleep(1000);
                        }
                    );
                }
            );
        }
    ).thenCatch(
        function(err) {
            //error occur
            flag = false;
        }
    ).then(
        function() {
            return flag;
        }
    );
};


auction.prototype.isCocoonRedirectCorrect = function() {
    var stand = this, flag = false;
    return this.waitUntilPresent('cocoon', 10000).then(
        function() {
            stand.rollTo('cocoon');
        }
    ).then(
        function() {
            return browser.executeScript(
                function() {
                    location.hash = 'protractor-mark';
                }
            );
        }
    ).then(
        function() {
            browser.getCurrentUrl().then(
                function(url) {
                    browser.executeScript(
                        function() {
                            var cocoon = arguments[0], tipId;
                            tipId = cocoon.get('actTipList')[0];
                            cocoon.fireEvent(tipId, 'click');
                        }
                    , stand.one('cocoon').getWebElement()).then(
                        function() {
                            stand.waitUntilUrlChange(url).then(
                                function() {
                                    // browser.sleep(500);
                                    flag = true;
                                }
                            );
                        }
                    );
                }
            );
        }
    ).thenCatch(
        function(err) {
            //error occur
        }
    ).then(
        function() {
            return flag;
        }
    );
};

auction.prototype.isCocoonImgAutoplayCorrect = function() {
    var stand = this, flag = false;
    return this.waitUntilPresent('cocoonImg', 10000).then(
        function() {
            stand.rollTo('cocoonImg');
        }
    ).then(
        function() {
            browser.executeScript(
                function() {
                    var cocoonImg = arguments[0], tipId;
                    cocoonImg.toggle(true);
                }
            , stand.one('cocoonImg').getWebElement()).then(
                function() {
                    stand.one('cocoonImgAct').isPresent().then(
                        function(exist) {
                            flag = exist;
                        }
                    );
                }
            );
        }
    ).then(
        function() {
            stand.rollTo('header');
        }
    ).then(
        function() {
            stand.one('cocoonImgAct').isPresent().then(
                function(exist) {
                    flag = flag && !exist;
                }
            )
        }
    ).thenCatch(
        function(err) {
            //error occur
            flag = false;
        }
    ).then(
        function() {
            return flag;
        }
    );
};

auction.prototype.isCocoonImgTipExpandCorrect = function() {
    var stand = this, flag = false;
    return this.waitUntilPresent('cocoonImg', 10000).then(
        function() {
            stand.rollTo('cocoonImg');
        }
    ).then(
        function() {
            browser.actions().mouseMove(stand.one('cocoonImg')).perform().then(
                function() {
                    browser.executeScript(
                        function() {
                            var cocoonImg = arguments[0], tipId;
                            return cocoonImg.get('expanded');
                        }
                    , stand.one('cocoonImg').getWebElement()).then(
                        function(expand) {
                            flag = expand;
                        }
                    );
                }
            );
        }
    ).thenCatch(
        function(err) {
            //error occur
            // console.log(err)
            flag = false;
        }
    ).then(
        function() {
            return flag;
        }
    );
};

auction.prototype.isCocoonImgRedirectCorrect = function() {
    var stand = this, flag = false;
    return this.waitUntilPresent('cocoonImg', 10000).then(
        function() {
            stand.rollTo('cocoonImg');
        }
    ).then(
        function() {
            return browser.executeScript(
                function() {
                    var cocoonImg = arguments[0];
                    cocoonImg.toggle(true);
                    location.hash = 'protractor-mark';
                }
            , stand.one('cocoonImg').getWebElement());
        }
    ).then(
        function() {
            browser.getCurrentUrl().then(
                function(url) {
                    browser.executeScript(
                        function() {
                            var cocoonImg = arguments[0], tipId;
                            tipId = cocoonImg.get('tipList');
                            tipId = tipId[Math.floor(Math.random()*tipId.length)];
                            cocoonImg.fireEvent(tipId, 'click');
                        }
                    , stand.one('cocoonImg').getWebElement()).then(
                        function() {
                            stand.waitUntilUrlChange(url).then(
                                function() {
                                    // browser.sleep(5000);
                                    flag = true;
                                }
                            );
                        }
                    );
                }
            );
        }
    ).thenCatch(
        function(err) {
            //error occur
            flag = false;
        }
    ).then(
        function() {
            return flag;
        }
    );    
};

module.exports = auction;