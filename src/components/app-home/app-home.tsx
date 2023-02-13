import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
        
        <calcite-card>
          <span slot="title">City-owned golf courses</span>
          <span slot="subtitle">Department of Recreation - Municipality of Acme</span>
          <calcite-chip slot="footer-start" value="calcite chip" kind="brand" icon="clock-forward">
              Recent
          </calcite-chip>
          <calcite-chip slot="footer-end" value="calcite chip" icon="walking">
              Recreation
          </calcite-chip>
        </calcite-card>

      
      

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
