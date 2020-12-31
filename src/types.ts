declare global {
  interface Window {
    dataLayer: any[];
  }
}

export type GenericDataLayer = {
  [x: string]: any;
};

export type DataLayerPostLogin = {
  age?: string;
  gender?: string;
  lastTransferDate?: string;
  numTransfers?: string;
};

export type DataLayerWithinTransferProcess = {
  destinationCountry?: string;
  destinationCountryIso?: string;
  countryCorridorIso?: string;
  serviceType?: string;
};

export type DataLayer = GenericDataLayer &
  DataLayerPostLogin &
  DataLayerWithinTransferProcess & {
    event: string;
    pageName: string;
    pageType: string;
    pageLanguage: string;
    visitorStatus: string;
    senderCountry: string;
    senderCountryIso: string;
  };

export type DataLayerUpdateFn = (newDataLayer?: Partial<DataLayer>) => void;

export type DeferredEvent = number | string;

export type DeferredEventDoneFn = <T extends Partial<DataLayer>>(
  event: DeferredEvent,
  args?: T
) => void;

export type DeferredEventAddFn = (event: DeferredEvent) => void;

export type DeferredEventsResetFn = () => void;

export type DeferredEventsHook = {
  add: DeferredEventAddFn;
  done: DeferredEventDoneFn;
  reset: DeferredEventsResetFn;
  hasEvents: boolean;
};

export type DeferredEventsHookOptions = {
  onDone?: DeferredEventDoneFn;
  onAdd?: DeferredEventAddFn;
  onReset?: DeferredEventsResetFn;
};

export type BaseContextState = {
  dataLayer: DataLayer;
  updateDataLayer: DataLayerUpdateFn;
  deferredEvents: DeferredEventsHook;
  isKeepPageAsVirtual: boolean;
  setKeepPageAsVirtual: (value: boolean) => void;
};

export type PageContextState = Omit<
  BaseContextState,
  'isKeepPageAsVirtual' | 'setKeepPageAsVirtual'
> & {};

export type BaseProviderProps = {
  initialDataLayerState?: DataLayer;
  initialDeferredEvents?: DeferredEvent[];
};

export type WithPageTrackingOptions = Pick<
  DataLayer,
  'pageName' | 'pageType'
> & {
  deferredEvents?: DeferredEvent[];
  isVirtualPage?: boolean;
  onTrack?: (dataLayer: DataLayer) => void;
};

export type PageProviderProps = BaseProviderProps &
  Pick<WithPageTrackingOptions, 'isVirtualPage' | 'onTrack'> & {
    baseContext: BaseContextState;
  };
