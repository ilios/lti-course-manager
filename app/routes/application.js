import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { loadPolyfills } from 'ilios-common/utils/load-polyfills';

export default class ApplicationRoute extends Route {
  @service intl;
  @service moment;
  @service currentUser;
  @service session;

  async beforeModel() {
    await this.session.setup();
    await loadPolyfills();
    const locale = this.intl.get('primaryLocale');
    this.moment.setLocale(locale);
    window.document.querySelector('html').setAttribute('lang', locale);
  }

  /**
   * Preload the user model and the users roles
   * This makes the initial page rendering (especially the navigation) much smoother
   */
  async afterModel() {
    const currentUser = this.currentUser;
    const user = await currentUser.getModel();
    if (user) {
      await user.roles;
    }
  }
}
