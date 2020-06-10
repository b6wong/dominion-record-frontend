import React, { useState, useEffect } from "react";
import GameDataService from "../services/GameService";
import { Link } from "react-router-dom";

const GamesList = () => {
    const [games, setGames] = useState([]);
    const [currentGame, setCurrentGame] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        retrieveGames();
    }, []);

    const onChangeSearchTitle = e => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    const retrieveGames = () => {
        GameDataService.getAll()
            .then(response => {
                setGames(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveGames();
        setCurrentGame(null);
        setCurrentIndex(-1);
    };

    const setActiveGame = (game, index) => {
        setCurrentGame(game);
        setCurrentIndex(index);
    };

    const removeAllGames = () => {
        GameDataService.removeAll()
            .then(response => {
                console.log(response.data);
                refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByTitle = () => {
        GameDataService.getAll()
            .then(response => {
                setGames(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        /*
        TutorialDataService.findByTitle(searchTitle)
            .then(response => {
                setTutorials(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        */
    };

    return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title"
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByTitle}
                        >
                            Search
                </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h4>Games List</h4>

                <ul className="list-group">
                    {games &&
                        games.map((game, index) => (
                            <li
                                className={
                                    "list-group-item " 
                                    + (index === currentIndex ? "active" : "") 
                                    + (game.player1 === "PandaBearGuy" && game.result === "1" ? " won" : "") 
                                    + (game.player2 === "PandaBearGuy" && game.result === "2" ? " won" : "") 
                                    + (game.player1 === "PandaBearGuy" && game.result === "2" ? " lost" : "") 
                                    + (game.player2 === "PandaBearGuy" && game.result === "1" ? " lost" : "") 
                                    + (game.result === "T" ? " tie" : "")
                                }
                                onClick={() => setActiveGame(game, index)}
                                key={index}
                            >
                                {game.player1} ({game.score1}) - ({game.score2}) {game.player2}
                            </li>
                        ))}
                </ul>

                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeAllGames}
                >
                    Remove All
            </button>
            </div>
            <div className="col-md-6">
                {currentGame ? (
                    <div>
                        <h4>Game</h4>
                        <div>
                            <label>
                                <strong>Player 1:</strong>
                            </label>{" "}
                            {currentGame.player1}
                        </div>
                        <div>
                            <label>
                                <strong>Score:</strong>
                            </label>{" "}
                            {currentGame.score1}
                        </div>
                        <div>
                            <label>
                                <strong>Player 2:</strong>
                            </label>{" "}
                            {currentGame.player2}
                        </div>
                        <div>
                            <label>
                                <strong>Score:</strong>
                            </label>{" "}
                            {currentGame.score2}
                        </div>
                        <div>
                            <label>
                                <strong>Result</strong>
                            </label>{" "}
                            {currentGame.result}
                        </div>
                        <div>
                            <label>
                                <strong>Date:</strong>
                            </label>{" "}
                            {currentGame.date}
                        </div>

                        <Link
                            to={"/games/" + currentGame.id}
                            className="badge badge-warning"
                        >
                            Edit
                </Link>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Please click on a Game...</p>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default GamesList;