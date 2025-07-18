const IntroTab = ({ content }) => {
    return (
        <div className="space-y-8 text-right leading-relaxed text-gray-700">
            {content.map((item, index) => {
                if (typeof item === "object" && item.type === "heading") {
                    return (
                        <h2 key={index} className="text-xl font-bold text-slate-700">
                            {item.text}
                        </h2>
                    );
                }

                if (Array.isArray(item)) {
                    return (
                        <ul key={index} className="list-none space-y-2 text-slate-500">
                            {item.map((li, i) => (
                                <li key={i}><i className="fa-solid fa-check text-rose-500 me-4"></i> {li}</li>
                            ))}
                        </ul>
                    );
                }

                return <p key={index} className="text-slate-500">{item}</p>;
            })}
        </div>
    );
};

export default IntroTab;