import { DeferredEventsHook, BaseContextState, DataLayer } from './types';

export const VIRTUAL_PAGE_VIEW = 'virtual page view';
export const PAGE_LOADED = 'page loaded';
export const NO_INFO = 'no information';

export const baseDataLayer: DataLayer = {
  event: PAGE_LOADED,
  pageName: NO_INFO,
  pageType: NO_INFO,
  pageLanguage: NO_INFO,
  visitorStatus: NO_INFO,
  senderCountry: NO_INFO,
  senderCountryIso: NO_INFO,
};

const deferredEventsHookApi: DeferredEventsHook = {
  add: () => {},
  done: () => {},
  reset: () => {},
  hasEvents: false,
};

export const baseContextState: BaseContextState = {
  dataLayer: baseDataLayer,
  updateDataLayer: () => {},
  deferredEvents: deferredEventsHookApi,
  isKeepPageAsVirtual: false,
  setKeepPageAsVirtual: () => {},
};
