
document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio loaded.");

  const typed = new Typed("#typed-text", {
    strings: [
      "AI & Robotics Engineer",
      "Python Developer",
      "Automation Expert"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });

  let likeCount = 600;
  window.addLike = function () {
    likeCount++;
    document.getElementById("likeCount").innerText = `${likeCount} Likes`;
  };
});
