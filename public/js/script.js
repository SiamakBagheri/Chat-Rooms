const socket = io();

//Query DOM
const messageInput = document.getElementById("messageInput");
const chatForm = document.getElementById("chatForm");
const chatBox = document.getElementById("chatBox");
const feedback = document.getElementById("feedback");

//Emit Events
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (messageInput.value) {
    socket.emit("chat message", {
      message: messageInput.value,
    });
    messageInput.value = "";
  }
});

// Listeneing
socket.on("chat message", (data) => {
  chatBox.innerHTML += `
    <div class="float-start w-75">
      <div class="bg-white py-1 px-3 rounded-4">
        <p class="m-0">${data.message}</p>
      </div>
      <div class="px-1 text-black-50">
        <!-- این برای اینکه هموز پیام خوانده نشده -->
        <i class="bi bi-check2"></i>
        <!-- این پایینی برای اینکه پیام خوانده شده -->
        <!-- <i class="bi bi-check2-all text-warning"></i> -->
        <small class="px-2">۱۴۰۲/۱۰/۱۱, ۱۹:۵۳:۵۲</small>
      </div>
    </div>
    <br />
  `;
});
