"use strict";

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: {
    name: 'collapse-item',
    type: 'descendant',
    current: 'collapse'
  },
  props: {
    value: {
      type: null,
      observer: 'updateExpanded'
    },
    accordion: {
      type: Boolean,
      observer: 'updateExpanded'
    },
    border: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    updateExpanded: function updateExpanded() {
      this.children.forEach(function (child) {
        child.updateExpanded();
      });
    },
    "switch": function _switch(name, expanded) {
      var _this$data = this.data,
          accordion = _this$data.accordion,
          value = _this$data.value;

      if (!accordion) {
        name = expanded ? (value || []).concat(name) : (value || []).filter(function (activeName) {
          return activeName !== name;
        });
      } else {
        name = expanded ? name : '';
      }

      this.$emit('change', name);
      this.$emit('input', name);
    }
  }
});