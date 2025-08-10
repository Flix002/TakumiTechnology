'use client'

import { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'

const name = [
    {
        id:1,
        name:"",
    },
    {
        id: 2,
        name: 'Attend',
    },
    {
        id: 3,
        name: 'Padi Leave',
    },
    {
        id: 4,
        name: 'Half Day Leave',
    },
    {
        id: 5,
        name: 'Absent',
    },
    {
        id: 6,
        name: 'Customer Designated Leave',
    },
    {
        id: 7,
        name: 'Without Pay Leave',
    },
    {
        id: 8,
        name: 'Leave Due To Aceident',
    },
]

export function AttendanceStatusSelect() {
    const [selected, setSelected] = useState(name[3])

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className='flex w-full space-x-[10px] border-gray-200 border rounded-[10px] sm:border-none items-center'>
                <div className="relative w-full sm:w-auto">
                    <ListboxButton className="grid sm:w-[130px] w-full h-[45px] cursor-pointer grid-cols-1 rounded-md bg-white py-3 pr-2 pl-3 text-left text-gray-900 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ">
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
                        className="absolute z-10 mt-1 max-h-56 Sm:w-[250px] w-full overflow-auto rounded-md bg-white backdrop-blur-[5px] py-2 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm transition-all duration-300"
                    >
                        {name.map((value) => (
                            <ListboxOption
                                key={value.id}
                                value={value}
                                className="group relative cursor-pointer py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-gray-600 data-focus:text-white data-focus:outline-hidden transition-all duration-200"
                            >
                                <div className="flex items-center">
                                    <span className="ml-3 block truncate font-normal group-data-selected:font-semibold text-[13px]">{value.name}</span>
                                </div>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </div>

        </Listbox>
    )
}
