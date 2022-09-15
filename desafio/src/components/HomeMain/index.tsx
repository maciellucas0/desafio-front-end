import * as React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { StyledSection } from "./style";
import { Card } from "../card";
import { ContextHome } from "../../contexts/contextHome";

export const HomeMain = () => {
  const [view, setView] = React.useState("list");

  const { dados } = React.useContext(ContextHome);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    setView(nextView);
  };
  console.log(dados);
  return (
    <>
      <StyledSection>
        <ToggleButtonGroup
          id="selector"
          orientation="horizontal"
          value={view}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="quilt" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton value="list" aria-label="quilt">
            <ViewQuiltIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </StyledSection>
      <main>
        <ul>
          {dados.map((item: any, index: any) => (
            <li key={index}>
              <Card index={index} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
