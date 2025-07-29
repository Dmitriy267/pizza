import { useEffect, type RefObject } from 'react';

type Event = MouseEvent | TouchEvent;
export const useOnclickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (e: Event) => void
) => {
    useEffect(() => {
        const listener = (e: Event) => {
            const elem = ref?.current;
            if (!elem || elem.contains((e?.target as Node) || null)) {
                return;
            }
            handler(e);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
};
