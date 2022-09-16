import * as React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { StyledSection, StyledUl } from "./style";
import { Card } from "../card";
import { ContextHome } from "../../contexts/contextHome";
import { HomeInferior } from "../HomeInferior";

export const HomeMain = () => {
  const [view, setView] = React.useState("list");

  const { dados } = React.useContext(ContextHome);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    setView(nextView);
  };
  console.log(view);
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
          <ToggleButton value="column" aria-label="colum">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="row" aria-label="row">
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton value="row-reverse" aria-label="row-reverse">
            <ViewQuiltIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </StyledSection>
      <main>
        <StyledUl color={`${view}`}>
          {dados.map((item: any, index: any) => (
            <li key={index}>
              <Card index={index} />
            </li>
          ))}
        </StyledUl>
      </main>
      <HomeInferior />
    </>
  );
};
