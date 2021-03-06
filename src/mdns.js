import Browser from './browser';
import Advertisement from './advertisement';

export default class {

  constructor() {
    this.libraryName = null;
    this.library = this._findLibrary();
  }

  getLibrary() {
    return this.library;
  }

  createAdvertisement(service, port) {
    return new Advertisement(this.library, this.libraryName, service, port);
  }

  createBrowser(serviceType) {
    return new Browser(this.library, this.libraryName, serviceType);
  }

  _findLibrary() {
    try {
      const mdns = require('mdns');
      this.libraryName = 'mdns';
      return mdns;
    } catch (e) {
      // who cares
    }
    try {
      const mdnsjs = require('mdns-js');
      this.libraryName = 'mdnsjs';
      return mdnsjs;
    } catch (e) {
      // who cares
    }
    return false;
  }
}
