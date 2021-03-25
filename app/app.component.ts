import { Component, ViewChild } from "@angular/core";
import {
  ITreeOptions,
  ITreeState,
  TreeComponent as tc
} from "angular-tree-component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("tree") tree: tc;
  public state: ITreeState = {};
  options: ITreeOptions = {
    getChildren: this.getChildren.bind(this)
  };

  id = 500;
  nodes: any[] = [];

  constructor() {
    setTimeout(() => {
      this.nodes = [
        {
          name: "root1",
          id: 1,
          location: "Mumbai",
          hasChildren: true
        },
        {
          name: "root2",
          id: 2,
          location: "Delhi",
          hasChildren: true
        },
        {
          name: "root3",
          id: 3,
          location: "pune",
          hasChildren: true
        }
      ];
    }, 1000);
  }

  getChildren(node: any) {
    console.log(node);
    console.log(node.data);
    var childs = [
      { name: `root${this.id + 1}`, id: ++this.id, hasChildren: true }
    ];
    console.log("childs----->", childs);

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(childs), 1000);
    });
  }
}
