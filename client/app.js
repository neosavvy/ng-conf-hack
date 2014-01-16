
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

function move (lat_degrees, lng_degrees) {
    var lookAt = ge.getView().copyAsLookAt(ge.ALTITUDE_RELATIVE_TO_GROUND);
    lookAt.setLatitude(lookAt.getLatitude() + lat_degrees);
    lookAt.setLongitude(lookAt.getLongitude() + lng_degrees);
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
