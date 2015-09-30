Feature: Dragon series - 「dragonWebComponents」


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
