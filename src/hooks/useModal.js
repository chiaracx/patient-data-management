import { useState } from "react";

export function useModal(initialStat=false) {
    const [isOpen, setIsOpen] = useState(initialStat);
    
    const openModal = () => {
        setIsOpen(true);
    };
    
    const closeModal = () => {
        setIsOpen(false);
    };
    
    return { isOpen, openModal, closeModal };
}
