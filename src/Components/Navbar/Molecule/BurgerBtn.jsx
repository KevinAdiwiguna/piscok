import React from "react";

export const BurgerBtn = (props) => {
        const {setOpen, open} = props
        return (
                <div onClick={(() => setOpen(!open))}>
                        <svg
                                width="30px"
                                height="30px"
                                viewBox="0 0 12 12"
                                enableBackground="new 0 0 12 12"
                                version="1.1"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                <g>
                                        <rect fill="#000" height="1" width="11" x="0.5" y="5.5" />
                                        <rect fill="#000" height="1" width="11" x="0.5" y="2.5" />
                                        <rect fill="#000" height="1" width="11" x="0.5" y="8.5" />
                                </g>
                        </svg>
                </div>
        );
};
