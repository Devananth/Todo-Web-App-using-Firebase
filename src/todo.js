import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "./firebase_config";

export default function TodoListItem({ todo, id }) {
  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          style={{ color: "blue", minWidth: "400px" }}
        />
      </ListItem>
      <Button onClick={deleteTodo} style={{ color: "red" }}>
        X
      </Button>
    </div>
  );
}
