const ExtraInfoTab = ({ product }) => {
    const {
        author,
        category,
        publisher,
        isbn,
        cover,
        year,
        pages
    } = product;
    const specs = [
        { label: "نویسنده", value: author },
        { label: "انتشارات", value: publisher },
        { label: "موضوع", value: category },
        { label: "تعداد صفحات", value: pages?.toString() },
        { label: "نوع جلد", value: cover },
        { label: "شابک", value: isbn?.toString() },
        { label: "سال چاپ", value: year?.toString() },
    ];

    return (
        <div className="text-xs p-12 text-gray-700 bg-gray-200 space-y-2 rounded-3xl">
            {specs.map((item, index) => (
                <>
                    <div key={index} className="flex justify-between py-2">
                        <span className="font-semibold ">{item.label}</span>
                        <span>{item.value}</span>
                    </div>
                    <hr className="border-slate-300" />
                </>
            ))}
        </div>
    );
};

export default ExtraInfoTab;
