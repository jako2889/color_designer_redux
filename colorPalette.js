document.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector("#colorwheel").addEventListener("input", colorPicker);
}
function colorPicker(event) {
  const hexcolor = event.target.value;
  const rgbcolor = convertHEXtoRGB(hexcolor);
  const hslcolor = convertRGBtoHSL(rgbcolor);

  console.log(`hex color er ${hexcolor}`);
  console.log(`RGB color er ${rgbcolor}`);
  console.log(`hsl color er ${hslcolor}`);

  setBaseColor(hslcolor);
  chooseTheme(hslcolor);
}

function convertHEXtoRGB(hexcolor) {
  const hexString = hexcolor.substring(1, 7);
  const string1 = hexString.slice(0, 2);
  const string2 = hexString.slice(2, 4);
  const string3 = hexString.slice(4, 6);

  const red = parseInt(string1, 16);
  const green = parseInt(string2, 16);
  const blue = parseInt(string3, 16);

  console.log(`${red} ${green} ${blue}`);

  return { red, green, blue };
}

function convertRGBtoHSL(rgbcolor) {
  let r = rgbcolor.red;
  let g = rgbcolor.green;
  let b = rgbcolor.blue;

  console.log(r);
  console.log(g);
  console.log(b);

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }

  s *= 100;
  l *= 100;

  console.log("hsl(%f,%f%,%f%)", h, s, l);

  return { h, s, l };
}

function setBaseColor(hslcolor) {
  document.querySelector("#zero").style.backgroundColor = `hsl(${hslcolor.h},${
    hslcolor.s
  }%,${hslcolor.l}%`;
  document.querySelector("#one").style.backgroundColor = `hsl(${hslcolor.h},${
    hslcolor.s
  }%,${hslcolor.l}%`;
  document.querySelector("#two").style.backgroundColor = `hsl(${hslcolor.h},${
    hslcolor.s
  }%,${hslcolor.l}%`;
  document.querySelector("#three").style.backgroundColor = `hsl(${hslcolor.h},${
    hslcolor.s
  }%,${hslcolor.l}%`;
  document.querySelector("#four").style.backgroundColor = `hsl(${hslcolor.h},${
    hslcolor.s
  }%,${hslcolor.l}%`;
}

function chooseTheme(hslcolor) {
  document.querySelector("#analogous").addEventListener("click", () => {
    analogous(hslcolor);
  });
  document.querySelector("#monochromatic").addEventListener("click", () => {
    monochromatic(hslcolor);
  });
  document.querySelector("#triad").addEventListener("click", () => {
    triad(hslcolor);
  });
  document.querySelector("#complementary").addEventListener("click", () => {
    complementary(hslcolor);
  });
  document.querySelector("#compound").addEventListener("click", () => {
    compound(hslcolor);
  });
  document.querySelector("#shades").addEventListener("click", () => {
    shades(hslcolor);
  });
}
function analogous(hslcolor) {
  document.querySelector("#one").style.backgroundColor = `hsl(${hslcolor.h +
    22.5},${hslcolor.s}%,${hslcolor.l}%`;
  document.querySelector("#two").style.backgroundColor = `hsl(${hslcolor.h +
    -22.5},${hslcolor.s}%,${hslcolor.l}%`;
  document.querySelector("#three").style.backgroundColor = `hsl(${hslcolor.h +
    45},${hslcolor.s}%,${hslcolor.l}%`;
  document.querySelector("#four").style.backgroundColor = `hsl(${hslcolor.h +
    -45},${hslcolor.s}%,${hslcolor.l}%`;
}
function monochromatic(hslcolor) {
  document.querySelector("#one").style.backgroundColor = `hsl(${hslcolor.h},${
    hslcolor.s
  }%,${hslcolor.l - 10}%`;
  document.querySelector("#two").style.backgroundColor = `hsl(${hslcolor.h},${
    hslcolor.s
  }%,${hslcolor.l - 20}%`;
  document.querySelector("#three").style.backgroundColor = `hsl(${hslcolor.h},${
    hslcolor.s
  }%,${hslcolor.l - 30}%`;
  document.querySelector("#four").style.backgroundColor = `hsl(${hslcolor.h},${
    hslcolor.s
  }%,${hslcolor.l - 40}%`;
}
function triad(hslcolor) {
  document.querySelector("#one").style.backgroundColor = `hsl(${hslcolor.h -
    120},${hslcolor.s}%,${hslcolor.l}%`;
  document.querySelector("#two").style.backgroundColor = `hsl(${hslcolor.h +
    120},${hslcolor.s}%,${hslcolor.l}%`;
  document.querySelector("#three").style.backgroundColor = `hsla(${
    hslcolor.h
  },${hslcolor.s}%,${hslcolor.l}%, 0`;
  document.querySelector("#four").style.backgroundColor = `hsla(${hslcolor.h},${
    hslcolor.s
  }%,${hslcolor.l}%, 0`;
}
function complementary(hslcolor) {
  document.querySelector("#one").style.backgroundColor = `hsl(${hslcolor.h -
    180},${hslcolor.s}%,${hslcolor.l}%`;
  document.querySelector("#two").style.backgroundColor = `hsla(${hslcolor.h},${
    hslcolor.s
  }%,${hslcolor.l}%, 0`;
  document.querySelector("#three").style.backgroundColor = `hsla(${
    hslcolor.h
  },${hslcolor.s}%,${hslcolor.l}%, 0`;
  document.querySelector("#four").style.backgroundColor = `hsla(${hslcolor.h},${
    hslcolor.s
  }%,${hslcolor.l}%, 0`;
}
function compound(hslcolor) {
  document.querySelector("#one").style.backgroundColor = `hsl(${hslcolor.h +
    22.5},${hslcolor.s}%,${hslcolor.l}%`;
  document.querySelector("#two").style.backgroundColor = `hsl(${hslcolor.h -
    180},${hslcolor.s}%,${hslcolor.l}%`;
  document.querySelector("#three").style.backgroundColor = `hsl(${hslcolor.h -
    45},${hslcolor.s}%,${hslcolor.l}%`;
  document.querySelector("#four").style.backgroundColor = `hsl(${hslcolor.h -
    180},${hslcolor.s}%,${hslcolor.l}%`;
}
function shades(hslcolor) {
  document.querySelector("#one").style.backgroundColor = `hsl(${
    hslcolor.h
  },${hslcolor.s - 30}%,${hslcolor.l}%`;
  document.querySelector("#two").style.backgroundColor = `hsl(${
    hslcolor.h
  },${hslcolor.s - 20}%,${hslcolor.l}%`;
  document.querySelector("#three").style.backgroundColor = `hsl(${
    hslcolor.h
  },${hslcolor.s - 40}%,${hslcolor.l}%`;
  document.querySelector("#four").style.backgroundColor = `hsl(${
    hslcolor.h
  },${hslcolor.s - 60}%,${hslcolor.l}%`;
}
