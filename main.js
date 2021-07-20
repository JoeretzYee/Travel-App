// SideNav
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 1000,
    internal: 3000,
});

// Autocomplete
const autoComplete = document.querySelector(".autocomplete");
M.Autocomplete.init(autoComplete, {
    data: {
        Aruba: null,
        "Cancun Mexico": null,
        Hawaii: null,
        Florida: null,
        California: null,
        Jamaica: null,
        Europe: null,
    },
});

// Materialbox
const materialBox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialBox, {});

//Scrollspy
const scrollsPy = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scrollsPy, {});
