const bubbleAlert = (options) => {
  const container = document.createElement("div");
  const alert = document.createElement("div");
  let title = document.createElement("h1");
  let p = document.createElement("p");
  let text = document.createTextNode(
    !options.text ? "Hello, World!" : options.text,
  );
  let button = document.createElement("button");
  container.setAttribute("class", "alert-container-fixed");
  p.appendChild(text);
  button.innerHTML = "OK";
  alert.appendChild(title);
  alert.appendChild(p);
  alert.appendChild(button);
  container.appendChild(alert);
  document.querySelector("body").appendChild(container);

  //check type style
  if (options.type === "info" || !options.type) {
    title.innerHTML = "\u{1F481}\u{200D}\u{2642}\u{FE0F} Info";
    button.style.border = "1px solid #1088e3";
    button.style.backgroundColor = "#1088e3";
    alert.style.backgroundColor = "rgb(16, 136, 227, .3)";
    alert.style.boxShadow = "1px 1px 50px 1px rgb(16, 136, 227, .4)";
  }

  if (options.type === "error") {
    title.innerHTML = "\u{1F608} Error";
    button.style.border = "1px solid #d5394d";
    button.style.backgroundColor = "#d5394d";
    alert.style.backgroundColor = "rgb(213, 57, 77, .3)";
    alert.style.boxShadow = "1px 1px 50px 1px rgb(213, 57, 77, .4)";
  }

  if (options.type === "success") {
    title.innerHTML = "😍  Success";
    button.style.border = "1px solid #00b200";
    button.style.backgroundColor = "#00b200";
    alert.style.boxShadow = "1px 1px 50px 1px rgb(0,178,0,0.4)";
    alert.style.background = " rgb(0, 178, 0, .3)";
  }

  //contaienr style
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.position = "fixed";
  container.style.zIndex = 99;
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.backgroundColor = "rgb(0,0,0, .1)";
  container.style.top = 0;
  container.style.left = 0;
  container.style.right = 0;
  container.style.bottom = 0;

  //alert general style
  alert.style.width = "18rem";
  title.style.margin = "0";
  p.style.fontSize = "15px";
  p.style.color = "#333";
  alert.style.padding = "10px 20px";
  alert.style.borderRadius = "5px";
  alert.style.textAlign = "center";
  alert.style.fontFamily = "sans-serif";

  //alert button general style
  button.style.padding = "10px 20px";
  button.style.borderRadius = "5px";
  button.style.color = "#fff";
  button.style.cursor = "pointer";
  button.style.fontWeight = "bold";
  button.style.fontFamily = "sans-serif";

  button.addEventListener("click", () => container.style.display = "none");
};

module.exports.bubbleAlert = bubbleAlert;
