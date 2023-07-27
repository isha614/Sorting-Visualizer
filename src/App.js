import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Visualiser from "./components/Visualiser";
import Hero from "./components/InfoPage";
import Navbar from "./components/Navbar";
import AboutUs from "./components/Types";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  const [isLargerThan48] = useMediaQuery("(min-width: 48em)");
  const [arr, setArr] = useState([]);
  const [generating, setGenerating] = useState(false);
  const [sorting, setSorting] = useState(false);
  const generateArr = (formState) => {
    setGenerating(true);
    setTimeout(() => {
      let newArr = [];
      while (newArr.length <= formState.size) {
        let random = Math.floor(Math.random() * (200 - 10) + 10);
        if (newArr.indexOf(random) === -1) {
          newArr.push(random);
        }
      }
      setArr([...newArr]);
      setGenerating(false);
    }, 500);
  };

  useState(() => {
    generateArr({ size: 10 });
  }, []);
  console.log(arr);

  const sort = () => {
    setSorting(true);
    setTimeout(() => {
      let newArr = [...arr];
      for (let i = 0; i < arr.length - 1; i++) {
        setTimeout(() => {
          for (let j = i + 1; j < arr.length; j++) {
            if (newArr[i] > newArr[j]) {
              let temp = newArr[i];
              newArr[i] = newArr[j];
              newArr[j] = temp;
              let newStep = [...newArr];

              setTimeout(() => {
                setArr([...newStep]);
              }, j * 3000);
            }
            if (i === arr.length - 2) {
              setSorting(false);
            }
          }
        }, i * 5000);
      }
    }, 5000);
  };
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Box p={"4"}>
        <Flex
          minH="70vh"
          alignItems="center"
          justifyContent="space-between"
          w="full"
          py="10"
          px={isLargerThan48 ? "16" : "6"}
          flexWrap="wrap"
          flexDirection={isLargerThan48 ? "row" : "column"}
          gap={8}
        >
          <Sidebar
            generateArr={generateArr}
            generating={generating}
            sorting={sorting}
            sort={sort}
          />
          <Visualiser data={arr} />
        </Flex>
      </Box>
      <About />
      <Footer />
    </>
  );
}

export default App;
