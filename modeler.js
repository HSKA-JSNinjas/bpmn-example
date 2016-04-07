'use strict';

var BpmnModeler = window.BpmnJS;

var modeler = new BpmnModeler({ container: '#canvas' });

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        modeler.importXML(xhr.response, function(err) {

          if (!err) {
            console.log('success!');
            modeler.get('canvas').zoom('fit-viewport');
          } else {
            console.log('something went wrong:', err);
          }
        });
    }
};

xhr.open('GET', '/newDiagram.bpmn', true);
xhr.send(null);