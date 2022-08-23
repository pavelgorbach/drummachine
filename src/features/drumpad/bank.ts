import { Bank } from './types'

export const bank: Bank = {
  items: {
    'heater_kit': {
      id: 'heater_kit',
      title: 'Heater Kit',
      samples: {
        'Q': {id: 'Q', title: 'Heater 1', value: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
        'W': {id: 'W', title: 'Heater 2', value: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
        'E': {id: 'E', title: 'Heater 3', value: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
        'A': {id: 'A', title: 'Heater 4', value: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
        'S': {id: 'S', title: 'Clap', value: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
        'D': {id: 'D', title: 'Open HH', value: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
        'Z': {id: 'Z', title: "Kick n' Hat", value: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
        'X': {id: 'X', title: 'Kick', value: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
        'C': {id: 'C', title: 'Closed HH', value: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
      },
    },
    'smooth_piano': {
      id: 'smooth_piano',
      title: 'Smooth Piano Kit',
      samples: {
        'Q': {id: 'Q', title: 'Chord 1', value: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'},
        'W': {id: 'W', title: 'Chord 2', value: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'},
        'E': {id: 'E', title: 'Chord 3', value: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'},
        'A': {id: 'A', title: 'Shaker', value: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'},
        'S': {id: 'S', title: 'Open HH', value: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'},
        'D': {id: 'D', title: 'Closed HH', value: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'},
        'Z': {id: 'Z', title: 'Punchy Kick', value: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'},
        'X': {id: 'X', title: 'Side Stick', value: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'},
        'C': {id: 'C', title: 'Snare', value: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'}
      }
    }
  },
  ids: ['heater_kit', 'smooth_piano']
} 