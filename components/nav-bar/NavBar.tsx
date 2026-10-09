'use client'

import React from 'react';
import MenuMobile from '#components/modals/MenuMobile';
import { useTranslation } from 'react-i18next';

const NavBar = ({ handleOpendInfoModal }: { handleOpendInfoModal: (isOpenInfo: boolean) => void }) => {
    const { t } = useTranslation();

    const [isOpendPrivacyPolicy, setIsOpendPrivacyPolicy] = React.useState(false);
    const [isOpendOther, setIsOpendOther] = React.useState(false);
    const [isOpendMenuMobile, setIsOpendMenuMobile] = React.useState(false);

    const handleOpendMenuMobile = () => {
        setIsOpendMenuMobile(!isOpendMenuMobile);
    }

    const handleOpendPrivacyPolicy = () => {
        handleOpendInfoModal(true);
    }


    return (
        <div className='w-full min-[769px]:max-w-[360px] max-[768px]:max-w-full overflow-y-auto min-[769px]:h-[100vh] h-[60px] min-[769px]:min-h-auto min-h-[60px] min-[769px]:pt-[28px] px-[20px] pb-5 z-999 min-[769px]:sticky top-0 '>
            <div className='w-full min-[769px]:hidden flex items-center justify-center justify-between gap-2 w-full h-[60px]'>
                <div className='w-[70px]'>
                    <img src="/images/meta/logo-meta.svg" className='w-full' alt="tick" />
                </div>
                <div onClick={handleOpendMenuMobile} className='flex items-center justify-center gap-1 flex-col h-[28px]'>
                    <div className='h-[4px] rounded-[10px] bg-[#344854] w-[28px]'></div>
                    <div className='h-[4px] rounded-[10px] bg-[#344854] w-[28px]'></div>
                    <div className='h-[4px] rounded-[10px] bg-[#344854] w-[28px]'></div>
                </div>
            </div>

            <div className='w-full max-w-[360px] min-[769px]:block hidden'>
                <div className='w-[60px]'>
                    <img src="/images/meta/logo-meta.svg" className='w-full' alt="tick" />
                </div>
                <div className='w-full mt-2 mb-4'>
                    <h1 className='font-bold text-[24px]'>{t('nav_bar.title')}</h1>
                </div>
                <div className='text-[16px] max-w-full w-full'>

                    <div className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[12px] transition-all duration-200 bg-[#354855] text-white'>
                        <div className='flex items-center justify-center justify-start gap-4'>
                            <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]'>
                                <img src="/images/icons/ic_home.svg" className='w-full h-full text-white white' alt="home" />
                            </div>
                            <span className='text-white font-[500] text-[15px]'>{t('nav_bar.menu_1.title')}</span>
                        </div>
                    </div>

                    <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[12px] hover:bg-[#E3E8EF] transition-all duration-200'>
                        <div className='flex items-center justify-center justify-start gap-4'>
                            <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]'>
                                <img src="/images/icons/ic_search.svg" className='w-full h-full' alt="search" />
                            </div>
                            <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_2.title')}</span>
                        </div>
                    </div>

                    <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                        <div className='flex items-center justify-center justify-start gap-4'>
                            <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]'>
                                <img src="/images/icons/ic_setting.svg" className='w-full h-full' alt="other" />
                            </div>
                            <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_3.title')}</span>
                        </div>
                    </div>

                    <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                        <div className='flex items-center justify-center justify-start gap-4'>
                            <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]'>
                                <img src="/images/icons/ic_topics.svg" className='w-full h-full' alt="other" />
                            </div>
                            <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_4.title')}</span>
                        </div>
                    </div>

                    <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                        <div className='flex items-center justify-center justify-start gap-4'>
                            <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]'>
                                <img src="/images/icons/ic_more.svg" className='w-full h-full' alt="other" />
                            </div>
                            <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_5.title')}</span>
                        </div>
                    </div>

                    <div>
                        <div onClick={() => setIsOpendPrivacyPolicy(!isOpendPrivacyPolicy)} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                            <div className='flex items-center justify-center justify-start gap-4'>
                                <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]'>
                                    <img src="/images/icons/ic_locked.svg" className='w-full h-full' alt="locked" />
                                </div>
                                <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_6.title')}</span>
                            </div>
                            <div className={`w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] transition-all duration-200 ${isOpendPrivacyPolicy ? 'rotate-180' : ''}`}>
                                <img src="/images/icons/ic_arrow.svg" className='w-full h-full' alt="arrow" />
                            </div>
                        </div>

                        <div className={`w-[100%] ${isOpendPrivacyPolicy ? 'block' : 'hidden'}`}>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-center justify-start gap-4 pl-[24px] ml-3'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_6.sub_title.sub_1')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'></div>
                                </div>
                            </div>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-center justify-start gap-4 pl-[24px] ml-3'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_6.sub_title.sub_2')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'></div>
                                </div>
                            </div>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-center justify-start gap-4 pl-[24px] ml-3'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_6.sub_title.sub_3')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'></div>
                                </div>
                            </div>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-center justify-start gap-4 pl-[24px] ml-3'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_6.sub_title.sub_4')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'></div>
                                </div>
                            </div>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-center justify-start gap-4 pl-[24px] ml-3'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_6.sub_title.sub_5')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'></div>
                                </div>
                            </div>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-center justify-start gap-4 pl-[24px] ml-3'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_6.sub_title.sub_6')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'></div>
                                </div>
                            </div>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-center justify-start gap-4 pl-[24px] ml-3'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_6.sub_title.sub_7')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'></div>
                                </div>
                            </div>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-center justify-start gap-4 pl-[24px] ml-3'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_6.sub_title.sub_8')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'></div>
                                </div>
                            </div>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-center justify-start gap-4 pl-[24px] ml-3'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_6.sub_title.sub_9')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'></div>
                                </div>
                            </div>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-center justify-start gap-4 pl-[24px] ml-3'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_6.sub_title.sub_10')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'></div>
                                </div>
                            </div>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-center justify-start gap-4 pl-[24px] ml-3'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_6.sub_title.sub_11')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'></div>
                                </div>
                            </div>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-center justify-start gap-4 pl-[24px] ml-3'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_6.sub_title.sub_12')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'></div>
                                </div>
                            </div>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-center justify-start gap-4 pl-[24px] ml-3'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_6.sub_title.sub_13')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div onClick={() => setIsOpendOther(!isOpendOther)} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                            <div className='flex items-center justify-center justify-start gap-4'>
                                <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]'>
                                    <img src="/images/icons/ic_other.svg" className='w-full h-full' alt="other" />
                                </div>
                                <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_7.title')}</span>
                            </div>
                            <div className={`w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] transition-all duration-200 ${isOpendOther ? 'rotate-180' : ''}`}>
                                <img src="/images/icons/ic_arrow.svg" className='w-full h-full' alt="arrow" />
                            </div>
                        </div>

                        <div className={`w-[100%] ${isOpendOther ? 'block' : 'hidden'}`}>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-between gap-3 pl-[24px] ml-3 w-full'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_7.sub_title.sub_1')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'></div>
                                </div>
                            </div>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-between gap-3 pl-[24px] ml-3 w-full'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_7.sub_title.sub_2')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'>
                                        <img src="/images/icons/ic_opend.svg" className='w-full h-full' alt="opend" />
                                    </div>
                                </div>
                            </div>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-between gap-3 pl-[24px] ml-3 w-full'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_7.sub_title.sub_3')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'></div>
                                </div>
                            </div>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-between gap-3 pl-[24px] ml-3 w-full'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_7.sub_title.sub_4')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'></div>
                                </div>
                            </div>
                            <div onClick={handleOpendPrivacyPolicy} className='cursor-pointer flex items-center justify-between gap-0 px-4 py-3 rounded-[16px] hover:bg-[#E3E8EF] transition-all duration-200'>
                                <div className='flex items-center justify-between gap-3 pl-[24px] ml-3 w-full'>
                                    <span className='text-black font-[500] text-[15px]'>{t('nav_bar.menu_7.sub_title.sub_5')}</span>
                                    <div className='w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]'>
                                        <img src="/images/icons/ic_opend.svg" className='w-full h-full' alt="opend" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MenuMobile isOpend={isOpendMenuMobile} onToggleAdvanced={handleOpendMenuMobile} />
        </div>
    )
}

export default NavBar
