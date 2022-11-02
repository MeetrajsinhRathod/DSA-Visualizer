import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { sortingAlgorithms, searchingAlgorithms, dataStructures, others } from "../common/config";
import { useControls, useData } from "../common/store";
import shallow from "zustand/shallow";
import Home from "../Home";
import { SortManager } from "./visualizer/SortManager";
import { SearchManager } from "./visualizer/SearchManager";
import { Controller } from "./Controller";
import { BubbleInfo } from "./info/sorting/BubbleInfo";
import { SelectionInfo } from "./info/sorting/SelectionInfo";
import { InsertionInfo } from "./info/sorting/InsertionInfo";
import { HeapInfo } from "./info/sorting/HeapInfo";
import { MergeInfo } from "./info/sorting/MergeInfo";
import { QuickInfo } from "./info/sorting/QuickInfo";
import { LinearInfo } from "./info/searching/Linearinfo";
import { BinaryInfo } from "./info/searching/BinaryInfo";
import { ArrayInfo } from "./info/Datastructures/Arrayinfo";
import { StackInfo } from "./info/Datastructures/stackinfo";
import { QueueInfo } from "./info/Datastructures/Queueinfo";
import { LinkedlistInfo } from "./info/Datastructures/Linkedlistinfo";
import { TreeInfo } from "./info/Datastructures/Treeinfo";
import { BfsInfo } from "./info/other/BfsInfo";
import { DfsInfo } from "./info/other/DfsInfo";
import { KruskalInfo } from "./info/other/KruskalInfo";
import { PrimmsInfo } from "./info/other/PrimmsInfo";
import { DijkstraInfo } from "./info/other/DijkstraInfo";

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;

const Container = styled(Card)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
`;

const flexCenter = { display: "flex", justifyContent: "center" };

var tab = 0;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      style={{ maxWidth: "100%", width: "100%" }}
    >
      {value === index && children}
    </div>
  );
}

export function AlgoDisplay() {
  const resetSorting = useControls((state) => state.resetSorting);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [sortingArray, algorithm, searchingAlgorithm, dataStructure, other, tabTitle] = useData(
    (state) => [
      state.sortingArray,
      state.algorithm,
      state.searchingAlgorithm,
      state.dataStructure,
      state.other,
      state.tabTitle,
    ],
    shallow
  );

  useEffect(() => {
    resetSorting();
  }, [algorithm]);

  if (sortingArray.length === 0)
    return (
      <h3 style={flexCenter}>
        Please enter input array or use generate button
      </h3>
    );

  if (tabTitle == 0) {
    return (
      <Home />
    );
  }
  else if (tabTitle == 1) {
    return (
      <>
        <Controller />
        <div style={flexCenter}>
          {sortingAlgorithms.map((algoInfo, idx) => (
            <TabPanel value={algorithm} index={idx} key={algoInfo.name}>
              <SortManager
                array={sortingArray}
                sortFunction={algoInfo.component}
                sortingAlgorithmName={algoInfo.name}
              />
              {algoInfo.name === "BubbleSort" ? (
                <BubbleInfo />
              ) : (
                <></>
              )}

              {algoInfo.name === "SelectionSort" ? (
                <SelectionInfo />
              ) : (
                <></>
              )}

              {algoInfo.name === "InsertionSort" ? (
                <InsertionInfo />
              ) : (
                <></>
              )}

              {algoInfo.name === "HeapSort" ? (
                <HeapInfo />
              ) : (
                <></>
              )}

              {algoInfo.name === "MergeSort" ? (
                <MergeInfo />
              ) : (
                <></>
              )}

              {algoInfo.name === "QuickSort" ? (
                <QuickInfo />
              ) : (
                <></>
              )}
            </TabPanel>
          ))}
        </div>
      </>
    );
  }
  else if (tabTitle == 2) {
    return (
      <div style={flexCenter}>
        {searchingAlgorithms.map((algoInfo, idx) => (
          <TabPanel value={searchingAlgorithm} index={idx} key={algoInfo.name}>
            <Controller />
            <SearchManager
              array={sortingArray}
              sortFunction={algoInfo.component}
              sortingAlgorithmName={algoInfo.name}
            />
            {algoInfo.name === "LinearSearch" ? (
              <LinearInfo />
            ) : (
              <></>
            )}
            {algoInfo.name === "BinarySearch" ? (
              <BinaryInfo />
            ) : (
              <></>
            )}
          </TabPanel>
        ))}
      </div>
    );
  }
  else if (tabTitle == 3) {
    return (
      <>
        <div style={flexCenter}>
          {dataStructures.map((algoInfo, idx) => (
            <TabPanel value={dataStructure} index={idx} key={algoInfo.name}>

              {algoInfo.name === "Array" ? (
                <>
                <Controller />
                 <SortManager
                   array={sortingArray}
                   sortFunction={algoInfo.component}
                   sortingAlgorithmName={algoInfo.name}
                 />
                 <ArrayInfo />
               </>
              ) : (
                <></>
              )}
              {algoInfo.name === "Linked List" ? (
                <LinkedlistInfo />
              ) : (
                <></>
              )}
              {algoInfo.name === "Stack" ? (
                <StackInfo />
              ) : (
                <></>
              )}
              {algoInfo.name === "Queue" ? (
                <QueueInfo />
              ) : (
                <></>
              )}
              {algoInfo.name === "Tree" ? (
                <TreeInfo />
              ) : (
                <></>
              )}
            </TabPanel>
          ))}
        </div>
      </>
    );
  }
  else if (tabTitle == 4) {
    return (
      <>
        <div style={flexCenter}>
          {others.map((algoInfo, idx) => (
            <TabPanel value={other} index={idx} key={algoInfo.name}>
              {algoInfo.name === "BFS" ? (
                <BfsInfo/>
              ) : (
                <></>
              )}
              {algoInfo.name === "DFS" ? (
                <DfsInfo/>
              ) : (
                <></>
              )}
              {algoInfo.name === "Dijkstra" ? (
                <DijkstraInfo/>
              ) : (
                <></>
              )}
              {algoInfo.name === "Kruskal" ? (
                <KruskalInfo/>
              ) : (
                <></>
              )}
              {algoInfo.name === "Primms" ? (
                <PrimmsInfo/>
              ) : (
                <></>
              )}
            </TabPanel>
          ))}
        </div>
      </>
    );
  }

}
