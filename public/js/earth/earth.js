
// earth API bootstrap
//
var ge;
google.load("earth", "1", {"other_params": "sensor=true"});

function init() {
    google.earth.createInstance('map', initCB, failureCB) ;
}

function initCB(instance) {
    ge = instance;
    ge.getWindow().setVisibility(true);
}

function failureCB(errorCode) {
    console.log('something went wrong', errorCode);
}

google.setOnLoadCallback(init)

//
////

// app code
//
function move (pitch, yaw) {
    var lookAt = ge.getView().copyAsLookAt(ge.ALTITUDE_RELATIVE_TO_GROUND);
    lookAt.setLatitude(lookAt.getLatitude() + pitch);
    lookAt.setLongitude(lookAt.getLongitude() + yaw);
    ge.getView().setAbstractView(lookAt);
}

var zoomLevel = {
    "1": 2,
    "-1": 0.5
};
function zoom(val) {
    var lookAt = ge.getView().copyAsLookAt(ge.ALTITUDE_RELATIVE_TO_GROUND);
    lookAt.setRange(lookAt.getRange() * zoomLevel[val]);
    ge.getView().setAbstractView(lookAt);
}
