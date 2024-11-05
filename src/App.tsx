// @ts-nocheck

// Libraries
import { useEffect, useState } from "react";
import axios from "axios";

// Components
import Block1 from "./components/block1/Block1";
import Block2 from "./components/block2/Block2";
import Block3 from "./components/block3/Block3";

function App() {
  const [block1Data, setBlock1Data] = useState({});
  const [block2Data, setBlock2Data] = useState({});
  const [block3Data, setBlock3Data] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const getData = async () => {
    const response = await axios.get(
      "http://dev5.conwayandpartners.com:1340/api/pages",
      {
        params: {
          fields: ["title", "slug"],
          populate: {
            components: {
              on: {
                "text.block1": { populate: "*" },
                "text.block2": {
                  populate: { background: { fields: ["url", "mime"] } },
                },
                "text.block3": { populate: "*" },
              },
            },
          },
          filters: { slug: "home" },
        },
      }
    );

    const data = response.data.data[0].components;

    setBlock1Data(data[0]);
    setBlock2Data(data[1]);
    setBlock3Data(data[2]);
    setIsDataLoaded(true);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isDataLoaded) {
    return (
      <>
        <Block1 data={block1Data} />
        <Block2 data={block2Data} />
        <Block3 data={block3Data} />
      </>
    );
  }
}

export default App;
