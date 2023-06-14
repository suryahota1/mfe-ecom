import { render } from "solid-js/web";

import AddToCart from "./AddToCart";

export default function (el, id) {
  render(() => <AddToCart id={id} />, el);
}