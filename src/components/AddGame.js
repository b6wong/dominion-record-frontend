import React, { useState } from "react";
import GameDataService from "../services/GameService";

const AddGame = () => {
    const initialGameState = {
        id: null,
        player1: "",
        player2: "",
        score1: 0,
        score2: 0,
        result: "",
        date: ""
    };
    const [game, setGame] = useState(initialGameState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setGame({ ...game, [name]: value });
    };

    const saveGame = () => {
        var data = {
            player1: game.player1,
            player2: game.player2,
            score1: game.score1,
            score2: game.score2,
            result: game.result,
            date: game.date
        };

        GameDataService.create(data)
            .then(response => {
                setGame({
                    id: response.data.id,
                    player1: response.data.player1,
                    player2: response.data.player2,
                    score1: response.data.score1,
                    score2: response.data.score2,
                    result: response.data.result,
                    date: response.data.date
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newGame = () => {
        setGame(initialGameState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newGame}>
                        Add
              </button>
                </div>
            ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="player1">Player 1</label>
                            <input
                                type="text"
                                className="form-control"
                                id="player1"
                                required
                                value={game.player1}
                                onChange={handleInputChange}
                                name="player1"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="score1">Score</label>
                            <input
                                type="text"
                                className="form-control"
                                id="score1"
                                required
                                value={game.score1}
                                onChange={handleInputChange}
                                name="score1"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="player2">Player 2</label>
                            <input
                                type="text"
                                className="form-control"
                                id="player2"
                                required
                                value={game.player2}
                                onChange={handleInputChange}
                                name="player2"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="score2">Score</label>
                            <input
                                type="text"
                                className="form-control"
                                id="score2"
                                required
                                value={game.score2}
                                onChange={handleInputChange}
                                name="score2"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="result">Result</label>
                            <input
                                type="text"
                                className="form-control"
                                id="result"
                                required
                                value={game.result}
                                onChange={handleInputChange}
                                name="result"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input
                                type="text"
                                className="form-control"
                                id="date"
                                required
                                value={game.date}
                                onChange={handleInputChange}
                                name="date"
                            />
                        </div>

                        <button onClick={saveGame} className="btn btn-success">
                            Submit
              </button>
                    </div>
                )}
        </div>
    );
};

export default AddGame;