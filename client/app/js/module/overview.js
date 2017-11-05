/**
 * This module is in charge to handle the rendering of the overall movies
 * section.
 */
export default class OverviewModule {
  constructor(selector) {
    this.section = document.querySelector(selector);
  }

  render() {
    this.section.innerHTML = 'Hello world!';
  }
}
