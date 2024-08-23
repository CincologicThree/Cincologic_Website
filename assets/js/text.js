document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".header-text");
    let currentIndex = 0;
    const changeInterval = 5000; // 60 seconds
  
    function showNextHeader() {
      // Hide the current header
      headers[currentIndex].classList.remove("active");
  
      // Move to the next header, loop back to the first if at the end
      currentIndex = (currentIndex + 1) % headers.length;
  
      // Show the next header
      headers[currentIndex].classList.add("active");
    }
  
    // Initially show the first header
    headers[currentIndex].classList.add("active");
  
    // Change headers every 60 seconds
    setInterval(showNextHeader, changeInterval);
  });