import { useState, useRef, useEffect, useCallback } from 'react'

import { ButtonId } from './types'
import { debounce } from '../../utils'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchBankAsync, selectDrumPad } from './drumpadSlice'

export const PADS: ButtonId[] = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

export default function useDrumpad() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchBankAsync()) 
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const drumPad = useAppSelector(selectDrumPad)
  const audioRefs = useRef<{[id: string]: HTMLAudioElement}>({})

  const [power, setPower] = useState(false)
  const [volume, setVolume] = useState('50') 
  const [bankId, setBankId] = useState('heater_kit')
  const [displayValue, setDisplayValue] = useState('') 

  const currentBank = drumPad.bank ? drumPad.bank.items[bankId] : null

  const handlePowerChange = (p: boolean) => {
    if(!currentBank) return
    if(!p) setDisplayValue('')
    if(p && !displayValue) setDisplayValue(currentBank.title)
    setPower(p)
  }

  const handleVolumeChange = (v: string) => {
    setVolume(v)
    handleDisplayChange(`volume: ${v}`)
  }

  const handleBankChange = () => {
    setBankId((x) => {
      const nextId = x === 'heater_kit' ? 'smooth_piano' : 'heater_kit'
      if(drumPad.bank) {
        setDisplayValue(drumPad.bank.items[nextId].title)
      } 
      return nextId
    })
  }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setDebouncedDisplayValue = useCallback(
   debounce((value: string) => {
    setDisplayValue(value)
   })
  , [])

  const handleDisplayChange = useCallback((d: string) => {
    if(!currentBank) return
    setDisplayValue(d)
    if(d === currentBank.title) return
    setDebouncedDisplayValue(currentBank.title)
  }, [currentBank, setDebouncedDisplayValue])

  const handlePlay = useCallback((x: ButtonId) => {
    if(audioRefs.current === null || !power || !currentBank) return
    const sound = audioRefs.current[x] || document.getElementById(x)
    sound.currentTime = 0
    sound.volume = Number(volume) / 100
    handleDisplayChange(currentBank.samples[x].title)
    sound.play() 
  }, [currentBank, handleDisplayChange, power, volume])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (PADS.some(x => x === e.key.toUpperCase())) {
        handlePlay(e.key.toUpperCase() as ButtonId)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handlePlay])

  return {
    status: drumPad.status,
    audioRefs: audioRefs.current,
    displayValue,
    handlePlay,
    onVolumeChange: handleVolumeChange,
    power: {
      value: power,
      onChange: handlePowerChange 
    },
    bank: {
      value: currentBank, 
      onChange: handleBankChange 
    },
  }
}