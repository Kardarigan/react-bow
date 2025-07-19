import { useState } from "react";

const CommentsTab = () => {
    const [comments, setComments] = useState([]);
    const [input, setInput] = useState("");

    const fields = [
        {
            placeholder: 'نام شما',
            type: 'text'
        },
        {
            placeholder: 'ایمیل شما',
            type: 'email'
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setComments([{ text: input, date: new Date() }, ...comments]);
        setInput("");
    };

    return (
        <div className="space-y-4">
            <h2 className="mb-10 title">دیدگاه کاربران</h2>
            <div className="space-y-2 box">
                {comments.length === 0 && <div className="flex-center p-12 text-center">
                    <i className="fa-lihgt fa-comment-smile title-lg"></i>
                    <h6 className="text-slate-600 text-end">هنوز دیدگاهی ثبت نشده<br /><span className="text-gray-400 text-xs">شما اولین باشید</span></h6></div>}
                {comments.map((c, i) => (
                    <div key={i} className="p-2 bg-gray-100 rounded shadow-sm">
                        <p className="text-sm">{c.text}</p>
                        <p className="text-xs text-gray-500 mt-1">{c.date.toLocaleString("fa-IR")}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="flex max-md:flex-col-reverse max-md:p-8 gap-2 border border-slate-200 rounded-3xl overflow-hidden">
                <div className="md:px-10 md:py-16 md:w-[60%]">
                    <h3 className="max-md:hidden">ارسال دیدگاه جدید</h3>
                    <div className="space-y-5 my-10">
                        {fields.map((field, idx) => {
                            return (
                                <input className="field" placeholder={field.placeholder} type={field.type} />
                            )
                        })}
                    </div>
                    <button
                        type="submit"
                        className="button button-rose">
                        ثبت نظر
                    </button>
                </div>
                <textarea
                    className="field md:rounded-none md:focus-within:bg-slate-200"
                    placeholder="نظر خود را وارد کنید..."
                    rows={10}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </form>
        </div>
    );
};

export default CommentsTab;
