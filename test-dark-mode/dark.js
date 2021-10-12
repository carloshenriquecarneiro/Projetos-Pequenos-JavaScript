const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");




const getStyle = (element, style) => 

    window
        .getComputedStyle(element)
        .getPropertyValue(style)



const PatternsColors = {

    bg: getStyle(html, "--bg"),
    bgPainel: getStyle(html, "--bgPainel"),
    colorHeadings: getStyle(html, "--color-others"),
    colorText: getStyle(html, "--color-text"),

}

const patternsDark = {

    bg: "#333333",
    bgPainel: "#321462",
    colorText: "#222012",
}



const transformKey = key => 
    
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()



const changeColors = (colors) => {

    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])

    )

}


checkbox.addEventListener("change", ({ target }) => {

    target.checked ? changeColors(patternsDark) : changeColors(PatternsColors)

})





















