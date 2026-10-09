import React from 'react';
import Modal from './Modal';
import { useTranslation } from 'react-i18next';

interface AdvancedModalProps {
    isOpend: boolean;
    onToggleAdvanced: (value: boolean) => void;
}

const AdvancedModal: React.FC<AdvancedModalProps> = ({ isOpend, onToggleAdvanced }) => {

    const { t } = useTranslation();
    const [isOpen, setIsOpen] = React.useState(isOpend);

    React.useEffect(() => {
        setIsOpen(isOpend);
    }, [isOpend]);

    const handleClose = () => {
        setIsOpen(false);
        onToggleAdvanced(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            title=""
            onClose={handleClose}
        >

            <div className="w-full mb-10">
                <p className='font-[600]'>{t('modal.advanced.title')}</p>
                <p className='text-[#1c2b33] font-[300]'>{t('modal.advanced.sub_title')}</p>

                <div className='rounded-[12px] bg-white px-4 py-3 cursor-pointer flex items-center justify-between gap-0 my-4 hover:bg-[#E3E8EF] transition-all duration-200'>
                    <div className='flex items-center justify-center justify-start gap-3'>
                        <div className='w-[45px] h-[45px] min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px]'>
                            <img src="/images/icons/ic_star.png" className='w-full h-full' alt="locked" />
                        </div>
                        <div>
                            <p className='font-[300] text-[15px] text-[#465a69]'>{t('modal.advanced.content.title')}</p>
                        </div>
                    </div>
                    <div className={`w-[17px] h-[17px] min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px] transition-all duration-200`}>
                        <img src="/images/icons/ic_arrow.svg" className='w-full h-full rotate-[-90deg]' alt="arrow" />
                    </div>
                </div>

                <p className='text-[#1c2b33] font-[300] mb-4 text-[15px]'>{t('modal.advanced.content.sub_1')}</p>
                <p className='text-[#1c2b33] font-[300] mb-4 text-[15px]'>{t('modal.advanced.content.sub_2')}</p>
                <p className='text-[#1c2b33] font-[300] mb-4 text-[15px]'>{t('modal.advanced.content.sub_3')}</p>
            </div>

            <div className='w-full mb-10'>
                <p className='font-[600] mb-4'>{t('modal.advanced.full_policy.title')}</p>

                <div className='hover:bg-[#E3E8EF] transition-all duration-200 rounded-[12px] cursor-pointer bg-white px-4 py-3 cursor-pointer flex items-center justify-between gap-0'>
                    <div className='flex items-center justify-center justify-start gap-3'>
                        <div>
                            <p className='font-[300] text-[15px] text-[#465a69]'>{t('modal.advanced.full_policy.sub')}</p>
                        </div>
                    </div>
                    <div className={`w-[17px] h-[17px] min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px] transition-all duration-200`}>
                        <img src="/images/icons/ic_arrow.svg" className='w-full h-full rotate-[-90deg]' alt="arrow" />
                    </div>
                </div>
            </div>

            <div className='w-full mb-10'>
                <p className='font-[600] mb-4'>{t('modal.advanced.what_info_collect.title')}</p>
                <p className='text-[#1c2b33] font-[300] mb-4 text-[15px]'>{t('modal.advanced.what_info_collect.description')}</p>
            </div>

            <div className='w-full mb-10'>
                <p className='font-[600] mb-4'>{t('modal.advanced.the_flowing.title')}</p>

                <div className='hover:bg-[#E3E8EF] transition-all duration-200 rounded-tl-[12px] rounded-tr-[12px] border-b border-[#E3E8EF] cursor-pointer bg-white px-4 py-3 cursor-pointer flex items-center justify-between gap-0'>
                    <div className='flex items-center justify-center justify-start gap-3'>
                        <div>
                            <p className='font-[300] text-[15px] text-[#465a69]'>{t('modal.advanced.the_flowing.sub_1')}</p>
                        </div>
                    </div>
                    <div className={`w-[17px] h-[17px] min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px] transition-all duration-200`}>
                        <img src="/images/icons/ic_arrow.svg" className='w-full h-full rotate-[-90deg]' alt="arrow" />
                    </div>
                </div>
                <div className='hover:bg-[#E3E8EF] transition-all duration-200 border-b border-[#E3E8EF] cursor-pointer bg-white px-4 py-3 cursor-pointer flex items-center justify-between gap-0'>
                    <div className='flex items-center justify-center justify-start gap-3'>
                        <div>
                            <p className='font-[300] text-[15px] text-[#465a69]'>{t('modal.advanced.the_flowing.sub_2')}</p>
                        </div>
                    </div>
                    <div className={`w-[17px] h-[17px] min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px] transition-all duration-200`}>
                        <img src="/images/icons/ic_arrow.svg" className='w-full h-full rotate-[-90deg]' alt="arrow" />
                    </div>
                </div>
                <div className='hover:bg-[#E3E8EF] transition-all duration-200 border-b border-[#E3E8EF] cursor-pointer bg-white px-4 py-3 cursor-pointer flex items-center justify-between gap-0'>
                    <div className='flex items-center justify-center justify-start gap-3'>
                        <div>
                            <p className='font-[300] text-[15px] text-[#465a69]'>{t('modal.advanced.the_flowing.sub_3')}</p>
                        </div>
                    </div>
                    <div className={`w-[17px] h-[17px] min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px] transition-all duration-200`}>
                        <img src="/images/icons/ic_arrow.svg" className='w-full h-full rotate-[-90deg]' alt="arrow" />
                    </div>
                </div>
                <div className='hover:bg-[#E3E8EF] transition-all duration-200 rounded-bl-[12px] rounded-br-[12px] bg-white px-4 py-3 cursor-pointer flex items-center justify-between gap-0 mb-4'>
                    <div className='flex items-center justify-center justify-start gap-3'>
                        <div>
                            <p className='font-[300] text-[15px] text-[#465a69]'>{t('modal.advanced.the_flowing.sub_4')}</p>
                        </div>
                    </div>
                    <div className={`w-[17px] h-[17px] min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px] transition-all duration-200`}>
                        <img src="/images/icons/ic_arrow.svg" className='w-full h-full rotate-[-90deg]' alt="arrow" />
                    </div>
                </div>
            </div>

            <div className='w-full mb-10'>
                <p className='font-[600] mb-4'>{t('modal.advanced.what_happens.title')}</p>
                <p className='text-[#1c2b33] font-[300] mb-4 text-[15px]'>{t('modal.advanced.what_happens.sub')}</p>
            </div>

            <div className='w-full mb-10'>
                <p className='font-[600] mb-4'>{t('modal.advanced.what_if.title')}</p>
                <p className='text-[#1c2b33] font-[300] mb-4 text-[15px]'>{t('modal.advanced.what_if.sub')}</p>
            </div>

            <div className="w-full mb-10">
                <p className='font-[600]'>{t('modal.advanced.data_control.title')}</p>

                <div className='rounded-[12px] bg-white px-4 py-3 cursor-pointer flex items-center justify-between gap-0 my-4 hover:bg-[#E3E8EF] transition-all duration-200'>
                    <div className='flex items-center justify-center justify-start gap-3'>
                        <div className='w-[45px] h-[45px] min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px]'>
                            <img src="/images/icons/ic_docs_women.png" className='w-full h-full' alt="locked" />
                        </div>
                        <div>
                            <p className='font-[500] text-[15px]'>{t('modal.advanced.data_control.sub_title')}</p>
                            <p className='font-[300] text-[15px] text-[#465a69]'>{t('modal.advanced.data_control.note')}</p>
                        </div>
                    </div>
                    <div className={`w-[17px] h-[17px] min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px] transition-all duration-200`}>
                        <img src="/images/icons/ic_arrow.svg" className='w-full h-full rotate-[-90deg]' alt="arrow" />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AdvancedModal;
