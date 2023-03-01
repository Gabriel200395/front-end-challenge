import annuity from "../assets/img/icon-benef-cios-info.png";
import monthlyPayment from "../assets/img/icon-benef-cios-mensalidade.png";
import reward from "../assets/img/icon-benef-cios-recompensa.png";

import { PropsListInformation } from "../types/propsListInformation";
export const informListMobile: PropsListInformation[] = [
  {
    type: "TextHeader",
    img: annuity,
    title: "Anuidade",
    spancing: "spancing-right",
    text: "12x R$ 31,17",
    link: "Pode ser grátis, veja como →",
  },
  {
    type: "TextHeader",
    img: annuity,
    title: "Renda mínima",
    spancing: "spancing-right",
    text: "Renda mínima:",
  },

  {
    type: "Text",
    img: reward,
    spancing: "spancing-right",
    text: "Acumule pontos e troque por produtos",
  },

  {
    type: "Text",
    img: monthlyPayment,
    text: "Mais prazo para pagar a fatura do cartão",
  },
];
