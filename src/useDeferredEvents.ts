import { useCallback, useState } from 'react';

import {
  DeferredEvent,
  DeferredEventAddFn,
  DeferredEventDoneFn,
  DeferredEventsResetFn,
  DeferredEventsHook,
  DeferredEventsHookOptions,
} from './types';

export default function useDeferredEvents(
  initialState: DeferredEvent[] = [],
  { onDone, onAdd, onReset }: DeferredEventsHookOptions = {}
): DeferredEventsHook {
  const [events, setEvents] = useState<Set<DeferredEvent>>(
    new Set(initialState)
  );

  const add = useCallback<DeferredEventAddFn>(
    event =>
      setEvents(prevEvents => {
        if (onAdd) {
          onAdd(event);
        }

        const newEvents = new Set(prevEvents);
        newEvents.add(event);
        return newEvents;
      }),
    [onAdd]
  );

  const done = useCallback<DeferredEventDoneFn>(
    (event, args) =>
      setEvents(prevEvents => {
        if (onDone) {
          onDone(event, args);
        }

        const newEvents = new Set(prevEvents);
        newEvents.delete(event);
        return newEvents;
      }),
    [onDone]
  );

  const reset = useCallback<DeferredEventsResetFn>(() => {
    if (onReset) {
      onReset();
    }

    setEvents(new Set([]));
  }, [onReset]);

  return { add, done, reset, hasEvents: events.size > 0 };
}
