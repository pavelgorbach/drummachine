import styles from './Drumpad.module.scss'

import Controls from '../../components/Controls'
import useDrumpad from './useDrampad'

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
          <div key={x.id} id={x.title} className={[styles.padButton, 'drum-pad'].join(' ')} onClick={() => drumpad.handlePlay(x.id)}>
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
          </div>
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
