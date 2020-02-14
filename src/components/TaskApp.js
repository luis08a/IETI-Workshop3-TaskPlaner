import React, { useState } from "react";
import { TaskList } from "./TaskList";
import LoginDrawer from './Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

export function TaskApp(props) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState();
  const [newItem, setNewItem] = useState({
    description: "",
    responsible: {
      name: "",
      email: ""
    },
    status: "",
    dueDate: 0
  });

  const toogleDrawer = close => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(close);
  };
  const menu = () => {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toogleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  };
  const addTask = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-text">What needs to be done?</label>
        <input
          id="new-text"
          name="text"
          onChange={handleChange}
          value={this.state.description}
        />
        <label htmlFor="new-priority">How much needs to be done?</label>
        <input
          id="new-priority"
          type="number"
          name="priority"
          onChange={this.handleChange}
          value={this.state.status}
        />
        <label htmlFor="new-dueDate">When needs to be done?</label>
        <input
          id="new-dueDate"
          type="date"
          name="dueDate"
          onChange={this.handleChange}
        />
        <button>Add #{this.state.items.length + 1}</button>
      </form>
    );
  };
  const handleChange = e => {
    setNewItem({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      !this.state.description.length ||
      this.state.dueDate == null ||
      this.state.dueDate < 0
    ) {
      return;
    }
    const newItem = {
      text: this.state.description,
      priority: this.state.status,
      dueDate: this.state.dueDate
    };
    setItems(prevState => ({
      // items: prevState.items.concat(newItem),
      // text: "",
      // priority: 0,
      // dueDate: undefined,
      // id: new Date()
    }));
  };

  return (
    <div>
      <LoginDrawer
        open={open}
        close={() => {
          return console.log("cerrar");
        }}
      />
      {menu()}
      <h3>Tasks</h3>
      <TaskList />
    </div>
  );
}
