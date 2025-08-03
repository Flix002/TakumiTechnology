'use client'

import { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'

const minute = [
    {
        id:1,
        name:"",
    },
    {
        id: 2,
        name: '10',
    },
    {
        id: 3,
        name: '20',
    },
    {
        id: 4,
        name: '30',
    },
    {
        id: 5,
        name: '40',
    },
    {
        id: 6,
        name: '50',
    },
    {
        id: 7,
        name: '60',
    },
]

export function MinuteSelectDropDown() {
    const [selected, setSelected] = useState(minute[3])

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className='flex w-full space-x-[10px] items-center'>
                <div className="relative">
                    <ListboxButton className="grid w-[80px] cursor-pointer grid-cols-1 rounded-md bg-white py-3 pr-2 pl-3 text-left text-gray-900 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6">
                        <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                            <span className="block truncate">{selected.name}</span>
                        </span>
                        <ChevronUpDownIcon
                            aria-hidden="true"
                            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 h-full sm:size-4"
                        />
                    </ListboxButton>
                    <ListboxOptions
                        transition
                        className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-2 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm transition-all duration-300"
                    >
                        {minute.map((min) => (
                            <ListboxOption
                                key={min.id}
                                value={min}
                                className="group relative cursor-pointer py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-gray-600 data-focus:text-white data-focus:outline-hidden transition-all duration-200"
                            >
                                <div className="flex items-center">
                                    <span className="text-center  truncate font-normal group-data-selected:font-semibold">{min.name}</span>
                                </div>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </div>

        </Listbox>
    )
}
