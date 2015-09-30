module.exports = {
    TIMEOUT_SHORT: 2000,
    TIMEOUT: 5000,
    URL_MAP: {
        auction: 'http://mei.homin.com.tw/web_components_ads.php'
    },
    PO: {
        pageObject: '/lib/pages/pageObject.js',
        auction: '/lib/pages/auction.js'
    },
    COM: {
        header: '/lib/components/header.js',
        footer: '/lib/components/footer.js'
    }
};
