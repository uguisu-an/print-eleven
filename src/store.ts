import Vue from "vue";
import Vuex from "vuex";
import { Drawing } from "./models/drawing";
import { LineDrawing } from "./models/line-drawing";
import { RectDrawing } from "./models/rect-drawing";

Vue.use(Vuex);

interface RootState {
  drawings: Drawing[];
}

export default new Vuex.Store<RootState>({
  state: {
    drawings: []
  },
  mutations: {
    addLine({ drawings }) {
      drawings.push(new LineDrawing({ x1: 10, y1: 10, x2: 100, y2: 100 }));
    },
    addRect({ drawings }) {
      drawings.push(new RectDrawing());
    }
  },
  actions: {}
});
