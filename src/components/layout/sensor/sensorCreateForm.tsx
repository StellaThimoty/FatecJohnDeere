'use client'

import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { storeSensor } from '@/hooks/slices/sensorSlice';
import {
  TagIcon,
  UserIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

  
export default function CreateEddyCurrentForm() {
  const dispatch = useAppDispatch()
  const [localization, setLocalization] = useState("")
  const [tempo, setTempo] = useState("")
  const [part_machine, setPart_machine] = useState("")
  const [level, setLevel] = useState("")
  const [arrivalId, setArrivalId] = useState(0)
  
  async function handleCreate() {
    const time = new Date(tempo)
      try {
        await dispatch(storeSensor({time, part_machine, localization, arrivalId}))
      } catch(e) {
        console.error(e)
      }
  }
  return (
    <div>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl">
          Incongruência
        </h1>
        <div className="w-full">
          <label className="my-3 block font-medium text-gray-900" htmlFor="localization">
            Parte da máquina
          </label>
          <div className="w-full">
            <div className="relative">
              <input
                className="peer block w-80 border border-black py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="localization"
                type="text"
                name="localization"
                placeholder="Coloque o nome"
                value={part_machine}
                onChange={(e)=>setPart_machine(e.target.value)}
                required
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <label className="my-3 block font-medium text-gray-900" htmlFor="localization">
            Local da Incongruência
          </label>
          <div className="relative">
            <input
              className="peer block w-80 border border-black py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="localization"
              type="text"
              name="localization"
              placeholder="Coloque o nome"
              value={localization}
              onChange={(e)=>setLocalization(e.target.value)}
              required
            />
            <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div className="w-full">
          <label className="my-3 block font-medium text-gray-900" htmlFor="name">
            Hora da Incongruência
          </label>
          <div className="relative">
            <input
              className="peer block w-80 border border-black py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="time"
              type="time"
              name="time"
              value={tempo}
              onChange={(e)=>setTempo(e.target.value)}
              placeholder="Coloque o nome"
              required
            />
            <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
            <label className="my-3 block font-medium text-gray-900" htmlFor="category">
              Selecione o Nível de gravidade da Incongruência
            </label>
            <div className="relative">
              <select className="peer block w-80 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="level"
                name="level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                required>
                <option value="">Escolha um tipo</option>
                <option value="Baixo">Baixo</option>
                <option value="Medio">Medio</option>
                <option value="Alto">Alto</option>
              </select>
              <TagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 mx-1 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <label className="my-3 block font-medium text-gray-900" htmlFor="localization">
            Escolha a chegada referente
          </label>
          <div className="w-full">
            <div className="relative">
              <input
                className="peer block w-80 border border-black py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="localization"
                type="number"
                name="localization"
                placeholder="Coloque a chegada"
                value={arrivalId}
                onChange={(e)=>setArrivalId(Number(e.target.value))}
                required
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <Button className="mt-7 flex text-black bg-yellow-500 px-2 py-2 my-2 ml-3 hover:bg-lime-200" onClick={handleCreate}>
            Cadastrar <PlusCircleIcon className="w-6 mx-1" />
          </Button>
      </div>
    </div>
  );
}
