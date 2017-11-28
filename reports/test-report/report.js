$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("scenario.feature");
formatter.feature({
  "line": 2,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ignore"
    }
  ]
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "url \u0027http://172.16.120.41:9082/basic\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027http://172.16.120.41:9082/basic\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 2603290100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Webshop Maak een nieuwe order aan",
  "description": "",
  "id": ";webshop-maak-een-nieuwe-order-aan",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "request",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 8,
    "value": "\u003csoapenv:Envelope xmlns:soapenv\u003d\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:tem\u003d\"http://tempuri.org/\"\u003e\r\n   \u003csoapenv:Header/\u003e\r\n   \u003csoapenv:Body\u003e\r\n      \u003ctem:SetOrder\u003e\r\n         \u003c!--Optional:--\u003e\r\n         \u003ctem:customerId\u003e82\u003c/tem:customerId\u003e\r\n         \u003c!--Optional:--\u003e\r\n         \u003ctem:DepartmentId\u003e3624\u003c/tem:DepartmentId\u003e\r\n         \u003c!--Optional:--\u003e\r\n         \u003ctem:deliveryDate\u003e2017-11-28\u003c/tem:deliveryDate\u003e\r\n         \u003c!--Optional:--\u003e\r\n         \u003ctem:factsrtId\u003e1\u003c/tem:factsrtId\u003e\r\n         \u003c!--Optional:--\u003e\r\n         \u003ctem:deliveryMethod\u003e2\u003c/tem:deliveryMethod\u003e\r\n      \u003c/tem:SetOrder\u003e\r\n   \u003c/soapenv:Body\u003e\r\n\u003c/soapenv:Envelope\u003e"
  }
});
formatter.step({
  "line": 28,
  "name": "soap action \u0027http://tempuri.org/IServiceFMKBT/SetOrder\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "def printResult \u003d //SetOrderResult",
  "keyword": "* "
});
formatter.step({
  "line": 31,
  "name": "print printResult + \u0027 \u003c----- Resultaat van de query (Nieuwe Ordernummer)\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 32,
  "name": "assert printResult \u003e 700000",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.requestDocString(String)"
});
formatter.result({
  "duration": 15407600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " \u0027http://tempuri.org/IServiceFMKBT/SetOrder\u0027",
      "offset": 11
    }
  ],
  "location": "StepDefs.soapAction(String)"
});
formatter.result({
  "duration": 3014691200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 822500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "printResult",
      "offset": 4
    },
    {
      "val": "//SetOrderResult",
      "offset": 18
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 15507500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "printResult + \u0027 \u003c----- Resultaat van de query (Nieuwe Ordernummer)\u0027",
      "offset": 6
    }
  ],
  "location": "StepDefs.print(String\u003e)"
});
formatter.result({
  "duration": 37429200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "printResult \u003e 700000",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "duration": 46433800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "url \u0027http://172.16.120.41:9082/basic\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027http://172.16.120.41:9082/basic\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 137468800,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Webshop roept beschikbaarheid van het zojuist bestelde product",
  "description": "",
  "id": ";webshop-roept-beschikbaarheid-van-het-zojuist-bestelde-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "request",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 41,
    "value": "\u003csoapenv:Envelope xmlns:soapenv\u003d\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:tem\u003d\"http://tempuri.org/\"\u003e\r\n   \u003csoapenv:Header/\u003e\r\n   \u003csoapenv:Body\u003e\r\n      \u003ctem:GetAvailability\u003e\r\n         \u003c!--Optional:--\u003e\r\n         \u003ctem:OrderID\u003e714795\u003c/tem:OrderID\u003e\r\n         \u003c!--Optional:--\u003e\r\n         \u003ctem:factsrt\u003e1\u003c/tem:factsrt\u003e\r\n         \u003c!--Optional:--\u003e\r\n         \u003ctem:aanbodLijstID\u003e0\u003c/tem:aanbodLijstID\u003e\r\n      \u003c/tem:GetAvailability\u003e\r\n   \u003c/soapenv:Body\u003e\r\n\u003c/soapenv:Envelope\u003e"
  }
});
formatter.step({
  "line": 56,
  "name": "soap action \u0027http://tempuri.org/IServiceFMKBT/GetAvailability\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "def printResult \u003d //GetAvailabilityResult",
  "keyword": "* "
});
formatter.step({
  "line": 59,
  "name": "print printResult + \u0027 \u003c----- Resultaat van de query (TEST)\u0027",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefs.requestDocString(String)"
});
formatter.result({
  "duration": 1834100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " \u0027http://tempuri.org/IServiceFMKBT/GetAvailability\u0027",
      "offset": 11
    }
  ],
  "location": "StepDefs.soapAction(String)"
});
formatter.result({
  "duration": 2964370000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 117400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "printResult",
      "offset": 4
    },
    {
      "val": "//GetAvailabilityResult",
      "offset": 18
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 1400400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "printResult + \u0027 \u003c----- Resultaat van de query (TEST)\u0027",
      "offset": 6
    }
  ],
  "location": "StepDefs.print(String\u003e)"
});
formatter.result({
  "duration": 16418700,
  "status": "passed"
});
});