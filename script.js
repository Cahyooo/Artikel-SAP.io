$(function () {
  $(".filter-btn").on("change", function () {
    filterData();
  });

  function filterData() {
    const selectedInfo = $(".filter-btn[data-info]:checked").map(function() {
      return $(this).data("info");
    }).get();

    $(".dataInformasi").each(function () {
      const info = $(this).data("info");
      if (selectedInfo.includes(info)) {
        $(this).addClass("active").removeClass("not-active");
      } else {
        $(this).addClass("not-active").removeClass("active");
      }
    });
  }
});

