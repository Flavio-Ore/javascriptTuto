//! OBJETOS LITERALES

let id = 0, time = 999

const spot = {
  id,
  time,
  change () {
    console.log('change')
  }
}

spot.change()

console.log(spot.id, spot.time);

const a = {
  key: 'value',
  nodes: [],
  active: true,
  secuence: {
    min: 0,
    interlude: [1,2,3,4,5,6,7,8,9,10],
    max: 100,
  },
  replaceNodes: function(arr) {
    if (arr.length <= this.secuence.max && arr.length > this.secuence.min) {
      for (let i = 0; i < arr.length; i++) {
        this.nodes.pop()
        this.nodes.push(arr[i]);
      }
    } else {
      for (let i = 0; i < this.secuence.interlude.length; i++) {
        this.nodes.push(this.secuence.interlude[i])                
      }
    }
  }
}

const outOfRange = Array(200).fill(666)

const inRage = Array(20).fill(666)

try {
  
  console.log(a.key);
  
  console.log(a.nodes);
  
  a.replaceNodes(outOfRange)
  
  console.log(a.nodes);
  
  a.replaceNodes(inRage)
  
  console.log(a.nodes);

} catch (e) {
  console.log('ERROR DE GON:');
  console.log(e)
}