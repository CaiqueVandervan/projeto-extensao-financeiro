"use client"

import { useRouter } from "next/navigation"

interface BreadCrumbsItem {
    label: string
    url: string
}

interface BreadCrumbsArray {
    items: BreadCrumbsItem[]
}

export default function BreadCrumbs({ items }: BreadCrumbsArray) {

    const router = useRouter()

    return (
        <div className="absolute left-16 flex gap-3 text-[16px]">
            {items.map((item, index) => {

                const lastItem = index === items.length - 1

                return (
                    <div key={item.label} className="flex items-center">
                        {lastItem ? (
                            <span>{item.label}</span>
                        ) : (
                            <div className="flex items-center gap-3">
                                <button className="hover:scale-103 duration-100 cursor-pointer"
                                    onClick={() => router.push(item.url)}>
                                    {item.label}
                                </button>
                                <span className="text-[32px] pb-1">{">"}</span>
                            </div>

                        )}
                    </div>
                )
            })}
        </div>
    )
}