'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

const months = [
    {
        id: 1,
        name: '2025/01',
    },
    {
        id: 2,
        name: '2025/02',
    },
    {
        id: 3,
        name: '2025/03',
    },
    {
        id: 4,
        name: '2025/04',
    },
    {
        id: 5,
        name: '2025/05',
    },
    {
        id: 6,
        name: '2025/06',
    },
    {
        id: 7,
        name: '2025/07',
    },
    {
        id: 8,
        name: '2025/08',
    },
    {
        id: 9,
        name: '2025/09',
    },
    {
        id: 10,
        name: '2025/10',
    },
    {
        id: 11,
        name: '2025/11',
    },
    {
        id: 12,
        name: '2025/12',
    },
]

export function MonthSelectDropDown() {
    const [selected, setSelected] = useState(months[3])

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className='flex space-x-[10px] items-center'>
                <Label className="inline text-[20px] font-medium text-gray-500">Month</Label>
                <div className="relative mt-2">
                    <ListboxButton className="grid w-[160px] cursor-pointer grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                        <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                            <span className="block truncate">{selected.name}</span>
                        </span>
                        <ChevronUpDownIcon
                            aria-hidden="true"
                            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                    </ListboxButton>

                    <ListboxOptions
                        transition
                        className="absolute z-10 w-full mt-1 max-h-56 overflow-auto rounded-md bg-[#ffffff7d] py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm backdrop-blur-[10px]"
                    >
                        {months.map((month) => (
                            <ListboxOption
                                key={month.id}
                                value={month}
                                className="group relative cursor-pointer py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                            >
                                <div className="flex items-center">
                                    <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{month.name}</span>
                                </div>

                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                                    <CheckIcon aria-hidden="true" className="size-5" />
                                </span>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </div>

        </Listbox>
    )
}
