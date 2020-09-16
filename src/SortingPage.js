import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import shuffle from 'lodash.shuffle';
import "./SortingPage.css";
import Button from '@material-ui/core/Button';


function SortingPage({ names }) {

    const [data, setData] = useState([5, 3, 1, 7, 4, 2]);
    const [redBorder, setRedBorder] = useState([]);
    const [yellowBorder, setYellowBorder] = useState([]);
    const [completed, setCompleted] = useState([]);


    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    const shuffleList = async (event) => {
        event.stopPropagation();
        for (let i = 0; i < 2; i++) {
            setData(shuffle(data));
            await sleep(350);
        }

    };

    const bubbleSort = async (event) => {
        event.stopPropagation();
        let tempArray = JSON.parse(JSON.stringify(data));

        setCompleted([]);
        for (let index = 0; index < tempArray.length; index++) {
            for (let i = 0; i < tempArray.length - index -1; i++) {

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
            setCompleted(x => [...x, tempArray.length - index - 1]);
        }

        setRedBorder([]);
        await sleep(500);
        setCompleted([]);
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
            setCompleted(x => [...x, index]);
        }

        setRedBorder([]);
        setYellowBorder([]);
        await sleep(500);
        setCompleted([]);
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
        if (completed.includes(index)) {
            return (
                <div className="itemCompleted">{currentElement}</div>
            )
        }
        return (
            <div className="item">{currentElement}</div>
        )

    }

    const selectAlgo = () => {
        // alert(names);
        console.log(names);
        if (names.toLowerCase() == "bubble") {
            return (
                <Button onClick={bubbleSort} variant="contained" color="default">
                    Bubble sort
                </Button>

            )
        } else if (names.toLowerCase() == "selection") {
            return (
                <Button onClick={selection} variant="contained" color="default">
                    Selection sort
                </Button>

            )
        }
    }

    return (
        <div className="sortingPage">
            <Flipper flipKey={data.join('')}>

                <div className="sortingPage__header">
                    <h2 className="sortingPage__heading">{names} Sort</h2>
                    <div className="sortingPage__buttons">
                        {selectAlgo()}

                        <Button onClick={shuffleList}
                            variant="contained" color="secondary">
                            Shuffle
                        </Button>
                    </div>
                </div>

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
