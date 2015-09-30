Feature: Yahoo Auction - web components ADs
    As a user of yahoo
    I could check the web components baesed ADs - 「cocoon」.
    And 「cocoon」 functions must runs well


    @cocoon001 @E2E
    Scenario: 頁面 header 是否存在
    	Given I visit "auction - cocoon"
    	Then header must exist


    @cocoon002 @E2E
    Scenario: 頁面 footer 是否存在
        Given I visit "auction - cocoon"
        Then footer must exist


    @cocoon003 @E2E
    Scenario: cocoon 是否存在
        Given I visit "auction - cocoon"
        Then "cocoon" must exist


    @cocoon004 @E2E
    Scenario: cocoon autoplay 是否正常
        Given I visit "auction - cocoon"
        Then "cocoon" must exist
        And cocoon autoplay function must correct


    @cocoon005 @E2E
    Scenario: cocoon play / pause 是否正常
        Given I visit "auction - cocoon"
        Then "cocoon" must exist
        And cocoon play & pause function must correct


    @cocoon006 @E2E
    Scenario: cocoon 廣告是否正常顯示
        Given I visit "auction - cocoon"
        Then "cocoon" must exist
        When I seek video to "153" second position
        Then cocoon tip expand function must correct


    @cocoon007 @E2E
    Scenario: cocoon redirect 功能是否正常
        Given I visit "auction - cocoon"
        Then "cocoon" must exist
        When I seek video to "229" second position
        Then cocoon redirect function must correct


