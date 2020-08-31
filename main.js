const bedsheet = document.getElementById("bedsheet");

document.getElementById("bed").addEventListener("mousemove", (e) => {
  let vw = (e.clientX / window.innerWidth) * 100;
  let vh = (e.clientY / window.innerHeight) * 100;
  console.log(e);

  bedsheet.style.width = 40 - (vw - 30) + "vw";
  bedsheet.style.height = 90 - (vh - 5) + "vh";
  bedsheet.style.left = vw + "vw";
  bedsheet.style.top = vh + "vh";
});
