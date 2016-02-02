Template.machineGraph.onRendered(function() {
  let container = this.find('#machine-graph');
  console.log(container);
  let options = {
    physics: true
  };
  let nodes = new vis.DataSet();
  let edges = new vis.DataSet();
  let data = {
    nodes,
    edges
  };
  let network = new vis.Network(container, data, options);


  function buildNodeFromDoc(doc) {
    return {
      id: doc._id,
      label: doc.name
    };
  }
  States.find({
    machineId: this.data.machineId
  }).observe({
    added(doc) {
        nodes.add(buildNodeFromDoc(doc));
      },
      changed(doc) {
        nodes.update(buildNodeFromDoc(doc));
      },
      removed(doc) {
        nodes.remove({
          id: doc._id
        });
      }
  });

  function buildEdgeFromDoc(doc) {
    return {
      id: doc._id,
      from: doc.stateId,
      to: doc.nextStateId,
      label: doc.input + ' >> ' + doc.output + ', ' + doc.direction,
      arrows: 'to',
      dashes: true
    };
  }

  Actions.find({
    machineId: this.data.machineId
  }).observe({
    added(doc) {
        edges.add(buildEdgeFromDoc(doc));
      },
      changed(doc) {
        edges.add(buildEdgeFromDoc(doc));
      },
      removed(doc) {
        edges.remove({
          id: doc._id
        });
      }
  });

});
