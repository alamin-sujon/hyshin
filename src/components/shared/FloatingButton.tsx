"use client";
import { useState } from "react";
import { FaWhatsapp, FaTimes, FaCommentAlt } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image";

export default function FloatingChatFAB() {
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="fixed bottom-7 right-7 z-50 flex flex-col items-end space-y-3">
            {/* Conditional Buttons */}
            {open ? (
                <>

                    <Tooltip>

                        <div>
                            {/* Tooltip wrapper */}
                            <div className="relative inline-block">
                                <TooltipTrigger asChild>

                                    <button
                                        onClick={() => setIsOpen(true)}
                                        className="bg-green-500 p-[14px] rounded-full cursor-pointer shadow-2xl transition hover:scale-110"
                                        title="Add me on WeChat"
                                    >
                                        <IoLogoWechat className="text-white" size={25} />
                                    </button>
                                </TooltipTrigger>
                            </div>

                            {/* Modal */}
                            {isOpen && (
                                <div
                                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div
                                        className="bg-white rounded-lg p-6 max-w-sm w-full text-center relative"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h2 className="text-xl font-semibold mb-4">Scan to Add on WeChat</h2>
                                        <Image
                                            src="/wechat-qr.png"
                                            alt="WeChat QR Code"
                                            fill
                                            className="mx-auto mb-4"
                                        />
                                        <p className="text-gray-700">WeChat ID: <strong>your_wechat_id</strong></p>
                                        <button
                                            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <TooltipContent side="left" >
                            <p>WeChat</p>
                        </TooltipContent>
                    </Tooltip>

                    {/* WhatsApp Button */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                href="https://wa.me/8801671108210"
                                className="bg-green-500 p-3.5 rounded-full shadow-lg transition hover:scale-110"
                                title="WhatsApp"
                            >
                                <FaWhatsapp className="text-white" size={26} />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent side="left" >
                            <p>WhatsApp</p>
                        </TooltipContent>
                    </Tooltip>



                    {/* Hide Label and Close Button */}
                    <div className="flex items-center">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="bg-purple-500 cursor-pointer p-4 rounded-full shadow-lg transition hover:scale-110"
                                    title="Close"
                                >
                                    <FaTimes className="text-white" size={20} />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="left" >
                                <p>Hide</p>
                            </TooltipContent>
                        </Tooltip>

                    </div>
                </>
            ) : (
                // Initial Chat Icon
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() => setOpen(true)}
                            className="bg-orange-600  cursor-pointer p-4 rounded-full shadow-lg transition hover:scale-110"
                            title="Chat"
                        >
                            <FaCommentAlt className="text-white" size={20} />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="left" >
                        <p>We&apos;re Online! <br />
                            How may I help you today?</p>
                    </TooltipContent>
                </Tooltip>

            )}
        </div>
    );
}
