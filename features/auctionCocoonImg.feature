Feature: Yahoo Auction - web components ADs
    As a user of yahoo
    I could check the web components baesed ADs - 「cocoonImg」.
    And 「cocoonImg」 functions must runs well


    @cocoonImg001 @E2E
    Scenario: 頁面 header 是否存在
    	Given I visit "auction - cocoonImg"
    	Then header must exist


    @cocoonImg002 @E2E
    Scenario: 頁面 footer 是否存在
        Given I visit "auction - cocoonImg"
        Then footer must exist


    @cocoonImg003 @E2E
    Scenario: cocoonImg 是否存在
        Given I visit "auction - cocoonImg"
        Then "cocoonImg" must exist


    @cocoonImg004 @E2E
    Scenario: cocoonImg autoplay 是否正確
        Given I visit "auction - cocoonImg"
        Then "cocoonImg" must exist
        And cocoonImg autoplay function must correct


    @cocoonImg005 @E2E
    Scenario: cocoonImg 廣告是否正常顯示
        Given I visit "auction - cocoonImg"
        Then "cocoonImg" must exist
        And cocoonImg tip expand function must correct


    @cocoonImg006 @E2E
    Scenario: cocoonImg redirect 功能是否正常
        Given I visit "auction - cocoonImg"
        Then "cocoonImg" must exist
        When I roll to "cocoonImg"
        Then cocoonImg redirect function must correct
