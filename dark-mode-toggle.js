import { html, LitElement, property, customElement } from 'lit-element';

@customElement('dark-mode-toggle')
class DarkModeToggle extends LitElement {
  @property({ type: Boolean }) darkMode = false;

  toggleDarkMode() {
    this.darkMode =!this.darkMode;
  }

  render() {
    return html`
      <button @click=${this.toggleDarkMode}>
        ${this.darkMode? 'Light' : 'Dark'}
      </button>
    `;
  }
}

export default DarkModeToggle;
