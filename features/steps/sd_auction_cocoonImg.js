var auctionCocoon = function() {
	var Given = When = Then = this.defineStep;

    /*------------------------ Given ------------------------*/


    /*------------------------ When -------------------------*/


    /*------------------------ Then -------------------------*/

    Then(/^cocoonImg autoplay function must correct$/, function(next) {
        //auction
        this.stand.isCocoonImgAutoplayCorrect().then(
            function(flag) {
                expect(flag, 'cocoonImg autoplay function fail').to.be.true;
            }
        ).then(next, next);
    });


    Then(/cocoonImg tip expand function must correct/, function(next) {
        //auction
        this.stand.isCocoonImgTipExpandCorrect().then(
            function(flag) {
                expect(flag, 'cocoonImg expand function fail').to.be.true;
            }
        ).then(next, next);
    });


    Then(/cocoonImg redirect function must correct/, function(next) {
    	//auction
    	this.stand.isCocoonImgRedirectCorrect().then(
            function(flag) {
                expect(flag, 'cocoonImg redirect function fail').to.be.true;
            }
        ).then(next, next);
    });

};
module.exports = auctionCocoon;