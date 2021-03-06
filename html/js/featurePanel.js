'use strict';

var emptyStar = '<span class="empty">☆</span>';
var fullStar = '<span class="full">★</span>';

/**
 * Rendering of feature panels.
 */
function elementFromFeature(f) {
    return document.getElementById(f.side + "-" + f.description.replace(/ /g, "-"));
}


/**
 * Render feature from state.
 * 
 */
function renderFeature(f) {
    var element = elementFromFeature(f);
    var description = (f.side === 'w' ? "White's " : "Black's ") + f.description;
    element.innerHTML = description + "<hr>" + "&nbsp;" +
        fullStar.repeat(f.completed.length) + emptyStar.repeat(f.todo.length) + "&nbsp;";
    element.title = f.todo;
        
    
    if (f.todo.length > 0) {    
        element.className = "feature";
    } else if (f.completed.length > 0) {
        element.className = "feature complete";
    } else {
        element.className = "feature inactive";
    }


}
