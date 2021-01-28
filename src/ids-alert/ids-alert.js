import {
  IdsElement,
  customElement,
  scss
} from '../ids-base/ids-element';
import { props } from '../ids-base/ids-constants';
// @ts-ignore
import IdsIcon from '../ids-icon/ids-icon';
// @ts-ignore
import styles from './ids-alert.scss';

/**
 * IDS Alert Component
 */
@customElement('ids-alert')
@scss(styles)
class IdsAlert extends IdsElement {
  constructor() {
    super();
  }

  /**
   * Return the properties we handle as getters/setters
   * @returns {Array} The propertires in an array
   */
  static get properties() {
    return [props.ICON];
  }

  /**
   * Create the Template for the contents
   *
   * @returns {string} The template
   */
  template() {
    return `<ids-icon size="normal"></ids-icon>`;
  }

  /**
   * Return the icon of the alert.
   * @returns {string} the path data
   */
  get icon() { return this.getAttribute(props.ICON); }

  /**
   * Set the icon
   * @param {string} value The Icon Type [success, info, error, alert]
   */
  set icon(value) {
    if (value) {
      this.setAttribute(props.ICON, value);
      this.shadowRoot.querySelector('ids-icon').setAttribute(props.ICON, value);
      setTimeout(() => {
        this.shadowRoot.querySelector('ids-icon').shadowRoot.querySelector('svg').classList.add(`icon-${value}`);
      }, 100);
    } else {
      this.removeAttribute(props.ICON);
    }
  }
}

export default IdsAlert;
