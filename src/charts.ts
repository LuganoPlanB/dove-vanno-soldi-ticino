import * as d3 from 'd3';

export interface BudgetData {
  category: string;
  value: number;
  color: string;
}

export function renderBudgetOverview(containerId: string, data: BudgetData[]): void {
  const container = d3.select(`#${containerId}`);
  container.selectAll('*').remove();

  const margin = { top: 20, right: 20, bottom: 60, left: 120 };
  const containerWidth = (container.node() as HTMLElement).offsetWidth;
  const width = containerWidth - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const svg = container
    .append('svg')
    .attr('width', containerWidth)
    .attr('height', 400)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => Math.abs(d.value)) || 0])
    .range([0, width]);

  const y = d3.scaleBand()
    .domain(data.map(d => d.category))
    .range([0, height])
    .padding(0.2);

  svg.selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', 0)
    .attr('y', d => y(d.category) || 0)
    .attr('width', d => x(Math.abs(d.value)))
    .attr('height', y.bandwidth())
    .attr('fill', d => d.color)
    .attr('rx', 4);

  svg.selectAll('.label')
    .data(data)
    .enter()
    .append('text')
    .attr('class', 'label')
    .attr('x', d => x(Math.abs(d.value)) + 8)
    .attr('y', d => (y(d.category) || 0) + y.bandwidth() / 2)
    .attr('dy', '0.35em')
    .attr('font-size', '14px')
    .attr('font-weight', 'bold')
    .attr('fill', '#212121')
    .text(d => `${d.value.toLocaleString('it-CH')} M CHF`);

  svg.append('g')
    .attr('class', 'y-axis')
    .call(d3.axisLeft(y))
    .selectAll('text')
    .attr('font-size', '13px')
    .attr('fill', '#212121');

  svg.select('.domain').remove();
  svg.selectAll('.tick line').remove();
}

export interface BarChartData {
  label: string;
  value: number;
  type?: 'positive' | 'negative' | 'neutral';
}

export function renderBarChart(containerId: string, data: BarChartData[], maxValue?: number): void {
  const container = d3.select(`#${containerId}`);
  container.selectAll('*').remove();

  const margin = { top: 20, right: 20, bottom: 40, left: 180 };
  const containerWidth = (container.node() as HTMLElement).offsetWidth;
  const width = containerWidth - margin.left - margin.right;
  const height = Math.max(300, data.length * 60) - margin.top - margin.bottom;

  const svg = container
    .append('svg')
    .attr('width', containerWidth)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const maxVal = maxValue || d3.max(data, d => Math.abs(d.value)) || 0;
  const x = d3.scaleLinear()
    .domain([0, maxVal])
    .range([0, width]);

  const y = d3.scaleBand()
    .domain(data.map(d => d.label))
    .range([0, height])
    .padding(0.3);

  const colorMap = {
    positive: '#388e3c',
    negative: '#d32f2f',
    neutral: '#0066cc'
  };

  svg.selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', 0)
    .attr('y', d => y(d.label) || 0)
    .attr('width', d => x(Math.abs(d.value)))
    .attr('height', y.bandwidth())
    .attr('fill', d => colorMap[d.type || 'neutral'])
    .attr('rx', 4);

  svg.selectAll('.value-label')
    .data(data)
    .enter()
    .append('text')
    .attr('class', 'value-label')
    .attr('x', d => x(Math.abs(d.value)) + 8)
    .attr('y', d => (y(d.label) || 0) + y.bandwidth() / 2)
    .attr('dy', '0.35em')
    .attr('font-size', '13px')
    .attr('font-weight', 'bold')
    .attr('fill', '#212121')
    .text(d => `${d.value > 0 ? '+' : ''}${d.value.toLocaleString('it-CH')} M`);

  svg.append('g')
    .attr('class', 'y-axis')
    .call(d3.axisLeft(y))
    .selectAll('text')
    .attr('font-size', '13px')
    .attr('fill', '#212121')
    .each(function() {
      const text = d3.select(this);
      const words = text.text().split(/\s+/).reverse();
      const maxWidth = margin.left - 10;
      let word;
      let line: string[] = [];
      let lineNumber = 0;
      const lineHeight = 1.1;
      const y = text.attr('y');
      const dy = parseFloat(text.attr('dy') || '0');
      let tspan = text.text(null).append('tspan').attr('x', -6).attr('y', y).attr('dy', `${dy}em`);
      
      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(' '));
        if ((tspan.node()?.getComputedTextLength() || 0) > maxWidth && line.length > 1) {
          line.pop();
          tspan.text(line.join(' '));
          line = [word];
          tspan = text.append('tspan').attr('x', -6).attr('y', y).attr('dy', `${++lineNumber * lineHeight + dy}em`).text(word);
        }
      }
    });

  svg.select('.domain').remove();
  svg.selectAll('.tick line').remove();
}

export interface TreemapData {
  name: string;
  value: number;
  children?: TreemapData[];
}

interface TreemapNode extends d3.HierarchyRectangularNode<TreemapData> {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export function renderTreemap(containerId: string, data: TreemapData): void {
  const container = d3.select(`#${containerId}`);
  container.selectAll('*').remove();

  const containerWidth = (container.node() as HTMLElement).offsetWidth;
  const width = containerWidth;
  const height = 500;

  const svg = container
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const root = d3.hierarchy(data)
    .sum(d => d.value || 0)
    .sort((a, b) => (b.value || 0) - (a.value || 0));

  d3.treemap<TreemapData>()
    .size([width, height])
    .padding(2)
    .round(true)(root);

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  const nodes = svg.selectAll<SVGGElement, TreemapNode>('.node')
    .data(root.leaves() as TreemapNode[])
    .enter()
    .append('g')
    .attr('class', 'node')
    .attr('transform', d => `translate(${d.x0},${d.y0})`);

  nodes.append('rect')
    .attr('width', d => d.x1 - d.x0)
    .attr('height', d => d.y1 - d.y0)
    .attr('fill', (_d, i) => color(i.toString()))
    .attr('opacity', 0.8)
    .attr('rx', 4);

  nodes.append('text')
    .attr('x', 4)
    .attr('y', 16)
    .attr('font-size', '12px')
    .attr('font-weight', 'bold')
    .attr('fill', 'white')
    .text(d => d.data.name)
    .each(function(d) {
      const text = d3.select(this);
      const width = d.x1 - d.x0 - 8;
      const words = text.text().split(/\s+/);
      text.text('');
      
      let line = '';
      for (const word of words) {
        const testLine = line + (line ? ' ' : '') + word;
        text.text(testLine);
        if ((text.node()?.getComputedTextLength() || 0) > width && line) {
          text.text(line + '...');
          break;
        }
        line = testLine;
      }
    });

  nodes.append('text')
    .attr('x', 4)
    .attr('y', 32)
    .attr('font-size', '11px')
    .attr('fill', 'white')
    .text(d => `${d.value?.toLocaleString('it-CH')} M`);
}
