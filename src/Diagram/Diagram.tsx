/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-boolean-cast */
import React, { useEffect, useState } from "react";
import Xarrow, { Xwrapper, useXarrow } from "react-xarrows";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./styles.css";
import { DisplayTypeToIconMap } from "./ResourceTypesIcons";
import expandIcon from "./assets/Expand.svg"
// import { faMagnifyingGlassMinus, faMagnifyingGlassPlus, faExpand } from "@fortawesome/pro-regular-svg-icons";
import { faMagnifyingGlassMinus, faMagnifyingGlassPlus, faExpand } from '@fortawesome/free-solid-svg-icons'
import collapseIcon from "./assets/Collapse.svg"
import { styled } from "@mui/material";

const ControlButton = styled(`button`)({
  width: '40px',
  height: '40px',
  backgroundColor: 'white',
  border: `1px solid rgb(216, 221, 228)`,
  borderRadius: '4px',
  color: 'rgb(84, 91, 113)',
  '&:active': {
    color: 'rgb(50, 103, 214)',
  },
  '&:hover': {
    backgroundColor: 'rgb(249, 251, 252)',
  }

})


interface Column {
  id: string;
  value?: string;
  label: string;
  description?: string;
  route?: Array<any>;
  icon?: any;
  //type?: number;
  type?: string;
  actions?: Array<Action>;
  collapsible?: boolean;
  visible?: boolean
}

interface Arrow {
  startID: string;
  endID: string;
  dashness?: boolean;
  showTail?: boolean;
  showHead?: boolean;
}

interface Action {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  label: string;
  id: string;
  type?: number;
}

interface Props {
  width?: string | undefined;
  height?: string | undefined;
  data: Column[][];
  arrows?: Array<Arrow>;
  maxColumnsLength?: number;
  containerStyle?: object;
  columnStyle?: object;
}

interface CollapsibleItemsStateInterface {
  [key: string]: string[]
}

interface CollapsibleStateInterface {
  [key: string]: boolean
}


export const Diagram: React.FC<Props> = ({
  width,
  height,
  data,
  arrows,
  maxColumnsLength,
  containerStyle,
  columnStyle,
}) => {
  const [selectedPath, setSelectedPath] = useState<string[] | null>(null);
  const [mappedPaths, setMappedPaths] = useState<string[][]>([]);
  const [visible, setVisible] = useState<string>();
  const [collapsibleItemsIndex, setCollapsibleItemsIndex] = useState<CollapsibleItemsStateInterface>({});
  const [collapsibleState, setCollapsibleState] = useState<CollapsibleStateInterface>({})
  const [arrowsModel, setArrowsModel] = useState<Array<Arrow>>()
  const [dataModel, setDataModel] = useState<Column[][]>([])
  const [zoom, setZoom] = useState<number>(100)
  const updateXarrow = useXarrow();

  useEffect(() => {
    const paths = data[0];
    const _statePaths: string[][] = [];
    paths.forEach((element) => {
      if (element.route !== undefined && element.route !== null)
        _statePaths.push([element.id, ...element.route]);
    });
    setMappedPaths(_statePaths);
  }, [data]);



  const handlePath = (node: string, indexX: number, indexY: number) => {
    if (Boolean(data[indexX][indexY].route)) {
      const _path = findArrayWithElement(mappedPaths, node);
      setSelectedPath(_path);
    } else {
      connectPaths({
        startID: node,
        endID: node,
      });
    }
  };

  function findArrayWithElement<T>(arrays: T[][], element: T): T[] {
    const _data = arrays.filter((array) => array.includes(element));
    return _data[0];
  }

  const connectPaths = async (node: Arrow) => {
    const isObject = typeof node === "object";
    const prevNodes = findPath(node.endID, false);
    const nextNodes = findPath(node.startID, true);
    const current = [node.endID, node.startID];

    // setSelectedPath([...current, ...nextNodes, ...prevNodes]);
    // setSelectedPath([...current]);
    if (isObject) {
      setSelectedPath([...current]);
    }
    else {
      setSelectedPath([...current, ...nextNodes, ...prevNodes]);
    }
  };

  const findPath = (node: string, prev: boolean): any[] => {
    if (arrows === undefined) return [];
    const found: string[] = [];
    const elementsFound = arrows.filter((element) =>
      prev ? element.endID === node : element.startID === node
    );
    if (elementsFound.length) {
      elementsFound.forEach((foundElement) => {
        prev
          ? found.push(
            foundElement.startID,
            ...findPath(foundElement.startID, true)
          )
          : found.push(
            foundElement.endID,
            ...findPath(foundElement.endID, false)
          );
      });
    }

    return found;
  };

  const toogleVisible = (id: string) => {
    if (visible === "" || visible !== id) {
      setVisible(id);
    } else if (visible === id) {
      setVisible("");
    }
  };

  const handleClick = (e: any, action: Action) => {
    action.onClick(e)
    setVisible("")
  }

  const initArrows = (collapsibleStateProps: { [x: string]: boolean; }, collapsibleItemsIndexProps: CollapsibleItemsStateInterface) => {
    let index: any[] = []
    for (const key in collapsibleStateProps) {
      if (collapsibleStateProps[key]) {
        index = index.concat(collapsibleItemsIndexProps[key])
      }
    }
    const newArrows: Array<Arrow> = []
    arrows?.map((arrow => {
      if (!index.find((e => { return e === arrow.endID }))) {
        newArrows?.push(arrow)
      }
    }))
    setArrowsModel(newArrows)
  }

  const updateArrows = (collapsibleStateProps: { [x: string]: boolean; }) => {
    let index: any[] = []
    for (const key in collapsibleStateProps) {
      if (collapsibleStateProps[key]) {
        index = index.concat(collapsibleItemsIndex[key])
      }
    }
    const newArrows: Array<Arrow> = []
    arrows?.map((arrow => {
      if (!index.find((e => { return e === arrow.endID }))) {
        newArrows?.push(arrow)
      }
    }))
    setArrowsModel(newArrows)
  }

  useEffect(() => {
    let stateCollapsible = {}
    let indexCollapsible = {}
    const invisibleNodes: string[] = []
    data.map(column => {
      column.map((item) => {
        const id = item.id
        if (item.collapsible) {
          stateCollapsible = { ...stateCollapsible, [id]: true }
          if (arrows !== undefined) {
            const indexArray: any[] = []
            for (let i = 0; i < arrows?.length; i++) {
              if (arrows[i].startID == id || indexArray.find((e) => { return (e === arrows[i].startID) })) {
                indexArray.push(arrows[i].endID)
                invisibleNodes.push(arrows[i].endID)
              }
            }
            indexCollapsible = { ...indexCollapsible, [id]: indexArray }
          }
        }
      })
    })
    const dataInit = data
    dataInit?.map((column) => {
      column.map((item) => {
        if (invisibleNodes.find((e) => { return e === item.id })) {
          item['visible'] = false
        }
      })
    })
    // setDataModel(dataInit)
    displayColumns(dataInit)
    setCollapsibleItemsIndex(indexCollapsible)
    setCollapsibleState(stateCollapsible)
    initArrows(stateCollapsible, indexCollapsible)
  }, [data])

  // useEffect(() => {
  //   setDataModel(data)
  //   setArrowsModel(arrows)
  // }, [])

  const onClickCollapsibleItem = (element: { id: string | number; }) => {
    if (!collapsibleState[element.id]) {
      const dataCollapsed = dataModel
      dataCollapsed?.map((column) => {
        column.map((item) => {
          if (collapsibleItemsIndex[element.id].find((e) => { return e === item.id })) {
            item['visible'] = false
          }
        })
      })
      // setDataModel(dataCollapsed)
      displayColumns(dataCollapsed)
    }
    else {
      const dataCollapsed = dataModel
      dataCollapsed?.map((column) => {
        column.map((item) => {
          if (collapsibleItemsIndex[element.id].find((e) => { return e === item.id })) {
            item['visible'] = true
          }
        })
      })
      // setDataModel(dataCollapsed)
      displayColumns(dataCollapsed)
    }
    setCollapsibleState({ ...collapsibleState, [element.id]: !collapsibleState[element.id] })
    updateArrows({ ...collapsibleState, [element.id]: !collapsibleState[element.id] })
    setZoom(50)
  }

  const displayColumns = (columns: Column[][]) => {
    let maxColumns: Column[][] = []
    if (maxColumnsLength) {
      columns.map((column) => {
        let maxCount = 0
        let arrayColumn: Column[] = []
        column.map(element => {
          if (maxCount < maxColumnsLength) {
            arrayColumn.push(element)
            maxCount = maxCount + 1
          }
          else {
            maxColumns.push(arrayColumn)
            maxCount = 0
            arrayColumn = [element]
          }
        })
        if (arrayColumn.length > 0) {
          maxColumns.push(arrayColumn)
        }
      })
    }
    else {
      maxColumns = columns
    }
    setDataModel(maxColumns)
  }


  type ElementKey = keyof typeof DisplayTypeToIconMap

  return (
    <div style={{
      position: 'relative',
      width: width || '100%',
      height: height,
    }}>
      <div
        style={{
          padding: 15,
          position: 'absolute',
          right: 0,
          zIndex: 51,
        }}
      >
        <ControlButton 
          onClick={() => {
              setZoom(60)
          }}>
          <FontAwesomeIcon icon={faExpand} />
        </ControlButton>
        <ControlButton className="control-button"
          style={{ marginLeft: 10 }}
          onClick={() => {
            if (zoom < 190) {
              setZoom(zoom + 10)
            }
          }}>
          <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
        </ControlButton>
        <ControlButton className="control-button"
          style={{ marginLeft: 10 }}
          onClick={() => {
            if (zoom > 50) {
              setZoom(zoom - 10)
            }
          }}>
          <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
        </ControlButton>
      </div>
      <div
        onClick={() => {
          if (visible !== "") {
            setVisible("")
          }
        }}
        className="container"
        style={{
          // top: '-70px',
          ...containerStyle
        }}
        onScroll={updateXarrow}
      >
        <div className="dia-content" style={{ zoom: zoom + '%' }}>
          <Xwrapper>
            {dataModel?.map((column, index) => {
              let displayContent = false
              for (const i in column) {
                if (column[i].visible === true || column[i].visible === undefined) {
                  displayContent = true
                  break
                }
              }
              return displayContent && (
                // <div key={index} className="dia-column" style={{ paddingInline:(((150 - zoom) / 2) + 1) > 1 ? (((150 - zoom) / 2) + 1) : 1 + 'px' }}>
                <div key={index} className="dia-column" style={{}}>
                  {column.map((element, i) => {
                    if (element.visible !== false) {
                      return (
                        <div
                          key={`${index}-${i}`}
                          className={`element-container ${index !== data.length - 1 ? "element-col" : ""
                            }`}
                        >
                          <div className="diadropdown">
                            <div
                              id={element.id}
                              className={`dia-row ${!(
                                (element.type !== undefined &&
                                  element.type !== null) ||
                                !!element.icon
                              )
                                ? "dia-row_placehold"
                                : ""
                                }`}
                              style={{
                                ...columnStyle,
                              }}
                              onMouseOver={() => handlePath(element.id, index, i)}
                              onMouseLeave={() => setSelectedPath(null)}
                              onClick={() => toogleVisible(element.id)}
                            >
                              {
                                //element.type !== undefined && element.type !== null && element.type < types.length ? (
                                element.type !== undefined && element.type !== null ? (
                                  <img
                                    //src={`${types[element.type]}`}
                                    src={`${DisplayTypeToIconMap[element.type as ElementKey]}`}
                                    //alt={types[element.type]}
                                    alt={DisplayTypeToIconMap[element.type as ElementKey]}
                                    height="100%"
                                    width="100%"
                                  />
                                ) : element.icon ? (
                                  <img
                                    src={element.icon}
                                    alt={element.value}
                                    height="100%"
                                    width="100%"
                                  />
                                ) : (
                                  element.id
                                )}
                            </div>
                            {
                              (element.actions && element.actions.length >= 1) || element.collapsible ?
                                <div
                                  className={`diadropdown-content ${visible === element.id ? "show-dropdown" : ""}`}
                                  style={{ zIndex: 9999, }}
                                >
                                  {!!element.actions &&
                                    element.actions.map((action) => {
                                      if (
                                        action.type === element.type ||
                                        action.type === undefined ||
                                        action.type === null
                                      ) {
                                        return (
                                          <div
                                            className="actions-text"
                                            key={`option-${action.id}`}
                                            id={`${action.id}`}
                                            onClick={(e) => handleClick(e, action)}
                                          >
                                            {action.label}
                                          </div>
                                        );
                                      } else {
                                        return null
                                      }
                                    })}
                                  {element.collapsible && (
                                    <div
                                      className="actions-text"
                                      key={`option-${element.id}`}
                                      id={`collapsible-action-${element.id}`}
                                      onClick={() => onClickCollapsibleItem({ id: element.id })}
                                    >
                                      {`${collapsibleState[element.id] ?
                                        "Expand resources" : "Collapse resources"}`}
                                    </div>
                                  )}
                                </div>
                                :
                                null
                            }
                          </div>
                          {element.collapsible &&
                            <div className="button-collapsible-container">
                              <button className="button-collapsible"
                                onClick={() => { onClickCollapsibleItem({ id: element.id }) }}>
                                {!collapsibleState[element.id] ?
                                  <img
                                    src={collapseIcon}
                                    alt={"-"}
                                    height="100%"
                                    width="100%"
                                  /> :
                                  <img
                                    src={expandIcon}
                                    alt={"+"}
                                    height="100%"
                                    width="100%"
                                  />}
                              </button>
                            </div>}
                          <div className={element.collapsible ? "text-container-collapsible" : "text-container"} >
                            {/* <p className="element-label" style={{ fontSize: (((100 - zoom) / 4) + 16) > 16 ? (((100 - zoom) / 4) + 16) : 16 + 'px' }}> */}
                            <p className="element-label">
                              {element.label}</p>
                            {element.description && (
                              // <p className="element-description" style={{ fontSize: (((100 - zoom) / 4) + 14) > 14 ? (((100 - zoom) / 4) + 14) : 14 + 'px' }}>
                              <p className="element-description">
                                {element.description}
                              </p>
                            )}
                            {collapsibleState[element.id] && (
                              // <p className="element-description" style={{ fontSize: (((100 - zoom) / 4) + 14) > 14 ? (((100 - zoom) / 4) + 14) : 14 + 'px' }}>
                                <p className="element-description">
                                {collapsibleItemsIndex[element.id].length} items collapsed
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    }
                    else {
                      return null
                    }
                  })}
                  {arrowsModel &&
                    arrowsModel.map((arrow, i) => {
                      const hovered =
                        !!selectedPath &&
                        selectedPath.find((id) => arrow.startID === id) &&
                        selectedPath.find((id) => arrow.endID === id);
                      return (
                        <Xarrow
                          key={`arrow-${i}`}
                          divContainerStyle={{ zIndex: 50 }}
                          color={`${hovered ? "#D8A032" : "#C8CDD4"}`}
                          zIndex={hovered ? 999 : 10}
                          showHead={arrow.showHead || false}
                          showTail={arrow.showTail || false}
                          strokeWidth={2}
                          passProps={{
                            onMouseOver: () => {
                              connectPaths(arrow);
                            },
                            onMouseLeave: () => {
                              setSelectedPath(null);
                            },
                          }}
                          end={String(arrow.endID)}
                          start={String(arrow.startID)}
                          endAnchor="left"
                          startAnchor="right"
                          dashness={arrow.dashness || false}
                        />
                      );
                    })}
                </div>
              )
            })}
          </Xwrapper>
        </div>
      </div>
    </div>
  );
};

//export default Diagram;