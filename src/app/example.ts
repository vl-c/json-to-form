const example: string = `
{
  "header": "Form header",
  "buttons": [
    {
      "id": "btnReset",
      "type": "reset",
      "value": "Reset"
    },
    {
      "id": "btnSave",
      "type": "submit",
      "value": "Save"
    },
    {
      "id": "btnOk",
      "type": "button",
      "value": "Fancy button"
    }
  ],
  "items": [
    {
      "label": "Number field",
      "type": "number",
      "id": "numberField"
    },
    {
      "label": "Date field",
      "type": "date",
      "id": "dateField",
      "value": "2021-04-08T23:35:58.282Z"
    },
    {
      "label": "Text field",
      "value": "Bob",
      "disabled": true,
      "type": "text",
      "id": "textField"
    },
    {
      "label": "Textarea field",
      "value": "many text",
      "type": "textarea",
      "id": "textareaField"
    },
    {
      "label": "checkbox",
      "value": true,
      "type": "checkbox",
      "id": "checkboxField"
    },
    {
      "id": "typeOfContact",
      "label": "Prefer contact",
      "type": "radio",
      "items": [
        {
          "value": "mail",
          "label": "mail"
        },
        {
          "value": "phone",
          "label": "phone"
        }
      ]
    }
  ]
}
`;
export default example;
