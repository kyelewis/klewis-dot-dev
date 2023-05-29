import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "title-component",
  styleUrl: "style.css",
  shadow: true,
})
export class Title {
  @Prop() value: string = "";

  render() {
    return <h1>{this.value}</h1>;
  }
}
