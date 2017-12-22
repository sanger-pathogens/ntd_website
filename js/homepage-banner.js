jQuery(document).ready(function(){
//============================== Rs-Slider =========================
  jQuery('.bannercontainer .fullscreenbanner').revolution({
   delay: 5000,
   startwidth: 1170,
   startheight: 560,
   fullWidth: "on",
   fullScreen: "off",
   hideCaptionAtLimit: "",
   dottedOverlay: "none",
   navigationStyle: "preview4",
   fullScreenOffsetContainer: "",
   hideTimerBar:"on",

  });

  jQuery('.bannercontainer .fullscreenbanner').revolution({
    delay: 5000,
    startwidth: 1170,
    startheight: 500,
    fullWidth: "on",
    fullScreen: "on",
    hideCaptionAtLimit: "",
    dottedOverlay: "none",
    navigationStyle: "preview4",
    fullScreenOffsetContainer: "",
    hideTimerBar:"on",
  });

});