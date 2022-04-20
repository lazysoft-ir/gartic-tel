import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

export default function Draw({ canvas }) {
    const getWindowDimensions = () => {
        const hasWindow = typeof window !== "undefined";
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    };

    const { height, width } = getWindowDimensions();
    // const canvas = useRef();
    const onChange = () => {
        console.log(canvas);
    };
    return (
        <CanvasDraw
            ref={canvas}
            onChange={onChange}
            loadTimeOffset={5}
            lazyRadius={2}
            brushRadius={6}
            brushColor={"#444"}
            catenaryColor={"#0a0302"}
            hideGrid={false}
            canvasWidth={width}
            canvasHeight={height}
            gridSizeX={20}
            gridSizeY={20}
            gridLineWidth={0.5}
            enablePanAndZoom={false}
        />
    );
}
