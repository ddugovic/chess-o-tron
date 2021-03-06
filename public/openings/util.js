/* globals history */
function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function encodedState(player, pages, filter, colour, trim) {
    return '?player=' + encodeURIComponent(player) +
        "&filter=" + encodeURIComponent(filter) +
        "&pages=" + encodeURIComponent(pages) +
        "&colour=" + encodeURIComponent(colour) +
        "&trim=" + encodeURIComponent(trim);
}

function updateUrlWithState(player, pages, filter, colour, trim) {
    if (history.pushState) {
        var newurl = window.location.protocol + "//" +
            window.location.host +
            window.location.pathname +
            encodedState(player, pages, filter, colour, trim);
        window.history.pushState({
            path: newurl
        }, '', newurl);
    }
}
