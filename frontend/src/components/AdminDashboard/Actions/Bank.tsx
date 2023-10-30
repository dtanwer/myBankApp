import { useEffect } from 'react';
import { deleteError  as deleteErrorAddress, setAddress} from '../../../features/address/address.slice';
import { deleteError as deleteErrorBank, setBank } from '../../../features/bank/bank.slice';
import { AddBank } from '../../Forms/AddBank';
import Notification from '../../../app/Notification';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { AddAddress } from '../../Forms/AddAddress';
type AddBankType={
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
export const Bank = ({setOpen}:AddBankType) => {
    const notification = Notification()
    const { address, message :addressMessage, type:addressType } = useAppSelector(state => state.address)
    const { message:bankMessage, type:bankType } = useAppSelector(state => state.bank)
    const dispatch = useAppDispatch()
    useEffect(() => {
        const message = addressMessage || bankMessage
        const type = addressType || bankType

        if (message && type) {
            notification(message, type)
        }
        setTimeout(() => {
            dispatch(deleteErrorBank())
            dispatch(deleteErrorAddress())
        }, 1000);

        if(bankType === 'success'){
            dispatch(setAddress(null))
            dispatch(setBank(null))
            setOpen(false)     
        }
    }, [addressMessage, bankMessage, addressType, bankType])
    return (
        <>
            {address ?
               <AddBank/> :
                <AddAddress />
            }
        </>
    )
}
