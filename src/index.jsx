/* eslint-disable no-unused-vars */
import React from "react";
import { createRoot } from "react-dom/client";
import ComponentNoteApp from "./components/ComponentNoteApp";

import "./styles/styles.css";

const root = createRoot(document.getElementById("root"));
root.render(<ComponentNoteApp />);
