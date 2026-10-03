import * as d3 from 'd3';

const EASE_OUT = d3.easeCubicOut;
const ANIMATION_DURATION = 200;

function isDarkMode(): boolean {
  return document.documentElement.classList.contains('dark');
}

function getColors() {
  const dark = isDarkMode();
  return {
    text: dark ? 'rgb(226 232 240)' : 'rgb(15 23 42)',
    textMuted: dark ? 'rgb(148 163 184)' : 'rgb(100 116 139)',
    grid: dark ? 'rgb(51 65 85)' : 'rgb(226 232 240)',
    primary: dark ? 'rgb(96 165 250)' : 'rgb(59 130 246)',
    destructive: dark ? 'rgb(248 113 113)' : 'rgb(239 68 68)',
    success: dark ? 'rgb(74 222 128)' : 'rgb(34 197 94)',
    purple: dark ? 'rgb(192 132 252)' : 'rgb(168 85 247)',
    amber: dark ? 'rgb(251 191 36)' : 'rgb(245 158 11)',
    tooltip: dark ? 'rgb(30 41 59)' : 'rgb(255 255 255)',
  };
}

function isMobile(): boolean {
  return window.innerWidth < 768;
}

function createTooltip(): d3.Selection<HTMLDivElement, unknown, HTMLElement, any> {
  const existingTooltip = d3.select<HTMLDivElement, unknown>('body .chart-tooltip');
  if (!existingTooltip.empty()) {
    return existingTooltip;
  }
  
  return d3.select('body')
    .append<HTMLDivElement>('div')
    .attr('class', 'chart-tooltip absolute pointer-events-none z-50 rounded-lg border bg-card px-3 py-2 text-sm shadow-lg opacity-0')
    .style('transition', 'opacity 125ms cubic-bezier(0.23, 1, 0.32, 1), transform 125ms cubic-bezier(0.23, 1, 0.32, 1)')
    .style('transform', 'scale(0.97)')
    .style('max-width', '280px');
}

function getEventCoords(event: MouseEvent | TouchEvent): { x: number; y: number } {
  if ('touches' in event && event.touches.length > 0) {
    return { x: event.touches[0].pageX, y: event.touches[0].pageY };
  }
  return { x: (event as MouseEvent).pageX, y: (event as MouseEvent).pageY };
}

function showTooltip(tooltip: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>, html: string, pageX: number, pageY: number) {
  const mobile = isMobile();
  const offsetX = mobile ? 0 : 12;
  const offsetY = mobile ? -60 : -8;
  
  tooltip
    .html(html)
    .style('left', `${Math.min(pageX + offsetX, window.innerWidth - 200)}px`)
    .style('top', `${Math.max(pageY + offsetY, 10)}px`)
    .style('opacity', '1')
    .style('transform', 'scale(1)');
}

function hideTooltip(tooltip: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>) {
  tooltip
    .style('opacity', '0')
    .style('transform', 'scale(0.97)');
}

export interface TreemapData {
  categoria: string;
  importo: number;
  percentuale: number;
}

interface TreemapNode extends d3.HierarchyRectangularNode<any> {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  data: TreemapData;
}

export function renderTreemap(containerId: string, data: TreemapData[]): void {
  const container = d3.select(`#${containerId}`);
  container.selectAll('*').remove();

  const colors = getColors();
  const mobile = isMobile();
  
  container.append('div')
    .attr('class', 'mb-4')
    .append('h3')
    .attr('class', 'text-xl font-semibold')
    .text('Spese per funzione 2027');

  container.append('div')
    .attr('class', 'text-sm text-muted-foreground mb-4')
    .text(mobile ? 'Tocca per i dettagli' : 'Clicca per vedere i dettagli');

  const containerWidth = (container.node() as HTMLElement).offsetWidth;
  const width = containerWidth;
  const height = Math.min(mobile ? 400 : 500, Math.max(300, containerWidth * 0.6));

  const svg = container
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('width', '100%')
    .attr('height', 'auto')
    .style('max-width', '100%')
    .style('height', 'auto');

  const colorScale = d3.scaleOrdinal<string>()
    .domain(data.map(d => d.categoria))
    .range([
      colors.primary, colors.purple, colors.amber, 
      'rgb(236 72 153)', 'rgb(20 184 166)', 'rgb(251 146 60)',
      'rgb(132 204 22)', 'rgb(244 114 182)', 'rgb(14 165 233)', 'rgb(168 162 158)'
    ]);

  const root = d3.hierarchy({ children: data } as any)
    .sum((d: any) => d.importo || 0)
    .sort((a, b) => (b.value || 0) - (a.value || 0));

  d3.treemap<any>()
    .size([width, height])
    .padding(mobile ? 1 : 2)
    .round(true)
    (root);

  const tooltip = createTooltip();

  const cell = svg.selectAll('g')
    .data(root.leaves() as TreemapNode[])
    .join('g')
    .attr('transform', (d) => `translate(${d.x0},${d.y0})`)
    .style('cursor', 'pointer');

  cell.append('rect')
    .attr('width', d => d.x1 - d.x0)
    .attr('height', d => d.y1 - d.y0)
    .attr('fill', d => colorScale(d.data.categoria))
    .attr('rx', mobile ? 4 : 6)
    .attr('opacity', 0.9)
    .style('transition', `opacity ${ANIMATION_DURATION}ms cubic-bezier(0.23, 1, 0.32, 1)`)
    .on('mouseenter touchstart', function(event, d) {
      event.preventDefault();
      d3.select(this)
        .attr('opacity', 1)
        .style('filter', 'brightness(1.1)');
      
      const coords = getEventCoords(event);
      showTooltip(tooltip, `
        <div class="font-semibold mb-1">${d.data.categoria}</div>
        <div class="text-xs text-muted-foreground">${d.data.importo.toLocaleString('it-CH')} M CHF</div>
        <div class="text-xs font-medium">${d.data.percentuale.toFixed(1)}% del totale</div>
      `, coords.x, coords.y);
    })
    .on('mousemove', (event) => {
      showTooltip(tooltip, tooltip.html(), event.pageX, event.pageY);
    })
    .on('mouseleave touchend', function() {
      d3.select(this)
        .attr('opacity', 0.9)
        .style('filter', 'none');
      hideTooltip(tooltip);
    });

  cell.append('text')
    .selectAll('tspan')
    .data((d: TreemapNode) => {
      const width = d.x1 - d.x0;
      const height = d.y1 - d.y0;
      const text = d.data.categoria;
      const minWidth = mobile ? 60 : 80;
      const minHeight = mobile ? 40 : 50;
      if (width < minWidth || height < minHeight) return [];
      
      const words = text.split(/\s+/);
      const lines: string[] = [];
      let line = '';
      const charWidth = mobile ? 6 : 7;
      
      words.forEach((word: string) => {
        const testLine = line + (line ? ' ' : '') + word;
        if (testLine.length * charWidth > width - 10) {
          if (line) lines.push(line);
          line = word;
        } else {
          line = testLine;
        }
      });
      if (line) lines.push(line);
      return lines.slice(0, mobile ? 2 : 3);
    })
    .join('tspan')
    .attr('x', mobile ? 4 : 6)
    .attr('y', (_text, i, nodes) => {
      const node = nodes[i];
      if (!node || !('parentNode' in node)) return 0;
      const parentElement = (node as SVGTSpanElement).parentNode;
      if (!parentElement) return 0;
      const parent = d3.select(parentElement as SVGTextElement);
      const parentData = parent.datum() as TreemapNode;
      const height = parentData.y1 - parentData.y0;
      const lineHeight = mobile ? 12 : 14;
      const totalLines = nodes.length;
      const startY = (height - totalLines * lineHeight) / 2 + lineHeight;
      return startY + i * lineHeight;
    })
    .attr('font-size', mobile ? '10px' : '11px')
    .attr('font-weight', '600')
    .attr('fill', 'white')
    .text((textLine) => textLine)
    .style('pointer-events', 'none');
}

export interface LineChartData {
  anno: number;
  valore: number;
}

export function renderLineChart(
  containerId: string,
  data: LineChartData[],
  title: string,
  _yLabel: string,
  format: (n: number) => string = (n) => n.toLocaleString('it-CH')
): void {
  const container = d3.select(`#${containerId}`);
  container.selectAll('*').remove();

  const colors = getColors();
  const mobile = isMobile();

  container.append('h3')
    .attr('class', 'text-xl font-semibold mb-2')
    .text(title);

  const margin = mobile 
    ? { top: 10, right: 10, bottom: 40, left: 50 }
    : { top: 20, right: 30, bottom: 40, left: 80 };
  
  const containerWidth = (container.node() as HTMLElement).offsetWidth;
  const width = containerWidth - margin.left - margin.right;
  const chartHeight = mobile ? 250 : 300;
  const height = chartHeight - margin.top - margin.bottom;

  const svg = container
    .append('svg')
    .attr('viewBox', `0 0 ${containerWidth} ${chartHeight}`)
    .attr('width', '100%')
    .attr('height', 'auto')
    .style('max-width', '100%')
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.anno) as [number, number])
    .range([0, width]);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.valore)! * 1.1])
    .range([height, 0])
    .nice();

  const line = d3.line<LineChartData>()
    .x(d => x(d.anno))
    .y(d => y(d.valore))
    .curve(d3.curveMonotoneX);

  svg.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x).tickFormat(d => d.toString()).ticks(mobile ? Math.min(4, data.length) : data.length))
    .call(g => g.select('.domain').attr('stroke', colors.grid))
    .call(g => g.selectAll('.tick line').remove())
    .call(g => g.selectAll('.tick text')
      .attr('fill', colors.textMuted)
      .attr('font-size', mobile ? '10px' : '12px'));

  svg.append('g')
    .call(d3.axisLeft(y).tickFormat(d => format(d as number)).ticks(mobile ? 4 : 5))
    .call(g => g.select('.domain').remove())
    .call(g => g.selectAll('.tick line')
      .attr('stroke', colors.grid)
      .attr('stroke-dasharray', '2,2')
      .attr('x2', width))
    .call(g => g.selectAll('.tick text')
      .attr('fill', colors.textMuted)
      .attr('font-size', mobile ? '9px' : '12px'));

  const path = svg.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', colors.primary)
    .attr('stroke-width', mobile ? 2 : 2.5)
    .attr('d', line);

  const totalLength = path.node()!.getTotalLength();
  path
    .attr('stroke-dasharray', `${totalLength} ${totalLength}`)
    .attr('stroke-dashoffset', totalLength)
    .transition()
    .duration(600)
    .ease(EASE_OUT)
    .attr('stroke-dashoffset', 0);

  const tooltip = createTooltip();

  const dotRadius = mobile ? 5 : 4;
  const dotRadiusHover = mobile ? 8 : 6;

  svg.selectAll('.dot')
    .data(data)
    .join('circle')
    .attr('class', 'dot')
    .attr('cx', (point) => x(point.anno))
    .attr('cy', (point) => y(point.valore))
    .attr('r', 0)
    .attr('fill', colors.primary)
    .attr('stroke', 'white')
    .attr('stroke-width', 2)
    .style('cursor', 'pointer')
    .style('transition', `r ${ANIMATION_DURATION}ms cubic-bezier(0.23, 1, 0.32, 1)`)
    .on('mouseenter touchstart', function(event, point) {
      event.preventDefault();
      d3.select(this).attr('r', dotRadiusHover);
      const coords = getEventCoords(event);
      showTooltip(tooltip, `
        <div class="font-semibold">${point.anno}</div>
        <div class="text-sm">${format(point.valore)}</div>
      `, coords.x, coords.y);
    })
    .on('mousemove', (event) => {
      showTooltip(tooltip, tooltip.html(), event.pageX, event.pageY);
    })
    .on('mouseleave touchend', function() {
      d3.select(this).attr('r', dotRadius);
      hideTooltip(tooltip);
    })
    .transition()
    .delay((_point, i) => 600 + i * 80)
    .duration(ANIMATION_DURATION)
    .ease(EASE_OUT)
    .attr('r', dotRadius);
}

export interface ComparisonData {
  categoria: string;
  consuntivo2025: number;
  preventivo2026: number;
  preventivo2027: number;
}

export function renderComparisonChart(containerId: string, data: ComparisonData[]): void {
  const container = d3.select(`#${containerId}`);
  container.selectAll('*').remove();

  const colors = getColors();
  const mobile = isMobile();

  container.append('h3')
    .attr('class', 'text-xl font-semibold mb-2')
    .text('Confronto 2025-2027');

  container.append('div')
    .attr('class', 'text-sm text-muted-foreground mb-4')
    .text('Evoluzione delle principali voci di bilancio');

  const margin = mobile
    ? { top: 10, right: 10, bottom: 80, left: 10 }
    : { top: 20, right: 30, bottom: 100, left: 140 };
  
  const containerWidth = (container.node() as HTMLElement).offsetWidth;
  const width = containerWidth - margin.left - margin.right;
  const chartHeight = Math.max(mobile ? 350 : 400, data.length * (mobile ? 100 : 80));
  const height = chartHeight - margin.top - margin.bottom;

  const svg = container
    .append('svg')
    .attr('viewBox', `0 0 ${containerWidth} ${chartHeight}`)
    .attr('width', '100%')
    .attr('height', 'auto')
    .style('max-width', '100%')
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const categories = data.map(d => d.categoria);
  const subgroups = ['consuntivo2025', 'preventivo2026', 'preventivo2027'];
  const colorScale = d3.scaleOrdinal<string>()
    .domain(subgroups)
    .range([colors.success, colors.primary, colors.purple]);

  if (mobile) {
    const xBand = d3.scaleBand()
      .domain(subgroups)
      .range([0, width])
      .padding(0.1);

    // For mobile, we use separate y-scales per category
    const tooltip = createTooltip();

    data.forEach((category, catIndex) => {
      const g = svg.append('g')
        .attr('transform', `translate(0, ${catIndex * (height / data.length)})`);

      g.append('text')
        .attr('x', width / 2)
        .attr('y', -5)
        .attr('text-anchor', 'middle')
        .attr('font-size', '11px')
        .attr('font-weight', '600')
        .attr('fill', colors.text)
        .text(category.categoria);

      const sectionHeight = height / data.length - 20;
      const sectionY = d3.scaleLinear()
        .domain([0, d3.max([category.consuntivo2025, category.preventivo2026, category.preventivo2027])! * 1.1])
        .range([sectionHeight, 0]);

      subgroups.forEach((key) => {
        const value = (category as any)[key];
        g.append('rect')
          .attr('x', xBand(key)!)
          .attr('y', sectionHeight)
          .attr('width', xBand.bandwidth())
          .attr('height', 0)
          .attr('fill', colorScale(key))
          .attr('rx', 3)
          .attr('opacity', 0.9)
          .style('cursor', 'pointer')
          .on('touchstart mouseenter', function(event) {
            event.preventDefault();
            d3.select(this).attr('opacity', 1);
            const label = key === 'consuntivo2025' ? 'C2025' :
                          key === 'preventivo2026' ? 'P2026' : 'P2027';
            const coords = getEventCoords(event);
            showTooltip(tooltip, `
              <div class="font-semibold mb-1">${category.categoria}</div>
              <div class="text-xs text-muted-foreground mb-1">${label}</div>
              <div class="text-sm font-medium">${value.toLocaleString('it-CH')} M CHF</div>
            `, coords.x, coords.y);
          })
          .on('touchend mouseleave', function() {
            d3.select(this).attr('opacity', 0.9);
            hideTooltip(tooltip);
          })
          .transition()
          .delay(catIndex * 100 + subgroups.indexOf(key) * 30)
          .duration(400)
          .ease(EASE_OUT)
          .attr('y', sectionY(value))
          .attr('height', sectionHeight - sectionY(value));
      });
    });

    const legend = svg.append('g')
      .attr('transform', `translate(0, ${height + 30})`);

    const legendItems = [
      { key: 'consuntivo2025', label: 'C2025' },
      { key: 'preventivo2026', label: 'P2026' },
      { key: 'preventivo2027', label: 'P2027' }
    ];

    legendItems.forEach((item, i) => {
      const g = legend.append('g')
        .attr('transform', `translate(${i * (width / 3)}, 0)`);

      g.append('rect')
        .attr('width', 12)
        .attr('height', 12)
        .attr('rx', 2)
        .attr('fill', colorScale(item.key));

      g.append('text')
        .attr('x', 18)
        .attr('y', 10)
        .attr('font-size', '11px')
        .attr('fill', colors.text)
        .text(item.label);
    });
  } else {
    const y = d3.scaleBand()
      .domain(categories)
      .range([0, height])
      .padding(0.2);

    const ySubgroup = d3.scaleBand()
      .domain(subgroups)
      .range([0, y.bandwidth()])
      .padding(0.05);

    const maxValue = d3.max(data, d =>
      Math.max(d.consuntivo2025, d.preventivo2026, d.preventivo2027)
    ) || 0;

    const x = d3.scaleLinear()
      .domain([0, maxValue * 1.1])
      .range([0, width]);

    svg.append('g')
      .call(d3.axisLeft(y))
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('.tick line').remove())
      .call(g => g.selectAll('.tick text')
        .attr('fill', colors.text)
        .attr('font-size', '12px')
        .attr('font-weight', '500'));

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickFormat(d => `${(d as number / 1000).toFixed(1)}Mia`).ticks(5))
      .call(g => g.select('.domain').attr('stroke', colors.grid))
      .call(g => g.selectAll('.tick line').remove())
      .call(g => g.selectAll('.tick text')
        .attr('fill', colors.textMuted)
        .attr('font-size', '11px'));

    const tooltip = createTooltip();

    const groups = svg.append('g')
      .selectAll('g')
      .data(data)
      .join('g')
      .attr('transform', d => `translate(0,${y(d.categoria)})`);

    groups.selectAll('rect')
      .data((row) => subgroups.map(key => ({ key, value: (row as any)[key], categoria: row.categoria })))
      .join('rect')
      .attr('x', 0)
      .attr('y', (bar) => ySubgroup(bar.key)!)
      .attr('width', 0)
      .attr('height', ySubgroup.bandwidth())
      .attr('fill', (bar) => colorScale(bar.key))
      .attr('rx', 3)
      .attr('opacity', 0.9)
      .style('cursor', 'pointer')
      .on('mouseenter touchstart', function(event, bar) {
        event.preventDefault();
        d3.select(this).attr('opacity', 1);
        const label = bar.key === 'consuntivo2025' ? 'Consuntivo 2025' :
                      bar.key === 'preventivo2026' ? 'Preventivo 2026' : 'Preventivo 2027';
        const coords = getEventCoords(event);
        showTooltip(tooltip, `
          <div class="font-semibold mb-1">${bar.categoria}</div>
          <div class="text-xs text-muted-foreground mb-1">${label}</div>
          <div class="text-sm font-medium">${bar.value.toLocaleString('it-CH')} M CHF</div>
        `, coords.x, coords.y);
      })
      .on('touchend mouseleave', function() {
        d3.select(this).attr('opacity', 0.9);
        hideTooltip(tooltip);
      })
      .transition()
      .delay((_bar, i) => i * 30)
      .duration(400)
      .ease(EASE_OUT)
      .attr('width', (bar) => x(bar.value));

    const legend = svg.append('g')
      .attr('transform', `translate(0,${height + 50})`);

    const legendItems = [
      { key: 'consuntivo2025', label: 'Consuntivo 2025' },
      { key: 'preventivo2026', label: 'Preventivo 2026' },
      { key: 'preventivo2027', label: 'Preventivo 2027' }
    ];

    legendItems.forEach((item, i) => {
      const g = legend.append('g')
        .attr('transform', `translate(${i * 160}, 0)`);

      g.append('rect')
        .attr('width', 12)
        .attr('height', 12)
        .attr('rx', 2)
        .attr('fill', colorScale(item.key));

      g.append('text')
        .attr('x', 18)
        .attr('y', 10)
        .attr('font-size', '12px')
        .attr('fill', colors.text)
        .text(item.label);
    });
  }
}

export interface SimpleBarData {
  label: string;
  value: number;
  color?: string;
}

export function renderSimpleBarChart(containerId: string, data: SimpleBarData[], title: string): void {
  const container = d3.select(`#${containerId}`);
  container.selectAll('*').remove();

  const colors = getColors();
  const mobile = isMobile();

  container.append('h3')
    .attr('class', 'text-xl font-semibold mb-4')
    .text(title);

  const margin = mobile
    ? { top: 10, right: 10, bottom: 60, left: 10 }
    : { top: 20, right: 30, bottom: 60, left: 140 };
  
  const containerWidth = (container.node() as HTMLElement).offsetWidth;
  const width = containerWidth - margin.left - margin.right;
  const chartHeight = Math.max(mobile ? 250 : 300, data.length * (mobile ? 80 : 60));
  const height = chartHeight - margin.top - margin.bottom;

  const svg = container
    .append('svg')
    .attr('viewBox', `0 0 ${containerWidth} ${chartHeight}`)
    .attr('width', '100%')
    .attr('height', 'auto')
    .style('max-width', '100%')
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const tooltip = createTooltip();

  if (mobile) {
    const x = d3.scaleBand()
      .domain(data.map((item) => item.label))
      .range([0, width])
      .padding(0.3);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, (item) => item.value)! * 1.1])
      .range([height, 0]);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickFormat(() => ''))
      .call((g) => g.select('.domain').attr('stroke', colors.grid))
      .call((g) => g.selectAll('.tick line').remove());

    svg.append('g')
      .call(d3.axisLeft(y).tickFormat((val) => `${(val as number / 1000).toFixed(1)}Mia`).ticks(4))
      .call((g) => g.select('.domain').remove())
      .call((g) => g.selectAll('.tick line')
        .attr('stroke', colors.grid)
        .attr('stroke-dasharray', '2,2')
        .attr('x2', width))
      .call((g) => g.selectAll('.tick text')
        .attr('fill', colors.textMuted)
        .attr('font-size', '10px'));

    svg.selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', (bar) => x(bar.label)!)
      .attr('y', height)
      .attr('width', x.bandwidth())
      .attr('height', 0)
      .attr('fill', (bar) => bar.color || colors.primary)
      .attr('rx', 4)
      .attr('opacity', 0.9)
      .style('cursor', 'pointer')
      .on('touchstart mouseenter', function(event, bar) {
        event.preventDefault();
        d3.select(this).attr('opacity', 1);
        const coords = getEventCoords(event);
        showTooltip(tooltip, `
          <div class="font-semibold mb-1">${bar.label}</div>
          <div class="text-sm">${bar.value.toLocaleString('it-CH')} M CHF</div>
        `, coords.x, coords.y);
      })
      .on('touchend mouseleave', function() {
        d3.select(this).attr('opacity', 0.9);
        hideTooltip(tooltip);
      })
      .transition()
      .delay((_bar, i) => i * 50)
      .duration(400)
      .ease(EASE_OUT)
      .attr('y', (bar) => y(bar.value))
      .attr('height', (bar) => height - y(bar.value));

    data.forEach((bar) => {
      svg.append('text')
        .attr('x', x(bar.label)! + x.bandwidth() / 2)
        .attr('y', height + 15)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px')
        .attr('fill', colors.text)
        .text(bar.label.split(' ')[0]);
      
      if (bar.label.split(' ').length > 1) {
        svg.append('text')
          .attr('x', x(bar.label)! + x.bandwidth() / 2)
          .attr('y', height + 27)
          .attr('text-anchor', 'middle')
          .attr('font-size', '10px')
          .attr('fill', colors.text)
          .text(bar.label.split(' ').slice(1).join(' '));
      }
    });
  } else {
    const y = d3.scaleBand()
      .domain(data.map((item) => item.label))
      .range([0, height])
      .padding(0.3);

    const x = d3.scaleLinear()
      .domain([0, d3.max(data, (item) => item.value)! * 1.1])
      .range([0, width]);

    svg.append('g')
      .call(d3.axisLeft(y))
      .call((g) => g.select('.domain').remove())
      .call((g) => g.selectAll('.tick line').remove())
      .call((g) => g.selectAll('.tick text')
        .attr('fill', colors.text)
        .attr('font-size', '12px'));

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickFormat((val) => `${val}`).ticks(5))
      .call((g) => g.select('.domain').attr('stroke', colors.grid))
      .call((g) => g.selectAll('.tick line').remove())
      .call((g) => g.selectAll('.tick text')
        .attr('fill', colors.textMuted)
        .attr('font-size', '11px'));

    svg.selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('y', (bar) => y(bar.label)!)
      .attr('width', 0)
      .attr('height', y.bandwidth())
      .attr('fill', (bar) => bar.color || colors.primary)
      .attr('rx', 4)
      .attr('opacity', 0.9)
      .style('cursor', 'pointer')
      .on('mouseenter touchstart', function(event, bar) {
        event.preventDefault();
        d3.select(this).attr('opacity', 1);
        const coords = getEventCoords(event);
        showTooltip(tooltip, `
          <div class="font-semibold mb-1">${bar.label}</div>
          <div class="text-sm">${bar.value.toLocaleString('it-CH')} CHF</div>
        `, coords.x, coords.y);
      })
      .on('touchend mouseleave', function() {
        d3.select(this).attr('opacity', 0.9);
        hideTooltip(tooltip);
      })
      .transition()
      .delay((_bar, i) => i * 50)
      .duration(400)
      .ease(EASE_OUT)
      .attr('width', (bar) => x(bar.value));
  }
}
