function updateRAMGraph(RAMData) {
    renderRAMChart(RAMData);
}

function renderRAMChart(chartDataRaw){
    var chartWrapperElmId = "#canvas-wrapper8";
    var graphWidth = $(chartWrapperElmId).width() - 50;
    if (chartDataRaw.length == 0) {
        $(chartWrapperElmId).html("No data available...");
        return;
    }

    var chartData = [];
    for (var i = 0; i < chartDataRaw.length; i++){
        chartData.push({x:parseInt(chartDataRaw[i].x), y:parseInt(chartDataRaw[i].y)});
    }

    //var i = parseInt(fromDate);
    //while (i < parseInt(toDate)){
    //    var rnd = Math.random() * (30 - 20) + 20;
    //    chartData.push({x:i * 1000, y:rnd});
    //    i += 60 * 5;
    //}

    var chartDiv = "chart8";
    var sliderDiv = "slider8";
    var x_axis = "x_axis8";
    var y_axis = "y_axis8";
    $(chartWrapperElmId).html("").html('<div id="' + y_axis + '" class="custom_y_axis"></div><div id="' + chartDiv + '" class="custom_rickshaw_graph"></div><div id="' + x_axis + '" class="custom_x_axis"></div><div id="' + sliderDiv + '" class="custom_slider"></div>');

    var graph = new Rickshaw.Graph({
        element: document.getElementById(chartDiv),
        width: graphWidth,
        height: 400,
        strokeWidth: 1,
        renderer: 'line',
        xScale: d3.time.scale(),
        padding: {top: 0.2, left: 0.02, right: 0.02, bottom: 0},
        series:[
            { color: '#170B3B', data: chartData }
        ]
    });

    graph.render();

    var xAxis = new Rickshaw.Graph.Axis.X({
        graph: graph,
        orientation: 'bottom',
        element: document.getElementById(x_axis),
        tickFormat: graph.x.tickFormat()
    });

    xAxis.render();

    var yAxis = new Rickshaw.Graph.Axis.Y({
        graph: graph,
        orientation: 'left',
        element: document.getElementById(y_axis),
        width: 40,
        height: 410
    });

    yAxis.render();

    var slider = new Rickshaw.Graph.RangeSlider.Preview({
        graph: graph,
        element: document.getElementById(sliderDiv)
    });
}