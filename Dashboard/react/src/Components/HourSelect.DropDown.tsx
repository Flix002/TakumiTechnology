'use client'

import { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'

const hour = [
    {
        id:1,
        name:"",
    },
    {
        id: 2,
        name: '1',
    },
    {
        id: 3,
        name: '2',
    },
    {
        id: 4,
        name: '3',
    },
    {
        id: 5,
        name: '4',
    },
    {
        id: 6,
        name: '5',
    },
    {
        id: 7,
        name: '6',
    },
    {
        id: 8,
        name: '7',
    },
    {
        id: 9,
        name: '8',
    },
    {
        id: 10,
        name: '9',
    },
    {
        id:11,
        name:'10',
    },
    {
        id: 12,
        name: '11',
    },
    {
        id: 13,
        name: '12',
    },
    {
        id: 14,
        name: '13',
    },
    {
        id: 15,
        name: '14',
    },
    {
        id: 16,
        name: '15',
    },
    {
        id: 17,
        name: '16',
    },
    {
        id: 18,
        name: '17',
    },
    {
        id: 19,
        name: '18',
    },
    {
        id: 20,
        name: '19',
    },
    {
        id: 21,
        name: '20',
    },
    {
        id: 22,
        name: '21',
    },
    {
        id: 23,
        name: '22',
    },
    {
        id: 24,
        name: '23',
    },
    {
        id: 25,
        name: '24',
    },
]

export function HourSelectDropDown() {
    const [selected, setSelected] = useState(hour[3])

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className='flex w-full space-x-[5px] h-full items-center'>
                <div className="relative">
                    <ListboxButton className="grid  w-[70px] sm:w-[60px] h-[40px] sm:h-[45px] border border-gray-200 sm:border-none cursor-pointer grid-cols-1 rounded-md bg-white pr-2 pl-3 text-left text-gray-900 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6">
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
                        className="absolute z-10 mt-1 max-h-56 w-[100px] overflow-auto rounded-md bg-white py-2 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm transition-all duration-300"
                    >
                        {hour.map((h) => (
                            <ListboxOption
                                key={h.id}
                                value={h}
                                className="group relative cursor-pointer py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-gray-600 data-focus:text-white data-focus:outline-hidden transition-all duration-200"
                            >
                                <div className="flex items-center">
                                    <span className="text-center truncate font-normal group-data-selected:font-semibold">{h.name}</span>
                                </div>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </div>

        </Listbox>
    )
}
