import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import Draw from "@/Components/Draw";
import { useForm } from "@inertiajs/inertia-react";

export default function Play(props) {
    const canvas = useRef();
    const form = useForm({
        picture: null,
    });
    const onClear = () => {
        canvas.current.clear();
    };
    const onUndo = () => {
        canvas.current.undo();
    };

    const onSave = (e) => {
        e.preventDefault();
        form.post("/save", { replace: false });
    };

    return (
        <>
            <Draw canvas={canvas} onChange={() => form.setData("picture", canvas.current.getDataURL())} />
            <div className="fixed h-12 top-10 px-8">
                <button className="w-20 h-full border-2" onClick={onClear}>
                    Clear
                </button>
                <button className="w-20 h-full border-2" onClick={onUndo}>
                    undo
                </button>
            </div>
            <div className="fixed h-12 bottom-10 w-1/3 mx-auto inset-x-0">
                <button className="w-full h-full border-2" onClick={onSave}>
                    Save
                </button>
            </div>
        </>
    );
}
