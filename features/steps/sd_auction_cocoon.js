var auctionCocoon = function() {
	var Given = When = Then = this.defineStep;

    /*------------------------ Given ------------------------*/


    /*------------------------ When -------------------------*/

    When(/I seek video to "([^"]*)" second position/, function(time, next) {
    	//auction
    	this.stand.seekTo(time).then(next, next);
    });

    /*------------------------ Then -------------------------*/

    Then(/^cocoon autoplay function must correct$/, function(next) {
        //auction
        this.stand.isCocoonAutoplayCorrect().then(
            function(flag) {
                expect(flag, 'cocoon autoplay function fail').to.be.true;
            }
        ).then(next, next);
    });


    Then(/^cocoon tip expand function must correct$/, function(next) {
    	//auction
    	this.stand.isCocoonTipExpandCorrect().then(
            function(flag) {
                expect(flag, 'cocoon tip expand function fail').to.be.true;
            }
        ).then(next, next);
    });


    Then(/cocoon play & pause function must correct/, function(next) {
    	//auction
    	this.stand.isCocoonPlayPauseCorrect().then(
            function(flag) {
                expect(flag, 'cocoon play & pause function fail').to.be.true;
            }
        ).then(next, next);
    });


    Then(/cocoon redirect function must correct/, function(next) {
    	//auction
    	this.stand.isCocoonRedirectCorrect().then(
            function(flag) {
                expect(flag, 'cocoon redirect function fail').to.be.true;
            }
        ).then(next, next);
    });

};
module.exports = auctionCocoon;