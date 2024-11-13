import { useState, useEffect } from 'react';

export const useModal = () => {

    const [visibleModal, setVisibleModal] = useState(false)
    const [selectedCharacter, setSelectedCharacter] = useState(null);


    const openModal = ({ character }) => {
        setSelectedCharacter(character);
        setVisibleModal(true);
    }

    const closeModal = () => {
        setVisibleModal(false);
        setSelectedCharacter(null)
    }

    useEffect(() => {
        if (visibleModal) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        
        return () => document.body.classList.remove('no-scroll');
    }, [visibleModal]);

    return { visibleModal, selectedCharacter, openModal , closeModal }
}
