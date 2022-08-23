import { ReactNode, useEffect, useState, useCallback } from 'react'
import styles from './Drumpad.module.scss'

import Controls from '../../components/Controls'
import useDrumpad from './useDrampad'

const ButtonContainer = (p: {
  children: ReactNode 
  id: string
  title: string
  disabled: boolean
  onClick(id: string): void
}) => {
  const [active, setActive] = useState(false)

  const handleClick = useCallback(() => {
    if(p.disabled) return
    if(!active) setActive(true)
    p.onClick(p.id)
    setTimeout(() => { setActive(false) }, 200)
  }, [active, p])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if(p.disabled) return
      if (e.key.toUpperCase() === p.id) {
        handleClick()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleClick, p.disabled, p.id])

  return (
    <div
      id={p.title}
      className={[styles.padButton, 'drum-pad', active ? styles.active : ''].join(' ')}
      onClick={handleClick}
    >
      {p.children}
    </div>
  )
}

export default function Drumpad() {
  const drumpad = useDrumpad()
  
  if(drumpad.status === 'loading') {
    return <span className={styles.loader} />
  }

  if(!drumpad.bank.value?.samples) {
    return <div className={styles.empty}>Sound bank is not loaded!</div> 
  }

  return (
    <div className={styles.container} id="drum-machine">
      <div className={drumpad.power.value === true ? styles.ledGreen : styles.ledRed} />
      <div className={styles.pad}>
        {Object.values(drumpad.bank.value.samples).map((x) => (
          <ButtonContainer
            key={x.id}
            id={x.id}
            title={x.title}
            onClick={drumpad.handlePlay}
            disabled={!drumpad.power.value}
          >
            <audio
              preload="auto"
              className="clip"
              id={x.id} 
              ref={(el) => {
                if(!el) return
                drumpad.audioRefs[x.id] = el
              }}
              src={x.value}
            />
            {x.id}
          </ButtonContainer>
        ))}
      </div>

      <Controls
        disabled={!drumpad.power.value} 
        displayValue={drumpad.displayValue}
        onPowerChange={drumpad.power.onChange}
        onVolumeChange={drumpad.onVolumeChange}
        onBankChange={drumpad.bank.onChange}
      />
    </div>
  );
}
