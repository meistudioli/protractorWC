var auctionFolder = function() {
	var Given = When = Then = this.defineStep;

    /*------------------------ Given ------------------------*/


    /*------------------------ When -------------------------*/


    /*------------------------ Then -------------------------*/

    Then(/^folder display function must correct$/, function(next) {
        //auction
        this.stand.isFolderCorrect().then(
            function(flag) {
                expect(flag, 'folder display function fail').to.be.true;
            }
        ).then(next, next);
    });

    Then(/^folder close function must correct$/, function(next) {
        //auction
        this.stand.isFolderCloseCorrect().then(
            function(flag) {
                expect(flag, 'folder close function fail').to.be.true;
            }
        ).then(next, next);
    });

    Then(/^folder redirect function must correct$/, function(next) {
        //auction
        this.stand.isFolderRedirectCorrect().then(
            function(flag) {
                expect(flag, 'folder redirect function fail').to.be.true;
            }
        ).then(next, next);
    });

};
module.exports = auctionFolder;