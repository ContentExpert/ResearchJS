/**
    * ©license
    * Lodash <https://lodash.com/>
    * Copyright OpenJS Foundation and other contributors <https://openj sf.org/>
    * Released under MIT license <https://lodash.com/license>
    * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
    * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    */
;(function() {
    /** Used as a safe reference for `undefined` in pre-ES5 environments. */
    var undefined;
    /** Used as the semantic version number. */
    var VERSION = '4.17.15';

    /** Used as the size to enable large array optimizations. */
    var LARGE_ARRAY_SIZE = 200;
    /** Error message constants. */
    var C0RE_ERR0R_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.
    FUNC_ERROR_TEXT = 'Expected a function';