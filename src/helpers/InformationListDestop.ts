import annuity from "../assets/img/icon-benef-cios-info.png";
import phone from "../assets/img/icon-benef-cios-app.png";
import plane from "../assets/img/icon-benef-cios-milhas.png";

import { PropsListInformation } from "../types/propsListInformation";

export const informListDesKTOP: PropsListInformation[] = [
  {
    type: "TextHeader",
    img: annuity,
    title: "Anuidade",
    spancing: "spancing-right",
    text: "string",
  },
  {
    type: "TextHeader",
    img: annuity,
    title: "Renda mínima",
    spancing: "spancing-right",
    text: "number",
  },

  {
    type: "Text",
    img: phone,
    spancing: "spancing-right",
    text: "Aplicativo para controlar gastos",
  },

  {
    type: "Text",
    img: plane,
    text: "Milhas aéreas pelo programa Smiles",
  },
];
