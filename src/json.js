export const json = {
  // "showProgressBar": "top",
  //"showQuestionNumbers": "false",
  // "goNextPageAutomatic": "false",
  // "showNavigationButtons": "true",
  // 
  "completedHtml": "<div id='Thank'><h1><b>Thank you! We appreciate your feedback.<b></h1><p><b> Click the button below to leave a review.</b></p><a href='https://www.google.com/search?q=Lamppost+Pizza+14450+Culver+Drive+Suite+%23E%2C+Irvine%2C+CA+92604&sxsrf=AJOqlzX-1HRat083cpU0rEx-LBX2p-HzaA%3A1678316704013&ei=oBQJZKgwgLGq2w-wpYewAg&ved=0ahUKEwiogNr3uM39AhWAmGoFHbDSASYQ4dUDCBE&uact=5&oq=Lamppost+Pizza+14450+Culver+Drive+Suite+%23E%2C+Irvine%2C+CA+92604&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQqwI6BwgjEOoCECc6EgguEMcBENEDEOoCELQCEEMYAToMCAAQ6gIQtAIQQxgBOg0IABCPARDqAhC0AhgCOg0ILhCPARDqAhC0AhgCOgQIIxAnOgoILhDHARCvARBDOgoILhDHARDRAxBDOgQIABBDOg4ILhCABBCxAxDHARDRAzoLCAAQgAQQsQMQgwE6CwguEIAEELEDEIMBOhEILhCABBCxAxCDARDHARDRAzoFCAAQgAQ6CwguEIAEEMcBEK8BOggIABCABBDJAzoLCC4QrwEQxwEQgAQ6DQguELEDEMcBENEDEEM6CAgAEIAEELEDOgsILhCxAxDHARCvAToFCC4QgAQ6EAguEIAEEBQQhwIQxwEQ0QM6EwguEIAEELEDEIMBEMcBENEDEAo6EAguEIAEEBQQhwIQxwEQrwE6EwguEIAEEBQQhwIQsQMQxwEQ0QM6EAguEBQQrwEQxwEQhwIQgARKBAhBGABQAFidFmCbGWgBcAF4AIABqQGIAaoPkgEEMS4xNZgBAKABAaABArABFMABAdoBBggBEAEYAdoBBggCEAEYCg&sclient=gws-wiz-serp#lrd=0x80dcdc5fff6413ed:0xee819847233f8c89,3,,,,' target='_blank'><img src='G.png', id='Google'></img></a><a href='https://www.yelp.com/writeareview/biz/sfc4QLP07T12Bj4z3eDdtw?return_url=%2Fbiz%2Fsfc4QLP07T12Bj4z3eDdtw&review_origin=biz-details-war-button' target='_blank'><img src='Y.png', id='Yelp'></img></a></div>",

  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "rating",
          "name": "question2",
          "title": "How was the overall quality of your food?",
          "minRateDescription": "",
          "maxRateDescription": "",
        }
      ]
    },

    {
      "name": "page2",
      "elements": [
        {
          "type": "rating",
          "name": "question1",
          "title": "How would you rate the speed of our service?",
          "minRateDescription": "",
          "maxRateDescription": "",
          "displayMode": "buttons"
        }
      ]
    },

    {
      "name": "page3",
      "elements": [
        {
          "type": "rating",
          "name": "question3",
          "title": "How would you rate the friendliness of our staff?",
          "minRateDescription": "",
          "maxRateDescription": ""
        }
      ]
    },

    {
      "name": "page4",
      "elements": [
        {
          "type": "rating",
          "name": "question5",
          "title": "How would you rate the cleanliness of our restaurant?",
          "minRateDescription": "",
          "maxRateDescription": ""
        }
      ]
    },

    {
      "name": "page5",
      "elements": [
        {
          "type": "boolean",
          "name": "question6",
          "title": "Did you use our bathroom?"
        },
        {
          "type": "rating",
          "name": "question4",
          "visibleIf": "{question6} = true",
          "title": "How would you rate the cleanliness of our bathroom?",
          "minRateDescription": "",
          "maxRateDescription": ""
        }
      ]
    },

    {
      "name": "page6",
      "elements": [
        {
          "name": "phone",
          "type": "text",
          "title": "Provide a phone number to enter our giveaway",
          "inputType": "tel",
          "placeholder": "(123) 456-7890",
          "validators": [{
            "type": "regex",
            "regex": "^[0-9]{10}$",
            "text": "Phone number must be in the following format: 1234567890"
          }
          ]
        },
        {
          "type": "panel",
          "name": "panel",
          "elements": [
            {
              "name": "",
              "type": "checkbox",
              "choices": [
                "I want to opt out of receiving special deals and promotions from Lamppost Pizza"
              ]

            }]
        },
      ]
    },

    {
      "name": "page7",
      "elements": [
        {
          "type": "comment",
          "name": "question7",
          "title": "Please provide any additional feedback"
        }
      ],
    "visibleIf": "{question2} < 3 and {question1} < 3 and {question3} < 3 and {question5} < 3 and {question6} = true and {question5} < 3 or {question2} < 3 and {question1} < 3 and {question3} < 3 and {question5} < 3 and {question6} = false"
    }
  ],
  "showQuestionNumbers": "false"
}

//    "visibleIf": "{question2} >= 3 and {question1} >= 3 and {question3} >= 3 and {question5} >= 3 and {question6} = true and {question5} >= 3 or {question2} >= 3 and {question1} >= 3 and {question3} >= 3 and {question5} >= 3 and {question6} = false"