var BpmnViewer = window.BpmnJS;

var viewer = new BpmnViewer({ container: '#canvas' });

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        viewer.importXML(xhr.response, function(err) {

          if (!err) {
            console.log('success!');
            viewer.get('canvas').zoom('fit-viewport');
          } else {
            console.log('something went wrong:', err);
          }
        });
    }
};

xhr.open('GET', './pizza-collaboration.bpmn', true);
xhr.send(null);