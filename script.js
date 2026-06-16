function send() {
  let msg = document.getElementById("msg").value;

  if (msg === "") return;

  let div = document.createElement("div");
  div.textContent = msg;

  document.getElementById("box").appendChild(div);

  document.getElementById("msg").value = "";
}
