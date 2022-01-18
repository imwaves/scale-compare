<template>
  <div class="App">
    <ul>
      <div class="scaleTable  flex--center" >
        <div class="note flex--center" v-for="i in SCALE_NOTE" :key="i"
          :class="MAJOR[i % 12] ? '--white' : '--black'">{{ NOTE_TO_NAME[i % 12] }}</div>
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

        <div class="scaleTable">
          <div class="note" v-for="note in SCALE_NOTE" :key="note"
              :class="getClass(scale, note)">
            {{ NOTE_TO_NAME[(note) % 12] }}
          </div>
        </div>

      </li>
    </ul>
    <button class="addScale" @click="addScale(name)">add scale</button>
  </div>
</template>

<script>
// import Scale from './components/Scale.vue';

import { SCALE, NOTE, NOTE_TO_NAME, /*NOTE_TO_COLOR, */MAJOR } from './const';

export default {
  data () { return {
      SCALE,
      NOTE,
      NOTE_TO_NAME,
      MAJOR,
      SCALE_NOTE:  new Array(24).fill(0).map((v, i) => i),

      scales: [],
  }},

  methods: {
    getClass (scale, note) {
      const { tonic } = scale;
      const tonicNote = NOTE[tonic];
      const nextNote = circleOctave(note - tonicNote);

      const scaleOffset = SCALE[scale.name];
      const noteScaleOffset = circleOctave(nextNote + scaleOffset);

      // const isTonic = note % 12 === tonicNote;
      const isColorNote = MAJOR[noteScaleOffset];
      return isColorNote && `note--${ nextNote }`;
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
    for (let i = 0; i < 2; i++)
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
  /*box-shadow: 0 0 0 1px grey;*/
  border: 1px solid #8080808c;
  font-size: 10px;
  padding: 0px 2px;
  box-sizing: border-box;
  text-align: left;
  display: inline-block;
  vertical-align: bottom;
  border-right-width: 0;
}
.note:last-child { border-right-width: 1px; }
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
  /*width: 375px;*/
}

.App {
  display: inline-block;
}

.note--0 {
  background-color: #ff0000;
  color: white;
  font-weight: bold;
  font-size: 14px;
}
.note--1 { background-color: #ff4e00; }
.note--2 { background-color: #db7b00; }
.note--3 { background-color: #ffcc01; }
.note--4 { background-color: #e4ed00; }
.note--5 { background-color: #80d700; }
.note--6 { background-color: #01ffb4; }
.note--7 { background-color: #01ffea; }
.note--8 { background-color: #00baff; }
.note--9 { background-color: #9777ff; }
.note--10 { background-color: #ba36ff; }
.note--11 { background-color: #ff00fd; }

.--tonic { background: red; }

</style>
