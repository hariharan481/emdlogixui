import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Table from "./Table";
import { Star } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Main = () => {
  return (
    <div>
      <Container maxWidth="4px">
        <Stack direction={"row"} gap={"10px"} mt={3}>
          <Box
            classname="indexpage"
            sx={{
              height: "590px",
              width: "600px",
              display: "flex",
            }}
          >
            <Box
              sx={{
                height: "20px",
                width: "200px",
                textAlign: "center",
                mt: "20px",
              }}
            >
              <Typography variant="h6" fontFamily={"sans-serif"} color={"blue"}>
                Index Search
              </Typography>
            </Box>
          </Box>

          <Box
            classname="Tabularsearch"
            sx={{
              height: "590px",
              width: "1000px",
              display: "flex",
              backgroundColor: "white",
              border: "0.5px solid black",
            }}
          >
            <Box
              sx={{
                height: "20px",
                width: "200px",

                mt: "20px",
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "#ccc6ed",
                  width: "1000px",
                }}
                variant="subtitle1"
                fontFamily={"sans-serif"}
                color={"black"}
              >
                Tabular Search
              </Typography>
            </Box>
            <Stack direction={"column"} mt={9}>
              <Typography
                variant="subtitle1"
                fontFamily={"sans-serif"}
                color={"blueviolet"}
                fontWeight={600}
                ml={-25}
                sx={{
                  borderBottom: "0.3px solid grey",
                  width: "1000px",
                }}
              >
                Code details
              </Typography>

              <Typography variant="subtitle2" color={""}>
                A00.0 cholera due to vibreo Cholrate
                <Button
                  disableElevation
                  disableFocusRipple
                  sx={{
                    width: "150px",
                    height: "15px",
                    color: "white",
                    fontFamily: "sans-serif",
                    ml: "170px",
                    backgroundColor: "green",
                    textTransform: "lowercase",
                    fontWeight: "700px",
                    textAlign: "center",
                  }}
                >
                  Billable Codes{" "}
                  <IconButton disableFocusRipple disableTouchRipple>
                    <Star
                      sx={{
                        color: "white",
                        fontSize: "15px",
                      }}
                    />
                  </IconButton>
                </Button>
              </Typography>

              <Box
                sx={{
                  height: "300px",

                  width: "700px",
                  backgroundColor: "white",
                }}
              >
                <Box
                  sx={{
                    height: "35px",
                    width: "1000px",
                    backgroundColor: "#c8e2dd",
                    color: "black",
                    fontFamily: "sans-serif",
                    fontSize: "13px",
                    marginLeft: "-200px",
                    mt: "20px",
                  }}
                >
                  <Stack direction={"row"} gap={"40px"}>
                    <Typography
                      variant="subtitle1"
                      color="black"
                      fontWeight={"700"}
                    >
                      Code notes
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color={"black"}
                      fontWeight={"700"}
                    >
                      Section notes
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color={"black"}
                      fontWeight={"700"}
                    >
                      Chapter Notes
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color={"black"}
                      fontWeight={"700"}
                    >
                      Chapter guidlines
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};
