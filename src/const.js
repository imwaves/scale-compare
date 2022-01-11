export const OCTAVE_HS = 12;
export const MAJOR = [1,0,1,0,1,1,0,1,0,1,0,1];

export const SCALE = Object.freeze({
  Major: 0,
  Dorian: 2, 
  Phrygian: 4, 
  Lydian: 5, 
  Mixolydian: 7, 
  Minor: 9, 
  Locrian: 11,
});

export const NOTE = {
  'C': 0,
  'C#':1,
  'D': 2,
  'D#':3,
  'E': 4,
  'F': 5,
  'F#':6,
  'G': 7,
  'G#':8,
  'A': 9,
  'A#':10,
  'B': 11,
};

export const NOTE_TO_NAME = {
  0: 'C',
  1: 'C#',
  2: 'D',
  3: 'D#',
  4: 'E',
  5: 'F',
  6: 'F#',
  7: 'G',
  8: 'G#',
  9: 'A',
  10: 'A#',
  11: 'B',
};

export const NOTE_TO_COLOR = {
  0: '#ff0000',
  1: '#ff4e00',
  2: '#db7b00',
  3: '#ffcc01',
  4: '#e4ed00',
  5: '#80d700',
  6: '#01ffb4',
  7: '#01ffea',
  8: '#00baff',
  9: '#784eff',
  10: '#a800ff',
  11: '#ff00fd',
}