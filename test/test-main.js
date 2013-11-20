var tests = [];
for (var file in window.__karma__.files) {
    if (/test\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from "/base"
    baseUrl: "/base/src/scripts",

    paths: {
        "d3": "../lib/d3.v3.min",
        "geodesic": "../lib/geodesic",
        "Squire": "base/node_modules/squirejs/src/Squire",
        "underscore": "/base/node_modules/underscore/underscore"
    },

    shim: {
        "d3": {
            exports: "d3"
        },
        "geodesic": ["d3"],
        "underscore": {
            "exports": "_"
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests
});

require(tests, function() {
    window.__karma__.start();
});