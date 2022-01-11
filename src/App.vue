<template>
  <ul>
    <div class="scaleTable  flex--center" >
      <div class="note flex--center" v-for="(note, i) in MAJOR" :key="i"
        :class="note ? '--white' : '--black'">{{ NOTE_TO_NAME[i] }}</div>
    </div>
    <li v-for="(scale, i) of scales" :key="i">
      <div class="scaleOpts">
        <select v-model="scale.tonic">
          <option v-for="(noteOffset, noteName) in NOTE" :key="noteOffset"
            :value="noteName">{{ noteName }}</option>
        </select>
        <select v-model="scale.name">
          <option v-for="(scaleOffset, name) in SCALE" :key="scaleOffset"
            :value="name">{{ name }}</option>
        </select>
      </div>
      <div class="scaleCtrls">
        <button @click="upScale(scale, i)">↑</button>
        <button @click="downScale(scale, i)">↓</button>
        <button @click="deleteScale(scale, i)">×</button>
      </div>
      
      <div class="scaleTable flex--center">
        <div class="note  flex--center" v-for="note in SCALE_NOTE" :key="note"
            :style="getStyle(scale, note)">
          {{ NOTE_TO_NAME[(note) % 12] }}
        </div>
      </div>

    </li>
  </ul>
  <button class="addScale" @click="addScale(name)">add scale</button>
</template>

<script>
// import Scale from './components/Scale.vue';

import { SCALE, NOTE, NOTE_TO_NAME, NOTE_TO_COLOR, MAJOR } from './const';

export default {
  data () { return {
      SCALE,
      NOTE,
      NOTE_TO_NAME,
      MAJOR,
      SCALE_NOTE:  new Array(12).fill(0).map((v, i) => i),

      scales: [],
  }},

  methods: {
    getStyle (scale, note) {
      const { tonic } = scale;
      const tonicNote = NOTE[tonic];
      const nextNote = circleOctave(note - tonicNote);

      const scaleOffset = SCALE[scale.name];
      const noteScaleOffset = circleOctave(nextNote + scaleOffset);

      const isTonic = note === tonicNote;
      const isColorNote = MAJOR[noteScaleOffset];
      return {
        backgroundColor: isColorNote ? NOTE_TO_COLOR[nextNote] : 'white',
        fontWeight: isTonic ? 'bold' : '',
        color: isTonic ? 'white' : '',
        fontSize: isTonic ? '16px' : '',
      };
    },

    upScale (scale, i) {
      this.scales.splice(i, 1);
      this.scales.splice(i-1, 0, scale);
    },

    downScale (scale, i) {
      this.scales.splice(i, 1);
      this.scales.splice(i+1, 0, scale);
    },

    deleteScale (scale, i) {
      this.scales.splice(i, 1);
    },

    addScale (scale) {
      this.scales.push(Object.assign({
        name: 'Major',
        tonic: 'C',
      }, scale));
    },
  },

  mounted () {
    // this.addScale();
    for (let i = 0; i < 4; i++)
      this.addScale({
        tonic: randFromObj(NOTE, true),
        name: randFromObj(SCALE, true),
      });
  },
};

function circleOctave (note) {
  note = note % 12;
  return note < 0 ? 12 + note : note;
}

function randFromObj (obj, returnKey) {
  const keys = Object.keys(obj);
  const randKey = keys[rand.int(0, keys.length)];
  return returnKey ? randKey : obj[randKey];
}

function rand (from = 0, to = 1) {
  return from + Math.random() * (to - from);
}
rand.int = function (from, to) { return rand(from, to) | 0 }

</script>

<style>
* {
  margin: 0;
  padding: 0;
}
select, button {
  border: none;
  cursor: pointer;
  background: rgb(230, 230, 230);
  box-shadow: none;
  height:  24px;
}
button {
  padding: 4px 8px;
  margin-right: 4px;
  /*border-radius: 8px;*/
}

.addScale { margin-top: 16px; }
li {
  list-style-type: none;
  /*display: flex;*/
  box-shadow: 0 4px 4px 0 grey;
}

.flex--center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.scaleOpts, .scaleCtrls {
  margin-top: 4px;
  width: 49%;
  display: inline-block;
}
.scaleCtrls {
  display: inline-flex;
  align-items: center;
  justify-content: end;
  opacity: 0;
}
li:hover .scaleCtrls { opacity: 1; }
.scaleOpts {
  display: inline-flex;
  justify-content: start;
  align-items: center;
}

.scaleTable {
  /*margin-top: 4px;*/
}
.note {
  width: 32px;
  height: 32px;
  box-shadow: 0 0 0 1px grey;
  font-size: 12px;
}
.note.--black {
  background: black;
  color: white;
}
.note.--white {
  background: white;
  color: black;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*padding: 24px;*/
  width: 375px;
}

.--tonic { background: red; }

</style>
