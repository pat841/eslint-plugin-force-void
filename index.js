/**
 * @fileoverview Rule to force using "return void 0;" in place of "return;"
 * @author Pat Herlihy
 */
"use strict";

module.exports = {
  rules: {
    "force-void": {
      create: function(context) {
        return {
          ReturnStatement: function(node) {
            if (!node.argument) {
              context.report({
                node: node,
                message: "Use return void 0; in place of return;",
                fix: function(fixer) {
                  return fixer.replaceText(node, 'return void 0;');
                },
              });
            }
          },
        };
      },
    },
  },
};
