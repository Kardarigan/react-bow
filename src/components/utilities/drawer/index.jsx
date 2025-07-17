import { useState } from "react";
import {
    IntroTab,
    ExtraInfoTab,
    CommentsTab
} from '../..'

const Drawer = ({ product, dir = "rtl" }) => {
    const tabs = [
        { label: "معرفی کتاب", component: <IntroTab content={product.details} /> },
        { label: "اطلاعات تکمیلی", component: <ExtraInfoTab product={product} /> },
        { label: "نظرات", component: <CommentsTab /> },
    ];
    const [activeTab, setActiveTab] = useState(tabs[0]?.label);

    return (
        <div className='w-full mt-5' dir={dir}>
            <div className="border-y-4 border-rose-500 border-opacity-20 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.label}
                        onClick={() => setActiveTab(tab.label)}
                        className={`ml-4 p-4 pb-3 font-medium text-sm ${activeTab === tab.label
                            ? "border-b-4 border-rose-500 text-rose-500"
                            : "text-gray-500"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="py-3 transition-all duration-300 ease-in-out text-right">
                {tabs.find((tab) => tab.label === activeTab)?.component}
            </div>
        </div>
    );
};

export default Drawer;
