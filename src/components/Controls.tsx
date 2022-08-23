import { useState, ChangeEvent } from 'react'

import styles from './Controls.module.css'

const Switch = (p: {
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}) => {
  return (
    <div className={styles.switchContainer}>
      <div className={styles.switchLabel}>{p.label}</div>
      <label className={styles.switchInputContainer}>
        <input className={styles.switchInput} disabled={p.disabled} type="checkbox" onChange={p.onChange} />
        <span className={styles.switchSlider} />
      </label>
    </div>
  ) 
}

export default function Controls(p: {
  disabled: boolean
  displayValue: string
  onPowerChange(data: boolean): void
  onVolumeChange(data: string): void
  onBankChange(data: boolean): void
}) {
  const handlePowerChange = (e: ChangeEvent<HTMLInputElement>) => {
    p.onPowerChange(e.target.checked)
  } 

  const handleBankChange = (e: ChangeEvent<HTMLInputElement>) => {
    p.onBankChange(e.target.checked)
  } 

  const [volume, setVolume] = useState('50')
  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    p.onVolumeChange(e.target.value)
    setVolume(e.target.value)
  }

  return (
    <div className={styles.container}>
      <Switch label="Power" onChange={handlePowerChange} />

      <div className={styles.display} id="display">{p.displayValue}</div>
      
      <div className={styles.sliderContainer}>
        <input onChange={handleVolumeChange}
          disabled={p.disabled}
          type="range"
          min="1"
          max="100"
          value={volume}
          className={styles.slider}
          id="myRange"
        />
      </div>

      <Switch label="Bank" disabled={p.disabled} onChange={handleBankChange} />
    </div>
  )
}