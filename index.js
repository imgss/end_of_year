let data = {
    labels: Array.apply(null, { length: 2 }).map(function(i,index){return index + 1}),

    datasets: [
      {
        title: "Some Data",
        values: [25, 40]
      }
    ]
  };

  let chart = new Chart({
    parent: "#chart", // or a DOM element
    title: "My Awesome Chart",
    data: data,
    type: 'line', // or 'line', 'scatter', 'pie', 'percentage'
    height: 250,

    colors: ['#7cd6fd', 'violet', 'blue'],
    // hex-codes or these preset colors;
    // defaults (in order):
    // ['light-blue', 'blue', 'violet', 'red',
    // 'orange', 'yellow', 'green', 'light-green',
    // 'purple', 'magenta', 'grey', 'dark-grey']

    format_tooltip_x: d => (d + '').toUpperCase(),
    format_tooltip_y: d => d + ' pts'
  });
var timerId = setInterval((function(){
    var label = 2;
    return function(){
        if(label === 12){
            clearInterval(timerId)
        }
        chart.add_data_point(
            [ 300*Math.random()],
            label++
        );
    }
})(),1000)
