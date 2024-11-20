import { useState } from 'react';

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

    return { visibleModal, selectedCharacter, openModal , closeModal }
}
