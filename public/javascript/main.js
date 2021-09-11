$("textarea")
  .each(function () {
    this.setAttribute("style", "height:" + this.scrollHeight + "px;overflow-y:hidden;");
  })
  .on("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });

$('i[class~="fa-stream"]').on('click', ()=>{
  $(".post-list").removeClass("twoRow threeRow").addClass("oneRow");
})
$('i[class~="fa-th-large"]').on("click", () => {
  $(".post-list").removeClass("oneRow threeRow").addClass("twoRow");
});
$('i[class~="fa-th"]').on("click", () => {
  $(".post-list").removeClass("oneRow twoRow").addClass("threeRow");
});