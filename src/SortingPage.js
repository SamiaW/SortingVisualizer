import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import shuffle from 'lodash.shuffle';
import "./SortingPage.css";


function SortingPage({names}) {

    const [data, setData] = useState([5, 3, 1, 7, 4, 2]);
    const [redBorder, setRedBorder] = useState([]);
    const [yellowBorder, setYellowBorder] = useState([]);


    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    const shuffleList = (event) => {
        event.stopPropagation();
        setData(shuffle(data));
    };

    const bubbleSort = async (event) => {
        event.stopPropagation();
        let tempArray = JSON.parse(JSON.stringify(data));

        for (let index = 0; index < tempArray.length; index++) {
            // setRedBorder(index);
            // await(sleep(250));
            for (let i = 0; i < tempArray.length - index; i++) {

                setRedBorder([i, i + 1]);
                await (sleep(250));

                if (tempArray[i] > tempArray[i + 1]) {
                    let temp = tempArray[i];
                    tempArray[i] = tempArray[i + 1];
                    tempArray[i + 1] = temp;
                    setData(JSON.parse(JSON.stringify(tempArray)));
                    console.log(tempArray);
                    await sleep(900);
                }
                // console.log(data);
            }
        }

        setRedBorder([]);
        // setYellowBorder(-1);
    }


    const selection = async (event) => {
        event.stopPropagation();

        let tempArray = JSON.parse(JSON.stringify(data));
        for (let index = 0; index < tempArray.length; index++) {
            setRedBorder([index]);
            await (sleep(250));
            for (let i = index; i < tempArray.length; i++) {
                setYellowBorder([i]);
                await (sleep(250));
                if (tempArray[index] > tempArray[i]) {
                    let temp = tempArray[index];
                    tempArray[index] = tempArray[i];
                    tempArray[i] = temp;
                    setData(JSON.parse(JSON.stringify(tempArray)));
                    console.log(tempArray);
                    await sleep(900);
                }
                // console.log(data);
            }
        }

        setRedBorder([]);
        setYellowBorder([]);
    }



    const borderSelection = (currentElement, index) => {
        if (redBorder.includes(index)) {
            return (
                <div className="itemRed">{currentElement}</div>
            )
        }
        if (yellowBorder.includes(index)) {
            return (
                <div className="itemYellow">{currentElement}</div>
            )
        }
        return (
            <div className="item">{currentElement}</div>
        )

    }

    const selectAlgo = () => {
        // alert(names);
        console.log(names);
        if (names == "bubble") {
            return (
                <button onClick={bubbleSort} className="btnBubbleSort ">Bubble Sort</button>
            )
        } else if (names == "selection") {
            return (<button onClick={selection} className="btnSelectionSort ">Selection Sort</button>

            )
        }
    }

    return (
        <div className="main">
            <Flipper flipKey={data.join('')}>
                <button onClick={shuffleList} className="btnShuffle"> shuffle</button>
                {selectAlgo()}

                <div className="list">
                    {data.map((currentElement, index) => (
                        <Flipped key={currentElement} flipId={currentElement}>
                            {borderSelection(currentElement, index)}
                        </Flipped>
                    ))}
                </div>
            </Flipper>
        </div>
    )
}

export default SortingPage
