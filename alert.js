const errorText =
  "No results were found, are you sure that the 'Individual Sites' list is visible on this page?";

const connectedDevicesList = Array.prototype.slice
  .call(
    document.querySelectorAll(".row .col-xl-4 .col-sm-9 ul li a.ng-binding")
  )
  .map((node) => node.text);

const resultText = `Total: ${
  connectedDevicesList.length
}\n- ${connectedDevicesList.join("\n- ")}`;

alert(connectedDevicesList.length ? resultText : errorText);
