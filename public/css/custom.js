import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "display": "flex",
        "minHeight": 100 * vh,
        "flexDirection": "column",
        "backgroundImage": "url(\"/img/weather.png\"), radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(247,230,230,1) 100%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFFFFF', endColorstr='#F7E6E6',GradientType=0 )",
        "backgroundRepeat": "repeat-x"
    },
    "mygradient": {
        "background": "radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(128,128,128,1) 100%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFFFFF', endColorstr='#808080',GradientType=0 )"
    },
    "blur": {
        "WebkitFilter": "blur(5px)",
        "MozFilter": "blur(5px)",
        "OFilter": "blur(5px)",
        "MsFilter": "blur(5px)",
        "filter": "blur(5px)"
    },
    "main": {
        "flex": "1 0 auto"
    },
    "input-field input[type]:focus + label": {
        "color": "#2196F3"
    },
    "input-field input[type]:focus": {
        "borderBottom": "1px solid #2196F3",
        "boxShadow": "0 1px 0 0 #1565C0"
    },
    "input-field input[type]valid": {
        "borderBottom": "1px solid #2196F3",
        "boxShadow": "0 1px 0 0 #1565C0"
    },
    "input-field textarea[class]:focus + label": {
        "color": "#2196F3"
    },
    "input-field textarea[class]:focus": {
        "borderBottom": "1px solid #2196F3",
        "boxShadow": "0 1px 0 0 #1565C0"
    },
    "input-field textarea[class]valid": {
        "borderBottom": "1px solid #2196F3",
        "boxShadow": "0 1px 0 0 #1565C0"
    },
    "justify": {
        "textAlign": "justify !important"
    },
    "v-center": {
        "top": "0% !important"
    }
});