import { createGlobalStyle } from "styled-components";
import { COLOR } from "./colors";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
}

html {
    line-height: 1.15;
    box-sizing: border-box;
    font-family: sans-serif;
}

main {
    display: block;
}

h1 {
    font-size: 2em;
    margin: 0.67em 0;
}

p+p {
    margin-top: 1rem;
}

a {
    background-color: transparent;
}

abbr[title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
}

code,
kbd,
samp,
pre {
    font-family: monospace, monospace;
    font-size: 1em;
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

button,
input,
optgroup,
select,
textarea {
    line-height: inherit;
    border: 1px solid currentColor;
}

button {
    overflow: visible;
    text-transform: none;
}

button,
[type=button],
[type=reset],
[type=submit] {
    -webkit-appearance: button;
    padding: 1px 6px;
}

input {
    overflow: visible;
}

input,
textarea {
    padding: 1px;
}

fieldset {
    border: 1px solid currentColor;
    margin: 0 2px;
}

legend {
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal;
}

progress {
    display: inline-block;
    vertical-align: baseline;
}

select {
    text-transform: none;
}

textarea {
    overflow: auto;
    vertical-align: top;
}

[type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
}

[type=color] {
    background: inherit;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
    height: auto;
}

::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.5;
}

::-webkit-search-decoration,
::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
}

::-moz-focus-inner {
    border: 0;
}

:-moz-focusring {
    outline: 1px dotted ButtonText;
}

:-moz-ui-invalid {
    box-shadow: none;
}

hr {
    box-sizing: content-box;
    height: 0;
    color: inherit;
    overflow: visible;
}

dl,
ol,
ul {
    margin: 1em 0;
}

ol ol,
ol ul,
ol dl,
ul ol,
ul ul,
ul dl,
dl ol,
dl ul,
dl dl {
    margin: 0;
}

b,
strong {
    font-weight: bolder;
}

audio,
video {
    display: inline-block;
}

audio:not([controls]) {
    display: none;
    height: 0;
}

img {
    border: 0;
}

svg:not(:root) {
    overflow: hidden;
}

table {
    text-indent: 0;
    border-color: inherit;
}

details {
    display: block;
}

dialog {
    background-color: inherit;
    border: solid;
    color: inherit;
    display: block;
    height: fit-content;
    left: 0;
    margin: auto;
    padding: 1em;
    position: absolute;
    right: 0;
    width: fit-content;
}

dialog:not([open]) {
    display: none;
}

summary {
    display: list-item;
}

canvas {
    display: inline-block;
}

template {
    display: none;
}

[hidden] {
    display: none;
}

body {
  font-family: 'Noto Sans', 'sans-serif';
  background-color: ${COLOR.BLACK};
}

html, body, #root {
  height: 100%;
}

:root {
    --toastify-icon-color-success: ${COLOR.GREEN};
    --toastify-text-color-success: ${COLOR.GREEN};
    --toastify-color-progress-success: ${COLOR.GREEN};
    --toastify-icon-color-info: ${COLOR.PRIMARY_DIMMER};
    --toastify-text-color-info: ${COLOR.PRIMARY_DIMMER};
    --toastify-color-progress-info: ${COLOR.PRIMARY_DIMMER};
    --toastify-color-dark: ${COLOR.GRAPHITE};
}
`;
