System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiBody;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiBody = _export("AiBody", (function () {
        function AiBody(element) {
          _classCallCheck(this, AiBody);

          this.element = element;
        }

        _prototypeProperties(AiBody, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-body").withProperty("router").withProperty("direction");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          attahced: {
            value: function attahced() {
              this.element.classList.add("ai-body");
            },
            writable: true,
            configurable: true
          },
          directionChanged: {
            value: function directionChanged(value) {
              this.element.classList.add("is-" + value);
            },
            writable: true,
            configurable: true
          }
        });

        return AiBody;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWJvZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FHSCxNQUFNOzs7QUFIWCxjQUFRLHNCQUFSLFFBQVE7Ozs7Ozs7QUFHSCxZQUFNO0FBbUJKLGlCQW5CRixNQUFNLENBbUJILE9BQU87Z0NBbkJWLE1BQU07O0FBcUJYLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1NBRXpCOzs2QkF2QlEsTUFBTTtBQUVSLGtCQUFRO21CQUFBLG9CQUFFO0FBRWIscUJBQU8sUUFBUSxDQUNWLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FDeEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUN0QixZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7YUFFakM7Ozs7QUFHTSxnQkFBTTttQkFBQSxrQkFBRTtBQUVYLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFbkI7Ozs7O0FBU0Qsa0JBQVE7bUJBQUEsb0JBQUU7QUFFUixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBRXZDOzs7O0FBR0QsMEJBQWdCO21CQUFBLDBCQUFDLEtBQUssRUFBQztBQUVuQixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUMsQ0FBQTthQUUxQzs7Ozs7O2VBcENRLE1BQU0iLCJmaWxlIjoiYWktYm9keS5qcyIsInNvdXJjZVJvb3QiOiIvZGlzdC8ifQ==