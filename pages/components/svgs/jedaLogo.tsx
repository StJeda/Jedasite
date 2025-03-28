import Directions from "@/models/enums/directions";
import { FC } from "react";

interface IProps {
    focusedCard: Directions | null;
}

const JedaLogo: FC<IProps> = ({focusedCard}) => {
    return (
        <svg width="80vh" height="80vw" viewBox="0 0 817 807" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dd_1226_3352)">
                <path fill={isFocused(Directions.Design) ? "#6C3FD5" : "#282828"} fill-rule="evenodd" clip-rule="evenodd" d="M410.5 745.3C602.032 745.3 757.3 590.032 757.3 398.5C757.3 206.968 602.032 51.7 410.5 51.7C218.968 51.7 63.7 206.968 63.7 398.5C63.7 590.032 218.968 745.3 410.5 745.3ZM410.5 781C621.749 781 793 609.749 793 398.5C793 187.251 621.749 16 410.5 16C199.251 16 28 187.251 28 398.5C28 609.749 199.251 781 410.5 781Z" />
                <path fill={isFocused(Directions.Frontend) ? "#09B65A" : "#282828"} d="M340.516 149.766L340.517 321.798C340.517 325.11 337.06 327.287 334.073 325.856L175.955 250.093C172.734 248.549 172.508 244.048 175.559 242.191L333.676 145.923C336.674 144.097 340.516 146.255 340.516 149.766Z" stroke="#282828" />
                <path fill={isFocused(Directions.Frontend) ? "#09B65A" : "#282828"} d="M480.346 149.766L480.344 321.798C480.344 325.11 483.802 327.287 486.789 325.856L644.907 250.093C648.128 248.549 648.353 244.048 645.302 242.191L487.186 145.923C484.187 144.097 480.346 146.255 480.346 149.766Z" stroke="#282828" />
                <path fill={isFocused(Directions.Frontend) ? "#09B65A" : "#282828"} d="M169.886 461.359L339.572 572.805C340.839 573.637 341.602 575.051 341.602 576.566V630.645C341.602 634.261 337.553 636.4 334.566 634.362L164.88 518.602C163.651 517.764 162.916 516.372 162.916 514.885V465.12C162.916 461.54 166.894 459.394 169.886 461.359Z" stroke="#282828" />
                <path fill={isFocused(Directions.Frontend) ? "#09B65A" : "#282828"} d="M651.114 461.359L481.428 572.805C480.161 573.637 479.398 575.051 479.398 576.566V630.645C479.398 634.261 483.447 636.4 486.434 634.362L656.12 518.602C657.349 517.764 658.084 516.372 658.084 514.885V465.12C658.084 461.54 654.106 459.394 651.114 461.359Z" stroke="#282828" />
                <path fill={isFocused(Directions.Backend) ? "#1574E1" : "#282828"} d="M437.04 128.315V667.177C437.04 669.536 435.931 671.757 434.045 673.174L415.006 687.474C412.337 689.478 408.666 689.478 405.998 687.474L386.959 673.174C385.073 671.757 383.963 669.536 383.963 667.177V128.315C383.963 126.011 385.022 123.835 386.836 122.413L405.874 107.487C408.591 105.357 412.412 105.357 415.129 107.487L434.168 122.413C435.981 123.835 437.04 126.011 437.04 128.315Z" stroke="#282828" />
                <path fill={isFocused(Directions.Frontend) ? "#09B65A" : "#282828"} d="M169.359 313.548L339.045 394.796C340.607 395.544 341.602 397.123 341.602 398.855V502.527C341.602 506.04 337.757 508.198 334.758 506.368L165.072 402.831C163.733 402.014 162.916 400.559 162.916 398.99V317.607C162.916 314.295 166.372 312.118 169.359 313.548Z" stroke="#282828" />
                <path fill={isFocused(Directions.Frontend) ? "#09B65A" : "#282828"} d="M651.168 313.548L481.482 394.796C479.92 395.544 478.926 397.123 478.926 398.855V502.527C478.926 506.04 482.771 508.198 485.769 506.368L655.455 402.831C656.794 402.014 657.611 400.559 657.611 398.99V317.607C657.611 314.295 654.155 312.118 651.168 313.548Z" stroke="#282828" />
            </g>
            <defs>
                <filter id="filter0_dd_1226_3352" x="0" y="0" width="817" height="807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="4" dy="4" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1226_3352" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-8" dy="6" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_1226_3352" result="effect2_dropShadow_1226_3352" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1226_3352" result="shape" />
                </filter>
            </defs>
        </svg>
    );

    function isFocused(targetDirection: Directions): boolean {
        return focusedCard === targetDirection ? true : false;
    }
}

export default JedaLogo;