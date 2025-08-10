'use client'

import { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'

const reason = [
    {
        id:1,
        name:"",
    },
    {
        id: 2,
        name: 'On Site Circumstances',
    },
    {
        id: 3,
        name: 'Personal Issue',
    },
    {
        id: 4,
        name: 'According To Cortract (Irregular)',
    },
    {
        id: 5,
        name: 'Shortened Work Hour',
    },
    {
        id: 6,
        name: 'Train Delay',
    },
    {
        id: 7,
        name: 'Other (Pls Input In Datail Field)',
    },
]

export function ReasonSelect() {
    const [selected, setSelected] = useState(reason[3])

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className='flex w-full space-x-[10px] items-center'>
                <div className="relative w-full h-auto">
                    <ListboxButton className="grid sm:w-[130px] bg-[#6e6e6e61] w-full border border-gray-200 sm:border-none h-[45px] cursor-pointer grid-cols-1 rounded-md pr-2 pl-3 text-left text-gray-900 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6">
                        <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                            <span className="block truncate text-[13px]">{selected.name}</span>
                        </span>
                        <ChevronUpDownIcon
                            aria-hidden="true"
                            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 h-full sm:size-4"
                        />
                    </ListboxButton>
                    <ListboxOptions
                        transition
                        className="absolute z-10 mt-1 max-h-56 w-full sm:w-[290px] overflow-auto rounded-md bg-white py-2 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm transition-all duration-300"
                    >
                        {reason.map((res) => (
                            <ListboxOption
                                key={res.id}
                                value={res}
                                className="group relative cursor-pointer py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-gray-600 data-focus:text-white data-focus:outline-hidden transition-all duration-200"
                            >
                                <div className="flex items-center">
                                    <span className="ml-3 block truncate font-normal group-data-selected:font-semibold text-[13px]">{res.name}</span>
                                </div>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </div>
        </Listbox>
    )
}
