import React, { useState, useEffect } from "react";
import GameDataService from "../services/GameService";

const Game = props => {
    const initialGameState = {
        id: null,
        title: "",
        description: "",
        published: false
    };
    const [currentGame, setCurrentGame] = useState(initialGameState);
    const [message, setMessage] = useState("");

    const getGame = id => {
        GameDataService.get(id)
            .then(response => {
                setCurrentGame(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getGame(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentGame({ ...currentGame, [name]: value });
    };

    const updateGame = () => {
        GameDataService.update(currentGame.id, currentGame)
            .then(response => {
                console.log(response.data);
                setMessage("The game was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };

    const deleteGame = () => {
        GameDataService.remove(currentGame.id)
            .then(response => {
                console.log(response.data);
                props.history.push("/games");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            {currentGame ? (
                <div className="edit-form">
                    <h4>Game</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="player1">Player 1</label>
                            <input
                                type="text"
                                className="form-control"
                                id="player1"
                                name="player1"
                                value={currentGame.player1}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="score1">Score</label>
                            <input
                                type="text"
                                className="form-control"
                                id="score1"
                                name="score1"
                                value={currentGame.score1}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="player2">Player 2</label>
                            <input
                                type="text"
                                className="form-control"
                                id="player2"
                                name="player2"
                                value={currentGame.player2}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="score2">Score</label>
                            <input
                                type="text"
                                className="form-control"
                                id="score2"
                                name="score2"
                                value={currentGame.score2}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="result">Result</label>
                            <input
                                type="text"
                                className="form-control"
                                id="result"
                                name="result"
                                value={currentGame.result}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input
                                type="text"
                                className="form-control"
                                id="date"
                                name="date"
                                value={currentGame.date}
                                onChange={handleInputChange}
                            />
                        </div>

                    </form>

                    <button className="badge badge-danger mr-2" onClick={deleteGame}>
                        Delete
              </button>

                    <button
                        type="submit"
                        className="badge badge-success"
                        onClick={updateGame}
                    >
                        Update
              </button>
                    <p>{message}</p>
                </div>
            ) : (
                    <div>
                        <br />
                        <p>Please click on a Game...</p>
                    </div>
                )}
        </div>
    );
};

export default Game;