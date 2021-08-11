// !-- for flex-direction --
const switcher = document.getElementById("switcher");
var demo1 = document.querySelector(".flexdirection-container");

switcher.addEventListener("change", (evt) => {
    demo1.style.flexDirection = evt.target.value;
});
// !-- ======================= --

// !-- for flex wrap --
const wrapSwitcher = document.getElementById("wrap-switcher");
var demo2 = document.querySelector(".flexwrap-container");

wrapSwitcher.addEventListener("change", (evt) => {
    demo2.style.flexWrap = evt.target.value;
});

// !-- ======================= --

// !-- for justify-content --
const justifyContentSwitcher = document.getElementById("justifyContent-switcher");
var demo3 = document.querySelector(".flexjustifycontent-container");

justifyContentSwitcher.addEventListener("change", (evt) => {
    demo3.style.justifyContent = evt.target.value;
});
// !-- ======================= --

// !-- for align-content --
const alignContentswitcher = document.getElementById("alignContent-switcher");
var demo4 = document.querySelector(".aligncontent-container");

alignContentswitcher.addEventListener("change", (evt) => {
    demo4.style.alignContent = evt.target.value;
});

// !-- ======================= --

// !-- for align - self--
const alignSelfswitcher = document.getElementById("alignSelf-switcher");
var demo5 = document.querySelector(".alignSelf-container .box");

alignSelfswitcher.addEventListener("change", (evt) => {
    demo5.style.alignSelf = evt.target.value;
});
// !-- ======================= --

// !-- for align-items -
const alignitemswitcher = document.getElementById("alignItems-switcher");
var demo6 = document.querySelector(".alignItems-container");

alignitemswitcher.addEventListener("change", (evt) => {
    demo6.style.alignItems = evt.target.value;
});
// !-- ======================= --

// !-- for flex-basis -
const getFlexBasis = document.getElementById("getFlexBasis");
var demo7 = document.getElementById("boxbasis1");

getFlexBasis.onkeyup = function ()  {
    demo7.style.flexBasis = getFlexBasis.value;
}
// !-- ======================= --


// !-- for flex-basis -
const getFlexGrow = document.getElementById("getFlexgrow");
var demo8 = document.getElementById("boxgrow2");

getFlexGrow.onkeyup = function ()  {
    demo8.style.flexGrow = getFlexGrow.value;
}

const getFlexGrowthird = document.getElementById("getFlexgrowthrid");
var demo9 = document.getElementById("boxgrow3");

getFlexGrowthird.onkeyup = function ()  {
    demo9.style.flexGrow = getFlexGrowthird.value;
}
// !-- ======================= --


// !-- for flex-Grow -
const getFlexShrink = document.getElementById("getFlexShrink");
var demo10 = document.getElementById("boxshrink1");

getFlexShrink.onkeyup = function ()  {
    demo10.style.flexShrink = getFlexShrink.value;
}

const getFlexShrinkSecond = document.getElementById("getFlexShrinkSecond");
var demo11 = document.getElementById("boxshrink2");

getFlexShrinkSecond.onkeyup = function ()  {
    demo11.style.flexShrink = getFlexShrinkSecond.value;
}
// !-- ======================= --
