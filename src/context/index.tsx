import {createContext, ReactNode, useState} from 'react';

type PropsConcludedItemsContext = { children: ReactNode };

type PropsInitialValue = {
    concludedItems: number;
    setConcludedItems: (newState: number) => void;
    isSelect: boolean;
    setIsSelect: (newState: boolean) => void;
}

const initialValue = {
    concludedItems: 0,
    setConcludedItems: () => {},
    isSelect: false,
    setIsSelect: () => {}
}

export const ConcludedItemsContext = createContext<PropsInitialValue>(initialValue);

const ConcludedItemsProvider = ({children}:PropsConcludedItemsContext) => {

    const [concludedItems, setConcludedItems] = useState<number>(0);
    const [isSelect, setIsSelect] = useState<boolean>(false);

    return(
        <ConcludedItemsContext.Provider value={{concludedItems, setConcludedItems, isSelect, setIsSelect}}>
            {children}
        </ConcludedItemsContext.Provider>
    )
    
}

export default ConcludedItemsProvider;