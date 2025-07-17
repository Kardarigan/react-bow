import { useState } from "react";

const CommentsTab = () => {
    const [comments, setComments] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setComments([{ text: input, date: new Date() }, ...comments]);
        setInput("");
    };

    return (
        <div className="space-y-4 text-right">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <textarea
                    className="w-full border rounded p-2"
                    placeholder="نظر خود را وارد کنید..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600"
                >
                    ثبت نظر
                </button>
            </form>

            <div className="space-y-2">
                {comments.length === 0 && <p className="text-gray-400">نظری ثبت نشده است.</p>}
                {comments.map((c, i) => (
                    <div key={i} className="p-2 bg-gray-100 rounded shadow-sm">
                        <p className="text-sm">{c.text}</p>
                        <p className="text-xs text-gray-500 mt-1">{c.date.toLocaleString("fa-IR")}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentsTab;
