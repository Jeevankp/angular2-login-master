System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TODOS;
    return {
        setters:[],
        execute: function() {
            /*mock-todos it's just an array of objects that simulates a database.
            You should use a database. */
            //exporting the heroes mock
            exports_1("TODOS", TODOS = [
                { "name": "clean the house", completed: false },
                { "name": "water the dog", completed: false },
                { "name": "feed the lawn", completed: false },
                { "name": "pay dem bills", completed: false },
                { "name": "run", completed: false },
                { "name": "swim", completed: false },
                { "name": "homeworks", completed: false },
                { "name": "gym", completed: false },
                { "name": "diner", completed: false }
            ]);
        }
    }
});
//# sourceMappingURL=mock-todos.js.map