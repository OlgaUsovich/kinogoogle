import { ReactNode } from "react";
import ReactDOM from "react-dom";

export enum PortalTarget {
    ROOT = 'root',
    MODAL = 'modal',
    FILTERS = 'filters',
}

interface PortalProps {
    target: PortalTarget;
    children: ReactNode;
}

export const Portal = ({target, children}: PortalProps) => {
    const root = document.getElementById(target);

    return root ? ReactDOM.createPortal(children, root) : null;
}