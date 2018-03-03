import React from 'react';
import {
  // main component
  Chart, 
  // graphs
  Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
  // wrappers
  Layer, Animate, Transform, Handlers,
  // helpers
  helpers, DropShadow, Gradient
} from 'rumble-charts';

const series = [{
    data: [1, 2, 4, 6, 1, 2, 4, 6, 1, 2, 4, 6]
}];

const channels = [{
	data: ["200", "201", "202", "203"]
}]

class Demo extends React.Component {
  render() {
    return <div>
    	<div className="flex">
		    <div className="w-100">
			    <Chart width={400} height={400} series={series} minY={0}>
			    <Bars />
			    </Chart>
			</div>
				<div className="w-100">
				    <table width={400} height={20}>
					    <tr>
						    <td>200</td>
						    <td>201</td>
						    <td>202</td>
						    <td>203</td>
					    </tr>
				    </table>
			    </div>
	    </div>
	</div>;
  }
}

export default Demo;