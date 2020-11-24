(() => {
  let connectedDevicesList = Array.prototype.slice
    .call(
      document.querySelectorAll(".row .col-xl-4 .col-sm-9 ul li a.ng-binding")
    )
    .map((node) => node.text);

  let resultText = `Total: ${
    connectedDevicesList.length
  }\n- ${connectedDevicesList.join("\n- ")}`;

  if (connectedDevicesList.length) {
    const el = document.createElement("textarea");
    el.value = resultText;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  } else
    alert(
      "No results were found, are you sure that the 'Individual Sites' list is visible on this page?"
    );
})();
