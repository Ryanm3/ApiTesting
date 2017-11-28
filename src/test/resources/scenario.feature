@ignore
Feature:
  Background:
    * url 'http://172.16.120.41:9082/basic'

  Scenario: Webshop Maak een nieuwe order aan
    Given request
"""
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:SetOrder>
         <!--Optional:-->
         <tem:customerId>82</tem:customerId>
         <!--Optional:-->
         <tem:DepartmentId>3624</tem:DepartmentId>
         <!--Optional:-->
         <tem:deliveryDate>2017-11-28</tem:deliveryDate>
         <!--Optional:-->
         <tem:factsrtId>1</tem:factsrtId>
         <!--Optional:-->
         <tem:deliveryMethod>2</tem:deliveryMethod>
      </tem:SetOrder>
   </soapenv:Body>
</soapenv:Envelope>
"""

    When soap action 'http://tempuri.org/IServiceFMKBT/SetOrder'
    Then status 200
    * def printResult = //SetOrderResult
    * print printResult + ' <----- Resultaat van de query (Nieuwe Ordernummer)'
    Then assert printResult > 700000






  Scenario: Webshop roept beschikbaarheid van het zojuist bestelde product
    Given request
"""
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:GetAvailability>
         <!--Optional:-->
         <tem:OrderID>714795</tem:OrderID>
         <!--Optional:-->
         <tem:factsrt>1</tem:factsrt>
         <!--Optional:-->
         <tem:aanbodLijstID>0</tem:aanbodLijstID>
      </tem:GetAvailability>
   </soapenv:Body>
</soapenv:Envelope>
"""
    When soap action 'http://tempuri.org/IServiceFMKBT/GetAvailability'
    Then status 200
    * def printResult = //GetAvailabilityResult
    * print printResult + ' <----- Resultaat van de query (TEST)'
 # Then assert printResult ==


