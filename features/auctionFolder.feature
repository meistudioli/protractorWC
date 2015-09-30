Feature: Yahoo Auction - web components ADs
    As a user of yahoo
    I could check the web components baesed ADs - 「folder」.
    And 「folder」functions must runs well


    @folder001 @E2E
    Scenario: 頁面 header 是否存在
    	Given I visit "auction - folder"
    	Then header must exist


    @folder002 @E2E
    Scenario: 頁面 footer 是否存在
        Given I visit "auction - folder"
        Then footer must exist


    @folder003 @E2E
    Scenario: folder 是否存在
        Given I visit "auction - folder"
        Then "folder" must exist


    @folder004 @E2E
    Scenario: folder 是否有正常輪播
        Given I visit "auction - folder"
        Then "folder" must exist
        And folder display function must correct


    @folder005 @E2E
    Scenario: folder redirect 功能是否正常
        Given I visit "auction - folder"
        Then "folder" must exist
        And folder redirect function must correct


    @folder006 @E2E
    Scenario: folder 關閉功能是否正常
        Given I visit "auction - folder"
        Then "folder" must exist
        And folder close function must correct

